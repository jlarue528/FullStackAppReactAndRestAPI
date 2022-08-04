import './App.css';
import { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Routes
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

  state = {
    courses: []
  };

  render() {
    return (
      <BrowserRouter>
        <body>
          <Header />
          <Courses />

          <Routes>
            <Route exact path="/" render={()=> <Courses />}/>
            <Route path="/api/courses/create" render={()=> <CreateCourse />} />
            <Route path="/api/courses/:id/update" render={()=> <UpdateCourse />} />
            <Route path="/api/courses/:id" render={()=> <CourseDetail />} />
            <Route path="/signin" render={()=> <UserSignIn />} />
            <Route path="/signup" render={()=> <UserSignUp />} />
            <Route path="/signout" render={()=> <UserSignOut />}/>
          </Routes>
        </body>
      </BrowserRouter>
    );
  };
};


