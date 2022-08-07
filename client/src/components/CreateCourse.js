/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import Form from './Form'


export default class CreateCourse extends Component {

    state = {
        course: [{
            title: " ",
            description: " ",
            estimatedTime: " ",
            materialsNeeded: " "
        }],
        errors: []
    }

    submit = () => {
        const { context } = this.props;
        // const email = context.authenticatedUser.emailAddress;
        // const password = context.authenticatedUser.password;

        const {
            title,
            description,
            estimatedTime,
            materialsNeeded
        } = this.state.course

        //new course data
        const course = {
            title,
            description,
            estimatedTime,
            materialsNeeded
        }

        context.data.createCourse(course, context.authenticatedUser)
            .then(errors => {
                if(errors.length) {
                    this.setState({ errors });
                    console.log('errors occurred');
                } else {
                    console.log('User is successfully created.')
                }
            })
            .catch(err => {
            console.log(err);
            // this.props.history.push('/error');
            }
        );   
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value= e.target.value;

        this.setState(() => {
            return {
                [name]: value
            };
        });
    }

    cancel = () => {
        console.log('cancelled');
        // this.props.navigate('/api/courses');
    }

  render() {

    const {
        title,
        description,
        estimatedTime,
        materialsNeeded,
    } = this.state.course;

    const { errors } = this.state;
    
    return (
        <div className="wrap">
            <h2>Create Course</h2>
            <div className="main--flex"></div>
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
                            cancel={this.cancel}
                            errors={errors}
                            submit={this.submit}
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
                                            onChange={this.handleChange}
                                            value={title} />
                                    </label>
                                    <p>`By User`</p>

                                    <label htmlFor="courseDescription">
                                        Course Description
                                        <textarea
                                            id="courseDescription"
                                            name="courseDescription"
                                            type="text"
                                            onChange={this.handleChange} 
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
                                            onChange={this.handleChange} 
                                            value={estimatedTime}/>
                                </label>
                      
                                <label htmlFor="materialsNeeded">
                                    Materials Needed
                                        <textarea 
                                            id="materialsNeeded"
                                            name="materialsNeeded"
                                            type="text"
                                            onChange={this.handleChange}
                                            value={materialsNeeded} />
                                </label> 
                            </div> 
                        </div>
                        </React.Fragment>
                )}/>}
            </div>
        )
    };
};