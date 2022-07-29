import { SET_USER_LOCATION, GET_LOCATION, SET_WEATHER_ON_HOURS, SET_FORECAST_FOR_3_DAYS } from "../actions/locationAction";

const initialState = {
    userLocation: '',
    data: {},
    weatherOnHours: [],
    forecastFor3Days: [],
}

const locationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_LOCATION:
            return { ...state, data: action.payload }
        case GET_LOCATION:
            return { ...state, userLocation: action.payload }
        case SET_WEATHER_ON_HOURS:
            return { ...state, weatherOnHours: action.payload }
        case SET_FORECAST_FOR_3_DAYS:
            return { ...state, forecastFor3Days: action.payload }
        default:
            return { ...state }
    }
}

export default locationReducer;