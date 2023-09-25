import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clock from './Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// root.render(<h1>Hello, world!</h1>);

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);
