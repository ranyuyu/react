import React, { Component } from 'react'
import CommonComponents from './Hoc/commonComponents';
import HocComponents from './Hoc/HocComponents';

export default class App extends React.Component {
  render() {
    const NewCommonComponents = HocComponents(CommonComponents);
    return (
      <div className="App">
         <NewCommonComponents name="冉玉" age="18"></NewCommonComponents>
      </div>
    )
  }
}