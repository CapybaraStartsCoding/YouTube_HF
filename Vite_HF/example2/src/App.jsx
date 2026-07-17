import { useHFQuery } from "./HFApiRequest"

export default function App() {
const {data, isLoading} = useHFQuery();

if(isLoading){
  return <div>Loading</div>
}

  return <>
  <p>Here is the list of cities to visit in Poland:</p>
  <ol style={{display: 'flex', padding: '8px', flexDirection:'column', margin:'50px'}}>
    {data && data.map((place)=><li>{place}</li>)}
     </ol>
  </>
}
