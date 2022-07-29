import './WeatherForHours.css'
import { useSelector } from 'react-redux'
import { https } from '../../constants/constans'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



const WeatherForHours = ({ weather }: any) => {
    return (
        <div className='WeatherForHours component'>
            <Swiper className="weatherOnHoursSwiper"
                spaceBetween={20}
                breakpoints={{
                    600: { slidesPerView: 5 },
                    400: { slidesPerView: 3 },
                }}
            > {weather && weather.map((item: any, index: any) => {
                return (
                    <SwiperSlide className="weatherOnHourSlide" key={index}>
                        <div className='weatherOnHour__time'>{item.time.slice(11, 16)} </div>
                        <img className='weatherOnHour__icon' src={item.condition.icon} alt="" />
                        <div className='weatherOnHour__temp'>{item.temp_c}° </div>
                    </SwiperSlide>
                )
            })}
            </Swiper>
        </div>

    )
}
export default WeatherForHours;
