import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const MODEL = "gemma-3-27b-it";

const BASE_SYSTEM_PROMPT = `당신은 프론트엔드 개발자 면접 준비를 돕는 AI 튜터입니다.
JavaScript, React, CSS, CS, 자료구조, 알고리즘 등 프론트엔드 관련 개념에 대해 명확하고 이해하기 쉽게 설명해 주세요.
간결하게 답변하되, 필요한 경우 코드 예시를 포함하세요.
항상 한국어로 답변해 주세요.`;

interface HistoryItem {
  role: string;
  text: string;
}

interface CardContext {
  question: string;
  answer: string;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "API 키가 설정되지 않았습니다.", code: "API_ERROR" },
      { status: 500 }
    );
  }

  const {
    message,
    history,
    cardContext,
  }: { message: string; history: HistoryItem[]; cardContext?: CardContext } =
    await req.json();

  const systemPrompt = cardContext
    ? `${BASE_SYSTEM_PROMPT}\n\n현재 사용자가 학습 중인 플래시카드:\n질문: ${cardContext.question}\n답변: ${cardContext.answer}`
    : BASE_SYSTEM_PROMPT;

  // Gemma는 systemInstruction 미지원 → 첫 turn에 주입
  const contents = [
    { role: "user" as const, parts: [{ text: systemPrompt }] },
    { role: "model" as const, parts: [{ text: "알겠습니다. 프론트엔드 면접 준비를 도와드리겠습니다." }] },
    ...(history ?? []).map((h) => ({
      role: h.role as "user" | "model",
      parts: [{ text: h.text }],
    })),
    { role: "user" as const, parts: [{ text: message }] },
  ];

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: MODEL,
      contents,
      config: {
        maxOutputTokens: 1024,
        temperature: 0.7,
      },
    });

    const answer = response.text ?? "답변을 생성할 수 없습니다.";
    return NextResponse.json({ answer });
  } catch (err: unknown) {
    const errMessage = err instanceof Error ? err.message : String(err);
    console.error("[Gemini API] Error:", errMessage);

    if (
      errMessage.includes("429") ||
      errMessage.toLowerCase().includes("quota") ||
      errMessage.toLowerCase().includes("resource_exhausted") ||
      errMessage.toLowerCase().includes("rate limit")
    ) {
      return NextResponse.json(
        { error: "Quota exceeded", code: "QUOTA_EXCEEDED" },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: errMessage, code: "API_ERROR" },
      { status: 500 }
    );
  }
}
