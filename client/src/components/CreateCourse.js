/* eslint-disable no-lone-blocks */
import React, { useState  } from 'react';
import {useHistory} from 'react-router-dom';
import Form from './Form'

const CreateCourse = (props) => { 
    const history = useHistory();
    
    const { context } = props;
    
    const [ course, setCourse ] = useState({
        title: " ",
        description: " ",
        estimatedTime: " ",
        materialsNeeded: " "
    });
    const [ errors, setErrors ] = useState([]);

    const submit = () => {
        // const emailAddress = context.authenticatedUser.username;
        // const password = context.authenticatedUser.password;

        const emailAddress = 'Tester@gmail.com';
        const password = 'testpassword';


        //new course data
        const newCourse = {
            title,
            description,
            estimatedTime,
            materialsNeeded,
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
                                {/* <p>{`By ${context.authenticatedUser.name}`}</p> */}

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

// export default class CreateCourse extends Component {

//     state = {
//         course: [{
//             title: " ",
//             description: " ",
//             estimatedTime: " ",
//             materialsNeeded: " ",
//         }],
//         errors: []
//     }

//     submit = () => {
//         const { context } = this.props;
//         console.log(context);

//         const {
//             title,
//             description,
//             estimatedTime,
//             materialsNeeded
//         } = this.state.course

//         // console.log(this.state.course);

//         //new course data
//         const course = {
//             title,
//             description,
//             estimatedTime,
//             materialsNeeded
//         }

//         const emailAddress = context.authenticatedUser.username;
//         const password = context.authenticatedUser.password;

//         context.data.createCourse(course, emailAddress, password)
//             .then(errors => {
//                 if(errors.length) {
//                     this.setState({ errors });
//                     console.log('errors occurred');
//                 } else {
//                     console.log('User is successfully created.')
//                 }
//             })
//             .catch(err => {
//                 console.log(err);
//                 this.props.history.push('/error');
//             }
//         );   
//     }

//     handleChange = (e) => {
//         let name = e.target.name;
//         let value= e.target.value;


//         console.log(name);
//         console.log(value);
//         // console.log(this.state)

//         if(name === "courseTitle") {
//             name = 'title';
//             console.log('made it here', name);
//             this.setState({
//                 ...this.state.course,
//                 name: value
//             })
//         }
        
//         if(name === "courseDescription") {
//             name = 'description';
//             this.setState({
//                 ...this.state.course,
//                 name: value
//             })
//         }

//         if(name === "estimatedTime") {
//             name = 'estimatedTime';
//             this.setState({
//                 ...this.state.course,
//                 name: value
//             })
//         }

//         if(name === "materialsNeeded") {
//             name = 'materialsNeeded'
//             this.setState({
//                 name: value
//             })
//         }
//     }

//     cancel = () => {
//         this.props.history.push('/')
//     }

//   render() {

//     console.log(this.state.course);

//     const {
//         title,
//         description,
//         estimatedTime,
//         materialsNeeded,
//     } = this.state.course;

//     const { errors } = this.state;
    
//     return (
//         <div className="wrap">
//             <h2>Create Course</h2>
//             <div className="main--flex"></div>
//                         <Form
//                             cancel={this.cancel}
//                             errors={errors}
//                             submit={this.submit}
//                             submitButtonText="Create Course"
//                             elements={() => (
//                             <React.Fragment>
//                                 <div className="main--flex">
//                                 <div>
//                                     <label htmlFor="courseTitle">
//                                         Course Title
//                                         <input
//                                             id="courseTitle"
//                                             name="courseTitle"
//                                             type="text"
//                                             onChange={() => this.handleChange}
//                                             value={title} />
//                                     </label>
//                                     {/* <p>{`By ${this.props.context.authenticatedUser.name}`}</p> */}

//                                     <label htmlFor="courseDescription">
//                                         Course Description
//                                         <textarea
//                                             id="courseDescription"
//                                             name="courseDescription"
//                                             type="text"
//                                             onChange={this.handleChange} 
//                                             value={description} />
//                                     </label>
//                                 </div>
                            
//                             <div>
//                                 <label htmlFor="estimatedTime">
//                                     Estimated Time
//                                         <input 
//                                             id="estimatedTime"
//                                             name="estimatedTime"
//                                             type="text"
//                                             onChange={this.handleChange} 
//                                             value={estimatedTime}/>
//                                 </label>
                      
//                                 <label htmlFor="materialsNeeded">
//                                     Materials Needed
//                                         <textarea 
//                                             id="materialsNeeded"
//                                             name="materialsNeeded"
//                                             type="text"
//                                             onChange={this.handleChange}
//                                             value={materialsNeeded} />
//                                 </label> 
//                             </div> 
//                         </div>
//                         </React.Fragment>
//                 )}/>
//             </div>
//         )
//     };
// };