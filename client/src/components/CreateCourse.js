/* eslint-disable no-lone-blocks */
import React, { useState  } from 'react';
import {useHistory} from 'react-router-dom';
import Form from './Form'

const CreateCourse = (props) => { 
    const history = useHistory();
    
    const { context } = props;

    const userId = context.authenticatedUser.id;
    
    const [ course, setCourse ] = useState({
        title: " ",
        description: " ",
        estimatedTime: " ",
        materialsNeeded: " ",
    });
    const [ errors, setErrors ] = useState([]);

    const submit = () => {
        const emailAddress = context.authenticatedUser.username;
        const password = context.authenticatedUser.password;

        //new course data
        const newCourse = {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            userId
        }

        context.data.createCourse(newCourse, emailAddress, password)
            .then(errors => {
                if(errors.length) {
                    setErrors(errors);
            } else {
                console.log('Course updated successfully')
            }
        })
        .catch(err => {
            console.log('error:', err);
            history.push('/error');
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
        
        setCourse({
            ...course,
            [name]: value
        });
    }

    const cancel = () => {
        history.push(`/`);
    }

    const {
        title,
        description,
        estimatedTime,
        materialsNeeded,
    } = course;

    return (
        <div className="wrap">
        <h2>Create Course</h2>
        <div className="main--flex"></div>
                    <Form
                        cancel={cancel}
                        errors={errors}
                        submit={submit}
                        submitButtonText="Create Course"
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
                                        value={course.title} />
                                </label>
                                <p>{`By ${context.authenticatedUser.name}`}</p>

                                <label htmlFor="courseDescription">
                                    Course Description
                                    <textarea
                                        id="courseDescription"
                                        name="courseDescription"
                                        type="text"
                                        onChange={handleChange} 
                                        value={course.description} />
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
                                        value={course.estimatedTime}/>
                            </label>
                  
                            <label htmlFor="materialsNeeded">
                                Materials Needed
                                    <textarea 
                                        id="materialsNeeded"
                                        name="materialsNeeded"
                                        type="text"
                                        onChange={handleChange}
                                        value={course.materialsNeeded} />
                            </label> 
                        </div> 
                    </div>
                    </React.Fragment>
            )}/>
        </div>
       )
    };

export default CreateCourse;