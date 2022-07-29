import { GET_LOCATION, setUserLocation, setWeatherOnHours, setForecastFor3Days } from "../actions/locationAction";
import { call, all, takeLatest, put } from 'redux-saga/effects';
import { keyApi, qty, numberOfHours } from '../../constants/constans'
import axios from "axios";

let weatherOnHours: any;

async function setDataForWeatherOnHours(time: number, forecastday: any) {
    if (time >= 13) {
        const difference: number = qty - (numberOfHours - time);
        weatherOnHours = forecastday[0].hour;
        weatherOnHours = weatherOnHours.slice(time, numberOfHours + 1);
        let weatherHoursTomorrow = forecastday[1].hour;
        weatherHoursTomorrow = weatherHoursTomorrow.slice(0, difference);
        weatherOnHours = [...weatherOnHours, ...weatherHoursTomorrow]
    } else {
        weatherOnHours = forecastday[0].hour;
        weatherOnHours = weatherOnHours.slice(time, time + qty);
    }
};


function* sendLocationSaga(action: any) {
    try {
        const { data } = yield call(axios.get,
            `http://api.weatherapi.com/v1/forecast.json?key=${keyApi}&q=${action.payload}&days=5&aqi=no&alerts=no`);

        yield put(setUserLocation(data));
        const { current, forecast } = data;

        const forecastday: any = Array.from(forecast.forecastday);
        const forecastFor3Days = forecastday.map((item: any) => item.day);

        const lastUpdate = Number(current.last_updated.slice(11, 13));

        setDataForWeatherOnHours(lastUpdate, forecastday);

        yield put(setWeatherOnHours(weatherOnHours));
        yield put(setForecastFor3Days(forecastFor3Days));

    } catch (error: any) {
        console.error(error.message)
    }
}

function* locationSaga() {
    yield all([takeLatest(GET_LOCATION, sendLocationSaga)])
}

export default locationSaga;