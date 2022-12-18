import { useEffect, useState } from 'react'
import './App.css'

function App(): JSX.Element {

  const [memeData, setMemeData] = useState<any>(null)
  function fetchMeme() {
    fetch('https://meme-api.com/gimme')
      .then(response => response.json())
      .then(data => {
        setMemeData(data);
      })
      .catch(error => {
        console.log(error)
      });
  }

  useEffect(() => {
    fetchMeme()
  }, [])


  if(!memeData){
    return <h1>Loading...</h1>
  }


  return (
    <div className="App">
      <img src={memeData.url} />
      <br />
      <button onClick={fetchMeme}> Next</button>

    </div>
  )
}

export default App
