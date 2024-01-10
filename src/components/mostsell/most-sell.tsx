import {Swiper, SwiperSlide} from "swiper/react"
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import './most-sell.css'

export default function MostSell(){
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
                    <SwiperSlide className="product-card">
                        <div className="product-card-container">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            <h3>R$ 000,00</h3>
                        </div>
                        <div className="product-card-description">
                            <h3>Titulo</h3>
                            <p>Categoria</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product-card">
                        <div className="product-card-container">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            <h3>R$ 000,00</h3>
                        </div>
                        <div className="product-card-description">
                            <h3>Titulo</h3>
                            <p>Categoria</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product-card">
                        <div className="product-card-container">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            <h3>R$ 000,00</h3>
                        </div>
                        <div className="product-card-description">
                            <h3>Titulo</h3>
                            <p>Categoria</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product-card">
                        <div className="product-card-container">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            <h3>R$ 000,00</h3>
                        </div>
                        <div className="product-card-description">
                            <h3>Titulo</h3>
                            <p>Categoria</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product-card">
                        <div className="product-card-container">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            <h3>R$ 000,00</h3>
                        </div>
                        <div className="product-card-description">
                            <h3>Titulo</h3>
                            <p>Categoria</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product-card">
                        <div className="product-card-container">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            <h3>R$ 000,00</h3>
                        </div>
                        <div className="product-card-description">
                            <h3>Titulo</h3>
                            <p>Categoria</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product-card">
                        <div className="product-card-container">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            <h3>R$ 000,00</h3>
                        </div>
                        <div className="product-card-description">
                            <h3>Titulo</h3>
                            <p>Categoria</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product-card">
                        <div className="product-card-container">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            <h3>R$ 000,00</h3>
                        </div>
                        <div className="product-card-description">
                            <h3>Titulo</h3>
                            <p>Categoria</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="product-card">
                        <div className="product-card-container">
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            <h3>R$ 000,00</h3>
                        </div>
                        <div className="product-card-description">
                            <h3>Titulo</h3>
                            <p>Categoria</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
    )
}