# このリポジトリについて

Mastraの勉強用のリポジトリです




## api呼び出しの例

```console

% curl -X POST http://localhost:4111/api/agents/weatherAgent/stream \
-H "Content-Type: application/json" \
-d '{"messages":[{"role":"user","content":"Tokyoの天気を教えて"}]}'

↓ Result
f:{"messageId":"msg-HauOX5nOnIuttxeulxAV8REM"}
0:"東京(Tokyo)の天"
0:"気を確認させていただきます。"
9:{"toolCallId":"toolu_01KrN8BV282ZBv4yiwUaVhsQ","toolName":"weatherTool","args":{"location":"Tokyo"}}
a:{"toolCallId":"toolu_01KrN8BV282ZBv4yiwUaVhsQ","result":{"temperature":8.6,"feelsLike":7.1,"humidity":87,"windSpeed":3.9,"windGust":2.5,"conditions":"Clear sky","location":"Tokyo"}}
e:{"finishReason":"tool-calls","usage":{"promptTokens":551,"completionTokens":72},"isContinued":false}
f:{"messageId":"msg-8ZSA4yptpxzRC829jdcpEsZA"}
0:"現"
0:"在の東京の天気をお知"
0:"らせします：\n- 気温: 8.6°"
0:"C\n- 体感温度: 7."
0:"1°C\n- 湿度: 87%\n-"
0:" 風速: 3.9m/s\n- "
0:"天候: 快晴\n\n現在は"
0:"空が澄んでいて、や"
0:"や寒い気温となっています。湿"
0:"度が高めですので、暖かい服装"
0:"をお勧めします。"
e:{"finishReason":"stop","usage":{"promptTokens":678,"completionTokens":124},"isContinued":false}
d:{"finishReason":"stop","usage":{"promptTokens":1229,"completionTokens":196}}
```
