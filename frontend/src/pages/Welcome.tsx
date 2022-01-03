import React, {
  useEffect,
} from 'react'
import { 
  useWindowSize,
  useMeasure,
} from '../hooks'
import { Images } from '../assets'
import { Button } from '../components'
import { MOBILE_WIDTH } from '../constants'
import { Link } from 'react-router-dom'
 
export const Welcome: React.FC = () => {
  const [rect, myRef]: any = useMeasure()
  const { width, setWidth } = useWindowSize()

  useEffect(() => {
    if(rect) setWidth(rect.width)
  }, [rect])

  return(
    <div 
      className="w-screen h-full bg-main lg:flex overflow-x-hidden"
      ref={myRef}
    >
      <div className="pl-10 md:pl-16 lg:pl-24 pt-8 flex flex-col justify-start lg:w-[60rem] h-screen">
        <img 
          src={Images.Logo} 
          alt="logo" 
          className="w-36 mb-20"
        />
        <div>
          {width < MOBILE_WIDTH && (
            <div className="HeroImageMobileWidth mb-10">
              <img 
                src={Images.HeroImageMobile} 
                alt="Hero" 
                className="landingAspectRatio"
              />
            </div>
          )}
          <h1 className="text-5xl fontWeight w-4/5 mb-2">Explore the best camps on Earth.</h1>
          <p className="text-md w-3/5">YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
          <ul className="mt-3">
            <li className="flex my-2">
              <img src={Images.Checkmark} alt="checkmark" />
              <h2 className="ml-3">Add your iwn camp suggestions.</h2>
            </li>
            <li className="flex my-2">
              <img src={Images.Checkmark} alt="checkmark" />
              <h2 className="ml-3">Leave reviews and experiences.</h2>
            </li>
            <li className="flex my-2">
              <img src={Images.Checkmark} alt="checkmark" />
              <h2 className="ml-3">See locations for all camps.</h2>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <Link to='/'>
            <Button noFull>View Campgrounds</Button>
          </Link>
        </div> 
        <div className="mt-6 w-1/2 pb-10 lg:pb-0">
          <h3>Partnered with: </h3>
          <div className="flex w-full justify-between">
            <img src={Images.Airbnb} alt="Airbnb logo" />
            <img src={Images.Booking} alt="Booking logo" />
            <img src={Images.PlumGuide} alt="Plum Guide logo" />
          </div>
        </div>
      </div>
      {width > MOBILE_WIDTH && (
        <div className="lg:w-[50rem] lg:h-screen flex justify-center lg:justify-end w-screen">
          <img 
            src={Images.HeroImage} 
            alt="Hero" 
            className="landingAspectRatio"
          />
        </div>
      )}
    </div>
  )
}