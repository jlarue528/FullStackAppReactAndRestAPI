/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import Form from './Form'

export default class CreateCourse extends Component {

    state = {
        course: [{
            title: " ",
            description: " ",
            estimatedTime: " ",
            materialsNeeded: " ",
        }],
        errors: []
    }

    submit = () => {
        const { context } = this.props;

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

        const emailAddress = context.authenticatedUser.username;
        const password = context.authenticatedUser.password;

        context.data.createCourse(course, {emailAddress, password})
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
                this.props.history.push('/error');
            }
        );   
    }

    handleChange (e) {
        let name = e.target.name;
        let value= e.target.value;

        console.log(this.state.course)

        if(name === "courseTitle") {
            name = 'title'
        }
        
        if(name === "courseDescription") {
            name = 'description'
        }

        // let { course } = this.state

        this.setState({
            ...this.state.course,
            [name]: value
        })
    }

    cancel = () => {
        console.log('cancelled');
        this.props.history.push('/')
    }

  render() {

    console.log(this.state.course);

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
                                    {/* <p>{`By ${this.props.context.authenticatedUser.name}`}</p> */}

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