import { Component } from 'react';

export default class CourseDetail extends Component {

    state = {
        courses: []
    };

  componentDidMount() {
    fetch('http://localhost:5000/api/courses/1')
      .then(res => res.json())
      .then(responseData => {
        this.setState({courses: responseData})
      })
      .catch(error => {
        console.log('Error Fetching Data', error);
      });
  }

  render() {
    const course = this.state.courses;
    // const courseList =
    //     <div class="main--flex">
    //         <div>
    //             <h3 className="course--detail--title">Course</h3>
    //                 <h4 className="course--name">{course.title}</h4>
    //                     {/* <p>{ `By ${course.User.firstName} ${course.User.lastName}` }</p> */}

    //                     <p>{course.description}</p>
    //         </div>
    //         <div>
    //             <h3 className="course--detail--title">Estimated Time</h3>
    //                 <p>{course.estimatedTime}</p>

    //                 <h3 className="course--detail--title">Materials Needed</h3>
    //                     <ul className="course--detail--list">
    //                         <li>{course.materialsNeeded}</li>
    //                     </ul>
    //         </div>
    //     </div>;

    return (
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    <a className="button" href="update-course.html">Update Course</a>
                    <a className="button" href="delete-html">Delete Course</a>
                    <a className="button button-secondary" href="index.html">Return to List</a>
                </div>
            </div>
        
        <div className="wrap">
            <h2>Course Detail</h2>
            <form>
        {/* //            {course} */}
            </form>
        </div>
    </main>
    )};
};
