import './App.css';
import { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Routes,
  Router
} from 'react-router-dom';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import Header from './components/Header';
import UpdateCourse from './components/UpdateCourse';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import Authenticated from './components/Authenticated'
import Error from './components/Error';

import withContext from './Context';
import PrivateRoute from './PrivateRoute';

const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const HeaderWithContext = withContext(Header);

export default class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
          <HeaderWithContext />

          <Routes>
            <Route exact path="/api/courses" element={<Courses />}/>
            <Route path="/api/courses/create" element={<CreateCourseWithContext />} />
            <Route path="/api/courses/:id/update" element={<UpdateCourseWithContext />} />
            <Route path="/api/courses/:id" element={<CourseDetail />} />
            <Route path="/signin" element={<UserSignInWithContext />} />
            <Route path="/signup" element={<UserSignUpWithContext />} />
            <Route path="/signout" element={<UserSignOutWithContext />}/>
            {/* <Route path="/authenticated" element={<Authenticated />}/> */}
            {/* <PrivateRoute path="/authenticated" element={Authenticated} /> */}
            <Route path="/error" element={<Error />}/>
            {/* <PrivateRoute path="/authenticated" element={Authenticated} /> */}
         </Routes>
      </BrowserRouter>
    );
  };
};


