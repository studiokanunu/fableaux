import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./container/App";
import * as serviceWorker from './serviceWorker';

// setup fake backend - CLF TODO - put in config to turn on and off
import { configureFakeBackend } from './_helpers';
configureFakeBackend();


window.RenderApp = (config) => {
  ReactDOM.render(
    <Router>
      <App _config={config}/>
    </Router>,
    document.getElementById("root")
  );
}

// unregister() to register() below. 
serviceWorker.unregister();