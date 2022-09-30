import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
export {default as ChannelContainer} from './components/ChannelContainer/ChannelContainer'
export {default as ChannelListContainer} from './components/ChannelListContainer/ChannelListContainer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode> *** causes pages to not render when using history.push()
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

