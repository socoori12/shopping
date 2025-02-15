import React, { useState, useEffect } from 'react' ;

function Home() {
    const [weather, setWeather] = useState(null);
    const [dateTime, setDateTime] = useState(new Date());
  
    // OpenWeather API 설정
    const API_KEY = '89d6c114ec7bbbfd4be0ebc38e323833';  // 본인의 API 키로 변경하세요.
    const city = 'ansan';
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
    useEffect(() => {
      // 날씨 데이터 가져오기
      fetch(weatherAPI)
        .then(response => response.json())
        .then(data => setWeather(data))
        .catch(error => console.error('날씨 정보를 불러오는 중 오류 발생:', error));
  
      // 현재 날짜 및 시간 업데이트 (1초마다)
      const timer = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(timer);
    }, [weatherAPI]);
  
    return (
      <div className="page home">
        <h1>홈</h1>
        <p>오늘의 날짜: {dateTime.toLocaleDateString()}</p>
        <p>현재 시간: {dateTime.toLocaleTimeString()}</p>
        {weather ? (
          <div className="weather">
            <p>도시: {weather.name}</p>
            <p>온도: {weather.main.temp}°C</p>
            <p>습도: {weather.main.humidity}%</p>
            <p>날씨: {weather.weather[0].description}</p>
          </div>
        ) : (
          <p>날씨 정보를 불러오는 중...</p>
        )}
      </div>
    );
  }
  
  export default Home;