import { useHFQuery } from "./HFApiRequest"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function App() {
const {data, isLoading} = useHFQuery();

if(isLoading){
  return <div>Loading</div>
}

  return (
    <div style={{display: "flex", flexDirection: "column", padding: "50px"}}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
    {data && data || "The answer is empty"}</ReactMarkdown>
  </div>
  )
  
  
}
