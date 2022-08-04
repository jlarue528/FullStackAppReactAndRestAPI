import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class CourseDetail extends Component {

    state = {
        courses: []
    }

  componentDidMount() {
    fetch(`http://localhost:5000/api/courses/${this.props.id}`)
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
    console.log(course);
    const actionButtons =
    <div className="actions--bar">
        <div className="wrap">
            <NavLink to={`/courses/${course.id}/update`} className="button">Update Course</NavLink>
            <NavLink to={`/courses/${course.id}/delete`} className="button">Delete Course</NavLink>
            <NavLink to="/" className="button button-secondary">Return to List</NavLink>
        </div>
    </div>
    
    const courseDetails =

        <div className="wrap">
            <h2>Course Detail</h2>
        <form>
        <div className="main--flex">
            <div>
                <h3 className="course--detail--title">Course</h3>
                    <h4 className="course--name">{course.title}</h4>
                        {/* <p>{ `By ${course.User.firstName} ${course.User.lastName}` }</p> */}

                        <p>{course.description}</p>
            </div>
            <div>
                <h3 className="course--detail--title">Estimated Time</h3>
                    <p>{course.estimatedTime}</p>

                    <h3 className="course--detail--title">Materials Needed</h3>
                        <ul className="course--detail--list">
                            <li>{course.materialsNeeded}</li>
                        </ul>
            </div>
        </div>
        </form>
        </div>;

    return (
        <main>
            {actionButtons}
            {courseDetails}
        </main>
    )};
};
