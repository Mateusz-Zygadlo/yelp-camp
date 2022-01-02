import React from 'react'
import { Images } from '../assets'
import { 
  Button,
  Comment,
} from '../components'

export const Detail: React.FC = () => {
  return(
    <>
      <div className="flex flex-col-reverse lg:flex-row mt-5 w-full">
        <img 
          src={Images.Map} 
          alt="map" 
          className="border p-10 mr-5 lg:h-96 w-full lg:w-auto mt-5 lg:mt-0"
        />
        <div>
          <div className="p-10 border w-auto mb-5">
            <img 
              src={Images.MountUlap} 
              alt="Mount Ulap" 
              className="w-full"
            />
            <div className="mt-5">
              <div className="flex justify-between mb-3 items-center">
                <h1 className="text-3xl">Mount Ulap</h1>
                <h2 className="font-bold">$104.99/night</h2>
              </div>
              <p className="text-sm">Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.</p>
              <p className="text-sm mt-4">Submitted by Andrew Mike</p>
            </div>
          </div>
          <div className="px-10 py-7 border">
            <Comment />
            <div className="mt-5 w-full flex lg:justify-end">
              <Button>Leave a Review</Button>
            </div> 
          </div>
        </div>
      </div>
      <img 
        src={Images.Logo} 
        alt="logo" 
        className="mt-10"
      />
    </>
  )
}