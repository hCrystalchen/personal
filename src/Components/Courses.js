import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

import Portfolio from './Portfolio';

class Courses extends Component {
    render() {

        if (this.props.data) {
            var projects = this.props.data.projects.map(function (projects) {
                var projectImage = 'personal/images/' + projects.image;
                //var name = '/personal/' + projects.title;
                var name = '/personal/hi';
                return (
                    <Router>
                        <div key={projects.title} className="columns portfolio-item">
                            <div className="item-wrap">
                                <Link to={name}>
                                    <img alt={projects.title} src={projectImage} />
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>{projects.title}</h5>
                                            <p>{projects.category}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <Route exact route="/personal"/>
                        </div>
                    </Router>
                )
            })
        }

        return (
            <section id="courses">

                <div className="row">

                    <div className="twelve columns collapsed">

                        <h1>Check Out Some of My Works.</h1>

                        <div id="courses-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {projects}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Courses;