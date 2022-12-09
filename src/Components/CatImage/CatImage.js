import React, { useEffect, useState } from 'react'
import './CatImage.css'

export default function CatImage({ cats, currentCat }) {

    const [url, setUrl] = useState("")

    useEffect(() => {
        async function constructUrl() {
            setUrl(`https://cataas.com/cat/${cats[currentCat]?.id}`)   
        }
        constructUrl();
      }, [cats, currentCat]);

  return (
    <img src={url} alt="cat" />
  )
}
