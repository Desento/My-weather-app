import './WeatherForThreeDays.css'

let day: string;
function dayName(index: any) {
    switch (index) {
        case 0:
            day = 'Today';
            break;
        case 1:
            day = 'Tomorow';
            break;
        case 2:
            day = 'Aftertomorow';
            break;
    }
}

const WeatherForThreeDays = ({ weather }: any) => {

    return (
        <div className='WeatherForThreeDaysContainer component'> {weather && weather.map((item: any, index: number) => {
            dayName(index)
            return (
                <div className='weatherForDay'>
                    <div className="dayName">{day}</div>
                    <img className="weatherDayimg" src={item.condition.icon} alt="" />
                    <div className="weatherDayTempMin">{item.mintemp_c}°</div>
                    <div className="weatherDayTempMax">{item.maxtemp_c}°</div>
                </div>
            )
        })}
        </div>
    )
}
export default WeatherForThreeDays