import { Component } from 'react';

export default class Courses extends Component {

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
    const courseResults = this.state.courses;
    const courseList = courseResults.map((course) => {
       return(
        <a className="course--module course--link" href="course-detail.html">
            <span className="course--add--title"></span>
                <h2 className="course--label">Course</h2>
                <h3 className="course--title">{course.title}</h3>
            <span className="course--add--title"></span>
        </a>
       )
    })

    return (
    <main>
        <div className="wrap main--grid">
            {courseList}
            <a className="course--module course--add--module" href="create-course.html">
                <span className="course--add--title">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 13 13" class="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                    New Course
                </span>
            </a>
        </div>
    </main>
  )};
};