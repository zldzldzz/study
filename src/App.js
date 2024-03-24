import './App.css';
import { Component } from 'react';
import Potato from './Component/Potato';
import React from "react";
import Emotion from './Component/Emotion';
import Leewonjin from './Component/Leewonjin';

class App extends React.Component{
  constructor(props) {
    super(props);

  this.state={
    emotion:[
      {id:1,tltle:'설렘',desc:'내가 이걸 해내겠지'},
      {id:2,tltle:'분노',desc:'이게 왜 이해가 안되는 거지 무슨 소리야'},
      {id:3,tltle:'진정',desc:'시발 별거 없을거야 할 수 있다.'},
      {id:4,tltle:'절망',desc:'이게 진짜 무슨 내용이야'},
      {id:5,tltle:'극복',desc:'그럼 시발 할 수 있는 것 부터 한다.'}
    ],
    introduction:
      {name:'leewonjin',age:'21',university:'안양대'}
    
  }
  
}

  render(){
    return <h1>
      I am 원진
      <Emotion data={this.state.emotion}></Emotion>
      <Leewonjin data={this.state.introduction}></Leewonjin>
      <Potato></Potato>
  </h1>
  }
}

export default App;

