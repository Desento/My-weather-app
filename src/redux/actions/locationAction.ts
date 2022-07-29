export const SET_USER_LOCATION = "SET_USER_LOCATION";
export const GET_LOCATION = "GET_LOCATION";
export const SET_WEATHER_ON_HOURS = "SET_WEATHER_ON_HOURS";
export const SET_FORECAST_FOR_3_DAYS = "SET_FORECAST_FOR_3_DAYS";


export const setUserLocation = (payload: {}) => {
    return {
        type: SET_USER_LOCATION,
        payload: payload
    }
}

export const getLocation = (payload: string) => {
    return {
        type: GET_LOCATION,
        payload: payload
    }
}

export const setWeatherOnHours = (payload: []) => {
    return {
        type: SET_WEATHER_ON_HOURS,
        payload: payload
    }
}

export const setForecastFor3Days = (payload: []) => {
    return {
        type: SET_FORECAST_FOR_3_DAYS,
        payload: payload
    }
}
