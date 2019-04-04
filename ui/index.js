import React from "react";
import ReactDOM from 'react-dom'
import App from './app'

function Setup (elementId, config) {
  ReactDOM.render(<App config={config} />, document.getElementById(elementId));
}

export {Setup}