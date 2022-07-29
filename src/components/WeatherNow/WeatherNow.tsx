import { Icon } from '@mui/material';
import { useSelector } from 'react-redux';
import './WeatherNow.css';

const WeatherNow = ({ nowTemp, userLocation, locationIcon, maxTemp, minTemp }: any,) => {
    return (
        <div className="weatherNow component">
            <div className="weatherNow__location">{userLocation}</div>
            <div className="weatherNow__tempNow">{nowTemp}°</div>
            <div className="weatherNow__tempRange">
                <div className="temp">Max. {maxTemp}°</div>
                <div className="temp">Min. {minTemp}°</div>
            </div>
            <img className="weatherNow__icon" src={locationIcon} />
        </div>
    )
}

export default WeatherNow;
