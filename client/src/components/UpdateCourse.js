// import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from './context';

const UpdateCourse = (props) => {
  
    return (
        <Consumer>
            { context => {
                const updateCourseData = () => {
    
                }
                const submitUpdateCourse = () => {
            
                }
                 return (
                 <div className="wrap">
                 <h2>Update Course</h2>
                 <form>
                     <div className="main--flex">
                         <div>
                             <label for="courseTitle">Course Title</label>
                             <input id="courseTitle" name="courseName" type="text" value={context.course.title}></input>
 
                             <p>By Joe Smith</p>
 
                             <label for="courseDescription">Course Description</label>
                             <textarea id="courseDescription" name="courseDescription">{context.course.description}</textarea>
                         </div>
                         <div>
                             <label for="estimatedTime">Estimated Time</label>
                             <input id="estimatedTime" name="estimatedTime" type="text" value={context.course.estimatedTime}></input>
 
                             <label for="materialsNeeded">Materials Needed</label>
                             <textarea id="materialsNeeded" name="materialsNeeded">{context.course.materialsNeeded}</textarea>
                         </div>
                     </div>
                     <button className="button" type="submit">Update Course</button><Link to="/api/courses"><button className="button button-secondary" onClick={() => {props.history.push('/api/courses')}}>Cancel</button></Link>
                 </form>
             </div>
            );
        }};
        </Consumer>
)};

export default UpdateCourse;


    
    