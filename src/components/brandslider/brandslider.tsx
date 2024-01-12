import {Swiper, SwiperSlide} from "swiper/react"
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import data from '../../data/data.json'

export default function BrandSlider(props:any){

    const filteredData =  data.filter((a) => a.brand == props.brand)
    .sort((a,b) =>  b.sales - a.sales)

    return(
        <div className="most-sell">
                <h2>{props.title}</h2>
                <Swiper
                    className="most-sell-slider"
                    modules={[ Navigation]}
                    grabCursor={true}
                    spaceBetween={10}
                    navigation={true}
                    loop={true}
                    breakpoints={{
                        1920: {
                            slidesPerView:6
                        },
                        1600:{
                            slidesPerView:5
                        },
                        1280:{
                            slidesPerView:4
                        },
                        1024:{
                            slidesPerView:3
                        },
                        720:{
                            slidesPerView:2,
                        }
                    }}   
                >
                    {filteredData.map((item) =>
                        <SwiperSlide className="product-card">
                            <div className="product-card-container">
                                <img src={item.images[0]} />
                                <h3>R$ {item.price}</h3>
                            </div>
                            <div className="product-card-description">
                                <h3>{item.name}</h3>
                                <p>{item.type}</p>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
    )
}