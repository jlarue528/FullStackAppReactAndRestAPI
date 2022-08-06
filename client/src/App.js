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

import withContext from './Context';

const UserSignUpWithContext = withContext(UserSignUp);

export default class App extends Component {

//   constructor(props) {
//     super(props);
//     this.getUserData = this.getUserData.bind(this);
// }


  // state = {
  //   signInCredentials: ''
  // }

  // api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
  //   const url = `http://localhost:5000/api` + path;

  //   const options = {
  //     method,
  //     headers: {
  //       'Content-Type': 'application/json; charset=utf-8'
  //     }
  //   }

  //   if(body !== null) {
  //     options.body = JSON.stringify(body);
  //   }

  //   if(requiresAuth) {
  //     const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);

  //     options.headers['Authorization'] = `Basic ${encodedCredentials}`;
  //   }

  //   return fetch(url, options)
  // }

  // async getUserData() {
  //   const response = await this.api(`/users`, 'GET', null);
  //     if (response.status === 200) {
  //       return response.json().then(data => data);
  //    }
  //     else if (response.status === 401) {
  //       return null;
  //     }
  //     else {
  //       throw new Error();
  //     }
  // }

  // async signIn(emailAddress, password) {
  //   const user = await this.getUserData(emailAddress, password);
  //   return user;
  // }
  
  render() {
    return (
      <BrowserRouter>
          <Header />

          <Routes>
            <Route exact path="/api/courses" element={<Courses />}/>
            <Route path="/api/courses/create" element={<CreateCourse />} />
            <Route path="/api/courses/:id/update" element={<UpdateCourse />} />
            <Route path="/api/courses/:id" element={<CourseDetail />} />
            <Route path="/signin" element={<UserSignIn />} />
            <Route path="/signup" element={<UserSignUpWithContext />} />
            <Route path="/signout" element={<UserSignOut />}/>
          </Routes>
      </BrowserRouter>
    );
  };
};


