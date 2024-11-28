import { useEffect, useState } from 'react'
import { getRandomFact } from '../../services/facts'

export function useCatFact() {
  const [fact, setFact] = useState()

  const fetchRandomFact = async () => {
    const facts = await getRandomFact()
    setFact(facts)
  }
  useEffect(() => {
    fetchRandomFact()
  }, [])
  return { fact, fetchRandomFact }
}

