import {useEffect} from 'react';
import {hot} from 'react-hot-loader/root'
import logo from './logo.svg';
import './App.css';

import './test';

function App() {
  useEffect(() => {
    post('/user/list');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          test by cachelayer
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function post(url) {
  const xhr = new XMLHttpRequest();
  const data = new FormData();
  data.append('id', 12345);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const responseText = xhr.responseText || '{}';
        const res = JSON.parse(responseText);
        if (res && res.code === 0) {
          console.log(res.data);
        }
    }
  };

  xhr.open('POST', url);
  xhr.send(data);
}

export default hot(App);
