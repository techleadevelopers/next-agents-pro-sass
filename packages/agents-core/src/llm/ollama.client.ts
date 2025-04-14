import ollama from 'ollama'

export async function generateLLMResponse(prompt: string): Promise<string> {
  const response = await ollama.chat({
    model: 'tinyllama',
    messages: [{ role: 'user', content: prompt }],
  })
  return response.message.content
}
