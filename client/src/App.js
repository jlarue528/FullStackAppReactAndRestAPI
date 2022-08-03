import logo from './logo.svg';
import './App.css';
import { use } from '../../api/routes';
import { useEffect } from 'react';

function App() {

  let courseList = [];

  useEffect(() => {
    const apiURL = 'http://localhost:5000/api/courses'
    fetch(apiURL)
      .then((res) => res.json())
      .then((courses) => courses.push(courseList))
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {courseList => {
          <ul>
            <li>{courseList}</li>
          </ul>
        }};
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;
