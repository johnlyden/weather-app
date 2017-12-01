const API_KEY = '396101bd5e40f5d5c50350de977eec6c';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    return {
        type: FETCH_WEATHER
    };
}
