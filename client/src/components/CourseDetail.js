import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import ReactMarkDown from 'react-markdown';

const CourseDetail = (props) => {
    
    const { context } = props;
    const authUser = context.authenticatedUser;

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

    const handleDelete = () => {
        const emailAddress = context.authenticatedUser.username;
        const password = context.authenticatedUser.password;
        context.data.deleteCourse(id, emailAddress, password)
            .then(error => {
                if(error.length) {
                    console.log('Could not perform delete');
            } else {
                console.log('Course deleted successfully')
            }
        })
        .catch(err => {
            console.log('error:', err);
            // history.push('/error');
        }
        );
    }

    const actionButtons = 
        <div className="actions--bar">
            <div className="wrap">
                {authUser && course.course.id === context.authenticatedUser.id ?
                    <React.Fragment>
                        <NavLink to={`/courses/${id}/update`} className="button">Update Course</NavLink>
                        <NavLink to={`/courses/${id}/delete`} className="button" onClick={handleDelete}>Delete Course</NavLink>
                        <NavLink to="/" className="button button-secondary">Return to List</NavLink>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <NavLink to="/" className="button button-secondary">Return to List</NavLink>
                    </React.Fragment>
                }
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
                    <ReactMarkDown children={`${course.description}`}/>
                </div>
                <div>
                <h3 className="course--detail--title">Estimated Time</h3>
                    <p>{course.estimatedTime}</p>

                <h3 className="course--detail--title">Materials Needed</h3>
                        <ReactMarkDown children={`${course.materialsNeeded}`}/>
                            <ul className="course--detail--list" />
                </div>
            </div>
            </form>
        </div>;

    return (
            <main>
                {actionButtons}
                {courseDetails}
            </main>
    );
}

export default CourseDetail;