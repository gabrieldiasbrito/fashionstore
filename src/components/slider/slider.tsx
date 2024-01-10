import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css'

export default function Slider(){
    return(
        <Swiper
            className="slider"
            grabCursor={true}
            loop={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
        >
            <SwiperSlide >
                <img className="slide" src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide >
                <img className="slide" src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide >
                <img className="slide" src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide >
                <img className="slide" src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
        </Swiper>
    )
}