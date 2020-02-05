import React, { Component } from 'react';

import './Courses.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }
    clickHandler = (id) => {
        this.props.history.push(
            `/courses/${id}?course=${this.state.courses[id-1].title}`,
        )
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                    <Route path={`${this.props.match.url}/:id`} component={Course} />
                    </Switch>


                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return <article className="Course" onClick={() => this.clickHandler(course.id)} key={course.id}>{course.title}</article>;
                        })
                    }
                </section>
            </div>

            </BrowserRouter>
                    );
    }
}

export default Courses;