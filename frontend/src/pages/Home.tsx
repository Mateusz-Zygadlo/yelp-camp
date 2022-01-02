import React from 'react'
import {
  Popup,
  Card,
} from '../components'
import { Images } from '../assets'

export const Home: React.FC = () => {
  const camps = [{
    title: 'Mount Ulap',
    shortDescription: 'One of the most famous hikes in Benguet is Mt Ulap in Otogon.',
    img: Images.MountUlap,
  }, {
    title: 'Calaguas Islands',
    shortDescription: 'A paradise of islands that can rival the white sand beauty of Boracay.',
    img: Images.CalaguasIslands,
  }, {
    title: 'Onay Beach',
    shortDescription: 'This is one of the best beach camping sites, beautiful and pristine.',
    img: Images.OnayBeach,
  }, {
    title: 'Seven Sisters Waterfall',
    shortDescription: 'The Seven Sisters is the 39th tallest waterfall in Norway.',
    img: Images.SevenSistersWaterfall,
  }, {
    title: 'Latik Riverside',
    shortDescription: 'Philippines is one of the most dazzling countries in all of Asia.',
    img: Images.LatikRiverside,
  }, {
    title: 'Buloy Springs',
    shortDescription: 'This is one of the best beach camping sites, beautiful and pristine.',
    img: Images.BuloySprings
  }]

  return(
    <>
      <Popup />
      <div className="responsiveGrid h-full">
        {camps.map((camp, index) => (
          <Card 
            key={index}
            title={camp.title}
            shortDescription={camp.shortDescription}
            img={camp.img}
          />
        ))}
      </div>
    </>
  )
}