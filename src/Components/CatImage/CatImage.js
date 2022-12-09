import React from 'react'

export default function CatImage({ cats, currentCat }) {


  return (
    <img src={`https://cataas.com/cat/${cats[currentCat]?.id}`} alt="cat" />
  )
};