import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import AppBar from 'material-ui';
import TitleBar from './TitleBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
