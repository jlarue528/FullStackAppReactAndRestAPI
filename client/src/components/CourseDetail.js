import { Component } from 'react';
// import { NavLink, Link } from 'react-router-dom';

export default class CourseDetail extends Component {

    constructor(props) {
        super(props);
        let match = props.match;

        this.state = {
            courses: [],
            specificCourse: match.params.id
        }
    }

  componentDidMount() {
    fetch(`http://localhost:5000/api/courses/${this.state.specificCourse}`)
      .then(res => res.json())
      .then(responseData => {
        this.setState({courses: responseData})
      })
      .catch(error => {
        console.log('Error Fetching Data', error);
      });
  }

  render() {
    // const course = this.state.courses;
    // const actionButtons =
    //     <div className="wrap">
    //         <a href="update-course.html"><NavLink to={`/courses/${course.id}/update`} className="button">Update Course</NavLink></a>
    //         <a href="delete-html"><NavLink to={`/courses/${course.id}/delete`} className="button">Delete Course</NavLink></a>
    //         <a href="index.html"><NavLink to="/" className="button button-secondary">Return to List</NavLink></a>
    //     </div>
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
               {/* {actionButtons} */}
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
