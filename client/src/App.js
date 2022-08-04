// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// import CourseDetail from './components';
// import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
// import CreateCourse from './components/CreateCourse';
import Header from './components/Header';
// import UpdateCourse from './components/UpdateCourse';
// import UserSignIn from './components/UserSignIn';
// import UserSignOut from './components/UserSignOut';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      courses: []
    };
  }

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
        <div id="root">
          <Header />
          <CourseDetail />
        </div>
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


