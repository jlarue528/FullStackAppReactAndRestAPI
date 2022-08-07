import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import Courses from './Courses';
import Form from './Form';

const UpdateCourse = (props) => {
    const navigate = useNavigate();
    
    const { context } = props;
    const emailAddress = context.emailAddress;
    const password = context.password;
    
    const [ course, getCourse ] = useState({
        course: [],
        title: " ",
        description: " ",
        estimatedTime: " ",
        materialsNeeded: " ",
        firstName: " ",
        lastName: " "
    });
    const [ errors, setErrors ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/api/courses/${id}`, { 
            method: 'GET'
        })
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

    const submit = () => {
        //updated course data

        console.log('courses', course);
    
        const courseUpdate = {
            title,
            description,
            estimatedTime,
            materialsNeeded,
        }

        context.data.updateCourse(courseUpdate, id, {emailAddress, password})
        .then(errors => {
            if(errors.length) {
                setErrors({errors});
                console.log('errors occurred');
            } else {
                console.log('User is successfully created.')
            }
        })
        .catch(err => {
        console.log(err);
        navigate('/error');
        // this.props.history.push('/error');
        }
        );   
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value= e.target.value;

        if(name === "courseTitle") {
            name = 'title'
        }
        
        if(name === "courseDescription") {
            name = 'description'
        }

        getCourse({
            ...course,
            [name]: value
        });

        console.log('updated values', course)
    }

    const cancel = () => {
        console.log('cancelled');
        navigate('/api/courses');
        // this.props.navigate('/api/courses');
    }

    const {
        title,
        description,
        estimatedTime,
        materialsNeeded,
    } = course;

    return (
        <div className="wrap">
        <h2>Update Course</h2>
        {errors.length ?
            <React.Fragment>
                <div className="validation--errors">
                <h3>Validation Errors</h3>
                <ul> {errors.map((error) => 
                    <li>{error}</li>
                )}
                </ul>
                </div> 
            </React.Fragment>
            :
            <Form 
                cancel={cancel}
                errors={errors}
                submit={submit}
                submitButtonText="Update Course"
                elements={() => (
                    <React.Fragment>
                        <div className="main--flex">
                            <div>
                                <label htmlFor="courseTitle">
                                    Course Title
                                    <input
                                        id="courseTitle"
                                        name="courseTitle"
                                        type="text"
                                        onChange={handleChange}
                                        value={title} />
                                </label>
                                <p>{`By ${course.firstName} ${course.lastName}`}</p>

                                <label htmlFor="courseDescription">
                                    Course Description
                                    <textarea
                                        id="courseDescription"
                                        name="courseDescription"
                                        type="text"
                                        onChange={handleChange} 
                                        value={description} />
                                </label>
                            </div>
                        
                        <div>
                            <label htmlFor="estimatedTime">
                                Estimated Time
                                    <input 
                                        id="estimatedTime"
                                        name="estimatedTime"
                                        type="text"
                                        onChange={handleChange} 
                                        value={estimatedTime}/>
                            </label>
                  
                            <label htmlFor="materialsNeeded">
                                Materials Needed
                                    <textarea 
                                        id="materialsNeeded"
                                        name="materialsNeeded"
                                        type="text"
                                        onChange={handleChange}
                                        value={materialsNeeded} />
                            </label> 
                        </div> 
                    </div>
                </React.Fragment>
            )}/>}
            </div>
        );
    };


export default UpdateCourse;