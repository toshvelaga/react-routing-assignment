import React, { Component } from 'react';

class Course extends Component {

    state = {
        courseTitle: '',
    }

    componentDidMount() {
        this.parseQueryParams();
    }

    componentDidUpdate() {
        this.parseQueryParams();
    }

    parseQueryParams () {
        console.log(this.props)
        const query = new URLSearchParams(this.props.location.search);
        console.log(query)
        for (let param of query.entries()) {
            this.setState({courseTitle: param[1]});
        }
    }

    render (props) {
        return (

            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with {this.props.match.params.courseId}</p>
            </div>
            
        );
    }
}

export default Course;