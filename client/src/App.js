import './App.css';
import { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import Header from './components/Header';
import UpdateCourse from './components/UpdateCourse';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';

export default class App extends Component {

  api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
    const url = `http://localhost:5000/api/` + path;

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }

    if(body !== null) {
      options.body = JSON.stringify(body);
    }

    if(requiresAuth) {
      const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`);

      options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    }

    return fetch(url, options)
  }

  handleSubmit(e, props) {
    const { submit } = props;
    e.preventDefault();
    submit();
  }

  handleCancel(e, props) {
    const { cancel } = props;
    e.preventDefault()
    cancel()
  }
  

  render() {
    return (
      <BrowserRouter>
          <Header />

          <Routes>
            <Route exact path="/api/courses" element={<Courses />}/>
            <Route path="/api/courses/create" element={<CreateCourse clickCancel={this.selectCancel}/>} />
            <Route path="/api/courses/:id/update" element={<UpdateCourse />} />
            <Route path="/api/courses/:id" element={<CourseDetail data={this.getParamData}/>} />
            <Route path="/signin" element={<UserSignIn authData={this.api}/>} />
            <Route path="/signup" element={<UserSignUp />} />
            <Route path="/signout" element={<UserSignOut />}/>
          </Routes>
      </BrowserRouter>
    );
  };
};


