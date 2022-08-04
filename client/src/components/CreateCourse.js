import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateCourse extends Component {

    state = {
        courses: []
    }


  componentDidMount() {
    fetch(`http://localhost:5000/api/courses/1`)
      .then(res => res.json())
      .then(responseData => {
        this.setState({courses: responseData})
      })
      .catch(error => {
        console.log('Error Fetching Data', error);
      });
  }

  submitCreateNewCourse = () => {

  }

  render() {
    
    return (
            <main>
                <div class="wrap">
                    <h2>Create Course</h2>
                    <div class="validation--errors">
                        <h3>Validation Errors</h3>
                        <ul>
                            <li>Please provide a value for "Title"</li>
                            <li>Please provide a value for "Description"</li>
                        </ul>
                    </div>
                    <form>
                        <div class="main--flex">
                            <div>
                                <label for="courseTitle">Course Title</label>
                                <input id="courseTitle" name="courseTitle" type="text" value=""></input>
    
                                <p>By Joe Smith</p>
    
                                <label for="courseDescription">Course Description</label>
                                <textarea id="courseDescription" name="courseDescription"></textarea>
                            </div>
                            <div>
                                <label for="estimatedTime">Estimated Time</label>
                                <input id="estimatedTime" name="estimatedTime" type="text" value=""></input>
    
                                <label for="materialsNeeded">Materials Needed</label>
                                <textarea id="materialsNeeded" name="materialsNeeded"></textarea>
                            </div>
                        </div>
                        <button class="button" type="submit">Create Course</button><Link to="/api/courses"><button class="button button-secondary" onClick={this.props.clickCancel}>Cancel</button></Link>
                    </form>
                </div>
            </main>
  )};
};