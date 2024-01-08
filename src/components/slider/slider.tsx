import {Swiper, SwiperSlide} from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './slider.css'

export default function Slider(){
    return(
        <Swiper
            className="slider"
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
        >
            <SwiperSlide >
                <img className="testi" src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide >
                <img className="testi" src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide >
                <img className="testi" src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide >
                <img className="testi" src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
        </Swiper>
    )
}