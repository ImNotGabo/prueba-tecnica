import { useState, useEffect } from 'react'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    const getCatImageUrl = async () => {
      if (!fact) return

      const threeFirstWords = fact.split(' ', 3).join(' ')
      console.log(threeFirstWords)

      const response = await fetch(
        `https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`
      )
      const { url } = response
      setImageUrl(url)
    }
    getCatImageUrl()
  }, [fact])
  return { imageUrl }
}

