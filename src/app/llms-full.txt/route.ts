import { llmsFullIndex, textResponse } from "@/lib/llms";

export function GET() {
  return textResponse(llmsFullIndex());
}
