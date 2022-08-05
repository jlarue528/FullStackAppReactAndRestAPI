import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const CourseDetail = () => {
    const [ course, getCourse ] = useState({
        course: [],
        title: " ",
        description: " ",
        estimatedTime: " ",
        materialsNeeded: " ",
        firstName: " ",
        lastName: " "
    });
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/api/courses/${id}`, { method: 'GET' })
            .then(res => res.json())
            .then(responseData => {
                getCourse({
                    course: responseData,
                    title: responseData.title,
                    description: responseData.description,
                    estimatedTime: responseData.estimatedTime,
                    materialsNeeded: responseData.materialsNeeded,
                    firstName: responseData.User.firstName,
                    lastName: responseData.User.lastName
                })
        })
        .catch(error => {
            console.log('Error Fetching Data', error);
        });
    }, [id]);

    const handleDelete = (courseId = id) => {
        fetch(`http://localhost:5000/api/courses/${courseId}/delete`, { method: 'DELETE' })
            .then(async res => await res.json())
            .then(() => {
                console.log('removed');
            })
            .catch(error => {
                console.log('Delete Error', error)
            })
    }

    const  actionButtons =
        <div className="actions--bar">
            <div className="wrap">
                <NavLink to={`/api/courses/${id}/update`} className="button">Update Course</NavLink>
                <NavLink to={`/api/courses/${id}/delete`} className="button" onClick={handleDelete}>Delete Course</NavLink>
                <NavLink to="/api/courses/" className="button button-secondary">Return to List</NavLink>
            </div>
        </div>;

    const courseDetails =
        <div className="wrap">
        <h2>Course Detail</h2>
            <form>
            <div className="main--flex">
                <div>
                <h3 className="course--detail--title">Course</h3>
                    <h4 className="course--name">{course.title}</h4>
                    <p>{ `By ${course.firstName} ${course.lastName}` }</p>

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
        </div>

    return (
            <main>
                {actionButtons}
                {courseDetails}
            </main>
    );
}

export default CourseDetail;