import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import LessText from './components/LessText';
// import UseEffectSemArray from './components/UseEffectSemArray';
// import UseEffectComArray from './components/UseEffectComArray';
// import UseEffectComDependencia from './components/UseEffectComDependencia';
import ComponentRef from './components/ComponentRef';
// import BlinkyRender from './components/BlinkyRender';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LessText 
      text="Olá Danilo, como vai ?"
      maxLength={5}/> */}
    {/* <UseEffectComArray /> */}
    {/* <UseEffectComDependencia />   */}
    {/* <BlinkyRender /> */}
    <ComponentRef />
  </React.StrictMode>,
  document.getElementById('root')
);

