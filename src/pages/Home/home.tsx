import Category from "../../components/category/category"
import Slider from "../../components/slider/slider"
import MostSell from "../../components/mostsell/most-sell"

import './home.css'

export default function Home(){
    return(
        <>
            <Slider/>
            <br />
            <div className='body'>
                <Category/>
            </div>
            <br />
            <MostSell/>
        </>
    )
}