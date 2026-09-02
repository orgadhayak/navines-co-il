import { llmsIndex, textResponse } from "@/lib/llms";

export function GET() {
  return textResponse(llmsIndex());
}
