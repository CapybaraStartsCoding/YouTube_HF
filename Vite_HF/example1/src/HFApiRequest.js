import { useQuery } from "@tanstack/react-query";
import { HF_MODEL, QUESTION, TOKEN } from "./costants";
import {InferenceClient} from "@huggingface/inference"

export function useHFQuery(){
return useQuery({
  queryKey:["HuggingFace"],
  queryFn: ()=>getHFAnswer(),
  staleTime: 1000*60*60,
  retry: false,
})
}

async function getHFAnswer(){
  
  const hf = new InferenceClient(TOKEN)

  const answer = await hf.chatCompletion({
    model: HF_MODEL,
    messages: [{
      role: "user",
      content: QUESTION,
    }],
    provider: "novita",
  })

  console.log(answer)

  const answerText = answer.choices[0]?.message?.content || {};

 return answerText
} 