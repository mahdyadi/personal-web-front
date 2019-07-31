import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

export default class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Content/>
        <Sidebar/>
      </div>
    )
  }
}
