import React from 'react'

export default function CatImage({ cats }) {
  return (
    <img src={`https://cataas.com/cat/${cats[0]?.id}`} alt="cat" />
  )
};