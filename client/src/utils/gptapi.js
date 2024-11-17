import axios from 'axios';
import { OPENAI_KEY } from '../constants/urlConstants';

export async function editBio(prompt) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/gpt-4/completions',
      {
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.7,
        top_p: 1,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_KEY}`,
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error editing bio:", error);
    return null;
  }
}
