import {Swiper, SwiperSlide} from "swiper/react"
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import './most-sell.css'

import data from '../../data/data.json'

export default function MostSell(){

    const filteredData =  data.filter((a) => a.sales >= 30)
    .sort((a,b) =>  b.sales - a.sales)

    return(
        <div className="most-sell">
                <h2>Mais vendidos</h2>
                <Swiper
                    className="most-sell-slider"
                    modules={[ Navigation, Scrollbar]}
                    grabCursor={true}
                    spaceBetween={10}
                    navigation={true}
                    scrollbar={{
                        hide: false,
                    }}
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