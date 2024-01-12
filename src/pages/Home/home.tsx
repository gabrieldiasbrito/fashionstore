import Category from "../../components/category/category"
import Slider from "../../components/slider/slider"
import MostSell from "../../components/mostsell/most-sell"
import BrandSlider from "../../components/brandslider/brandslider"

import './home.css'

export default function Home(){
    return(
        <>
            <Slider/>
            <br />
            <MostSell/>
            <br />
            <div className='body'>
                <Category/>
            </div>
            <br />
            <BrandSlider
                title="Adidas"
                brand="Adidas"
            />
            <br />
            <BrandSlider
                title="Nike"
                brand="Nike"
            />
        </>
    )
}