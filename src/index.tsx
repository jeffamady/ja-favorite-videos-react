import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import VideosList from './components/Videos/VideosList';
import VideosForm from './components/Videos/VideosForm';

import 'react-toastify/dist/ReactToastify.css';
import 'bootswatch/dist/morph/bootstrap.min.css';
import './index.css';
import { ToastContainer } from 'react-toastify';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={VideosList} />
          <Route path="/new-video" component={VideosForm} />
          <Route path="/update/:id" component={VideosForm} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
