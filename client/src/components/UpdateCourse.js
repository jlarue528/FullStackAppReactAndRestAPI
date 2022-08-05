import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateCourse = () => {
    const [ course, getCourse ] = useState([]);
    
    let titleValue = useRef(course.title);
    let descriptionValue = useRef(course.description);
    let courseEstimatedTimeValue = useRef(course.estimatedTime);
    let materialsNeededValue = useRef(course.materialsNeeded);

    const [ title, updateTitle] = useState(titleValue);
    const [ description, updateDescription ] = useState(descriptionValue);
    const [ courseEstimatedTime, updateCourseEstimatedTime ] = useState(courseEstimatedTimeValue);
    const [ materialsNeeded, updateMaterialsNeeded ] = useState(materialsNeededValue);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/api/courses/${id}`, { method: 'GET' })
            .then(res => res.json())
            .then(responseData => {
                getCourse({course: responseData})
        })
        .catch(error => {
            console.log('Error Fetching Data', error);
        });
    }, [id]);


    const handleUpdate = () => {
        fetch(`http://localhost:5000/api/courses/${id}/update`, {
            method: 'PUT',
            body: JSON.stringify({
                title: title,
                description: description,
                estimatedTime: courseEstimatedTime,
                materialsNeeded: materialsNeeded
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => {
            console.log(response);
            updateTitle({title: response.title})
            updateDescription({description: response.description})
            updateCourseEstimatedTime({estimatedTime: response.estimatedTime})
            updateMaterialsNeeded({materialsNeeded: response.materialsNeeded})
        });
    };

    return (
        <div className="wrap">
        <h2>Update Course</h2>
        <form>
            <div className="main--flex">
                <div>
                    <label for="courseTitle">Course Title</label>
                    <input id="courseTitle" name="courseName" type="text" value={course.title}></input>

                    <p>{`By ${course.User.firstName} ${course.User.lastName}`}</p>

                    <label for="courseDescription">Course Description</label>
                    <textarea id="courseDescription" name="courseDescription">{course.description}</textarea>
                </div>
                <div>
                    <label for="estimatedTime">Estimated Time</label>
                    <input id="estimatedTime" name="estimatedTime" type="text" value={course.estimatedTime}></input>

                    <label for="materialsNeeded">Materials Needed</label>
                    <textarea id="materialsNeeded" name="materialsNeeded">{course.materialsNeeded}</textarea>
                </div>
            </div>
            <button className="button" type="submit" onSubmit={handleUpdate}>Update Course</button><Link to="/api/courses"><button className="button button-secondary" onClick={() => navigate("/api/courses")}>Cancel</button></Link>
        </form>
    </div>
   );
}

export default UpdateCourse;