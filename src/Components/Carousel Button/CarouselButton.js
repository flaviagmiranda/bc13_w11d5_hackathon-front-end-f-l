import React from 'react'
import useClassNameConstructor from '../../Custom Hooks/useClassNameConstructor'
import './CarouselButton.css'

export default function CarouselButton({direction, currentCat, setCurrentCat, cats }) {
  const className = useClassNameConstructor("carousel-button carousel-button")

  function changeImage() {
    if (direction === '>'){
      if (currentCat < 4){
        setCurrentCat(currentCat++)
        console.log(currentCat)
        console.log(cats[currentCat].id)
      } 
    } else if (direction === '<') {
        if (currentCat > 0){
          setCurrentCat(currentCat--)
          console.log(currentCat)
          console.log(cats[currentCat])
        } 
    }
  }

  return (
    <button onClick={changeImage} className={className}>{direction}</button>
  )
}
