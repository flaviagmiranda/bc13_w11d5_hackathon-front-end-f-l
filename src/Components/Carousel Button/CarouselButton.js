import React from 'react'
import './CarouselButton.css'

export default function CarouselButton({direction, currentCat, setCurrentCat}) {

  function changeImage() {
    if (direction === '>'){
      if (currentCat < 4){
        setCurrentCat(currentCat++)
      } 
    } else if (direction === '<') {
        if (currentCat > 0){
          setCurrentCat(currentCat--)
        } 
    }
  }

  return (
    <button onClick={changeImage} className='carousel-button'>{direction}</button>
  )
}
