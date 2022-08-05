import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const UpdateCourse = () => {
    const navigate = useNavigate();
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

    return (
        <div className="wrap">
        <h2>Update Course</h2>
        <form>
            <div className="main--flex">
                <div>
                    <label for="courseTitle">Course Title</label>
                    <input id="courseTitle" name="courseName" type="text" value={course.title}></input>

                    <p>{`By ${course.firstName} ${course.lastName}`}</p>

                    <label for="courseDescription">Course Description</label>
                    <textarea id="courseDescription" name="courseDescription" value={course.description}></textarea>
                </div>
                <div>
                    <label for="estimatedTime">Estimated Time</label>
                    <input id="estimatedTime" name="estimatedTime" type="text" value={course.estimatedTime || " "}></input>

                    <label for="materialsNeeded">Materials Needed</label>
                    <textarea id="materialsNeeded" name="materialsNeeded" value={course.materialsNeeded || " "}></textarea>
                </div>
            </div>
            <button className="button" type="submit" onSubmit={"test"}>Update Course</button><Link to="/api/courses"><button className="button button-secondary" onClick={() => navigate("/api/courses")}>Cancel</button></Link>
        </form>
    </div>
   );
}

export default UpdateCourse;