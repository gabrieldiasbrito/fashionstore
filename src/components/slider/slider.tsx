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
                <div className="slide">
                    <div>
                        <h1>TÊNIS CAMPUS 00S</h1>
                        <button>Detalhes</button>
                    </div>
                    <video loop autoPlay muted>
                        <source src="https://assets.adidas.com/videos/ar_1,w_720,c_fill,q_auto,f_auto/f9aee4ef5561438a9fb6cd365b225047_d98c/Tenis_Campus_00s_Preto_IF8768_video.mp4"/>
                    </video>
                    <div> 
                        <h3>INSPIRADO NA CENA DO SKATE DOS ANOS 2000, MAS ATUALIZADO COM DETALHES SOFISTICADOS</h3>
                        <br />
                        <p>Encare o dia a dia com todo o conforto e o estilo proporcionados por este tênis adidas. Versão moderna de um ícone dos anos 80, ele inclui o renomado cabedal de camurça, atualizado com detalhes em couro fosco para aumentar a profundidade. As proporções menores, mas retrô, gera um visual futurista que também honra o passado.</p>
                    </div>
                 </div>
                </SwiperSlide>
        </Swiper>
    )
}