import './App.css';
import { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Routes,
  useNavigate
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
  
  selectCancel = (e) => {
    e.prevent.default();
    let path = '/api/courses'
    let navigate = useNavigate();
    navigate(path);
  }

  render() {
    return (
      <BrowserRouter>
          <Header />

          <Routes>
            <Route exact path="/api/courses" element={<Courses />}/>
            <Route path="/api/courses/create" element={<CreateCourse clickCancel={this.selectCancel}/>} />
            <Route path="/api/courses/:id/update" element={<UpdateCourse />} />
            <Route path="/api/courses/:id" element={<CourseDetail />} />
            <Route path="/signin" element={<UserSignIn clickCancel={this.selectCancel}/>} />
            <Route path="/signup" element={<UserSignUp clickCancel={this.selectCancel}/>} />
            <Route path="/signout" element={<UserSignOut />}/>
          </Routes>
      </BrowserRouter>
    );
  };
};


