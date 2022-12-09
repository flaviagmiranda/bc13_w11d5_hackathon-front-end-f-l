import React from 'react'
import CarouselButton from '../Carousel Button/CarouselButton'
import ImagePosition from '../Image Position/ImagePosition'
import Fact from '../Fact/Fact.js'

export default function Viewer() {
  return (<main>
    <CarouselButton direction='left'/>
    <img src="https://t3.ftcdn.net/jpg/02/95/94/94/360_F_295949484_8BrlWkTrPXTYzgMn3UebDl1O13PcVNMU.jpg" alt="google" />
    <ImagePosition />
    <CarouselButton direction='right' />
    <Fact />
    </main>
  )
}
