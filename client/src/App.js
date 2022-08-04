// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// import Courses from './components/Courses';
// import CourseDetail from './components/CourseDetail';
// import CreateCourse from './components/CreateCourse';
import Header from './components/Header';
import UpdateCourse from './components/UpdateCourse';
// import UserSignIn from './components/UserSignIn';
// import UserSignUp from './components/UserSignUp';
// import UserSignOut from './components/UserSignOut';

export default class App extends Component {

  state = {
    courses: []
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(responseData => {
        this.setState({courses: responseData})
      })
      .catch(error => {
        console.log('Error Fetching Data', error);
      });
  }

  render() {
    console.log(this.state.courses);
    return (
      <body>
          <Header />
          <UpdateCourse />
      </body>
      // {/* // <Header />

      // <UserSignIn />

      // <UserSignUp />

      // <UserSignOut />

   

      // <CourseDetail />

      // <CreateCourse />

      // <UpdateCourse /> */}
    );
  };
};


