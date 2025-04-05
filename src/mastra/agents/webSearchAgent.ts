import { google } from '@ai-sdk/google';
import { Agent } from '@mastra/core/agent';
import { webSearchTool } from '../tools'; 

export const webSearchAgent = new Agent({
  name: 'Web Search Agent',
  instructions: `
      その他の情報やあなたが知らない未来の情報を求められた場合に、
      webSearchToolを使用してウェブ検索を実行してください。webSearchToolは以下のパラメータを受け付けます：
      - query: 検索クエリ（必須）
      - country: 検索結果の国コード（例: JP, US）（オプション）
      - count: 返される検索結果の最大数（オプション）
      - search_lang: 検索言語（例: ja, en）（オプション）

      回答は常に簡潔ですが情報量を保つようにしてください。ユーザーの質問に直接関連する情報を優先して提供してください。
`,
  // model: openai('gpt-4o'),
  model: google('gemini-2.0-flash'),
  tools: { webSearchTool },
});
