import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation } from './redux/actions/locationAction';
import { https } from './constants/constans';
import Modal from './components/Modal/Modal';
import WeatherNow from './components/WeatherNow/WeatherNow'
import SearchIcon from '@mui/icons-material/Search';
import WeatherForHours from './components/WeatherForHours/WeatherForHours';
import WeatherForThreeDays from './components/WeatherForThreeDays/WeatherForThreeDays';

function App() {
  const [showStartPage, setShowStartPage] = useState(false);
  const [modalActive, setModalActive] = useState(true);

  const nowTemp = useSelector((store: any) => store.weather.data?.current?.temp_c);
  const userLocation = useSelector((store: any) => store.weather.data?.location?.name);
  const locationIcon: string = useSelector((store: any) => store.weather.data?.current?.condition?.icon);
  const maxTemp: any = useSelector((store: any) => store.weather.forecastFor3Days[0]?.maxtemp_c);
  const minTemp: any = useSelector((store: any) => store.weather.forecastFor3Days[0]?.mintemp_c);
  const dataForWetheronHours = useSelector((store: any) => store.weather.weatherOnHours);
  const dataForWeatherForThreeDays = useSelector((store: any) => store.weather.forecastFor3Days);

  useEffect(() => {
    if (!userLocation) {
      setModalActive(true);
      setShowStartPage(true);
      return;
    };
    setModalActive(false);
    setShowStartPage(false);
  }, [modalActive, userLocation]);

  return (
    <div className="App">
      <header>
        <SearchIcon onClick={() => setModalActive(true)} />
      </header>
      <main>
        {showStartPage ?
          (<Modal active={modalActive} setActive={setModalActive} />)
          : (
            <>
              <WeatherNow nowTemp={nowTemp} userLocation={userLocation} locationIcon={locationIcon} maxTemp={maxTemp} minTemp={minTemp} />
              <WeatherForHours weather={dataForWetheronHours} />
              <WeatherForThreeDays weather={dataForWeatherForThreeDays} />
            </>
          )}
      </main>

    </div>
  );
}

export default App;
