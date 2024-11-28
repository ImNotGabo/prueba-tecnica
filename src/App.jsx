import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

function App() {
  // const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
  const { fact, fetchRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    fetchRandomFact()
  }

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Cat App</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${imageUrl}`}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  )
}

export default App

