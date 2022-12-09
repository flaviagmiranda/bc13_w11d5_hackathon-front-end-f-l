import React, { useEffect, useState } from 'react'

export default function CatImage({ cats }) {

    const [url, setUrl] = useState("")

    useEffect(() => {
        async function constructUrl() {
            setUrl(`https://cataas.com/cat/${cats[0]?.id}`)   
        }
        constructUrl();
      }, [cats]);

  return (
    <img src={url} alt="cat" />
  )
}
