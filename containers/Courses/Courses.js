import React, { Component } from 'react';
import Course from '../Course/Course'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedId: 0,
    }

    // SelectHandler(id) {
    //     // console.log(id)
    //     this.setState({selectedId: id})
    // }

    render () {
        // console.log(this.state.selectedId)
        
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( (course, index) => {
                            return(
                           
                                <div key={index}>
                                    {/* {console.log(course.id)} */}
                                <Link to={{ pathname: this.props.match.url + '/' + course.id,
                                            search: '?title=' + course.title,
                                     }}>
                                     {console.log(this.props)}
                                    <article className="Course" id={this.state.id}>{course.title}</article>
                                </Link> 
                                </div>
                          
                            )
                        } )
                    }
                </section>
             
                <Route path={this.props.match.url + '/:courseId'} component={Course} />
               
            </div>
        );
    }
}

export default Courses;

