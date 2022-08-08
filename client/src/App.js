import './App.css';
import { Component } from 'react';
import { 
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import Header from './components/Header';
import UpdateCourse from './components/UpdateCourse';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';
import Error from './components/Error';

import withContext from './Context';
import PrivateRoute from './PrivateRoute';

const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const HeaderWithContext = withContext(Header);
const CourseDetailWithContext = withContext(CourseDetail);

export default class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
          <HeaderWithContext />

          <Switch>
            <Route exact path="/" render={()=> <Courses/>}/>
            <PrivateRoute path="/courses/create" render={() => <CreateCourseWithContext />} /> 
            <PrivateRoute path="/courses/:id/update" render={() => <UpdateCourseWithContext />} />
            <Route path="/courses/:id" render={() => <CourseDetailWithContext />} />
            <Route path="/signin" render={() => <UserSignInWithContext />} />
            <Route path="/signup" render={() => <UserSignUpWithContext />} />
            <Route path="/signout" component={UserSignOutWithContext} />
            <Route path="/error" render={() => <Error />}/>
         </Switch>
      </BrowserRouter>
    );
  };
};


