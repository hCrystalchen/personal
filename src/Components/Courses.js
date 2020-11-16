import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

class Courses extends Component {
    render() {

        if (this.props.data) {
            var projects = this.props.data.projects.map(function (projects) {
                var projectImage = '../personal/images/' + projects.image;
                var name = '/personal/' + projects.title.slice(0, 6);
                return (
                    <Route key={name}>
                        <div key={projects.title} className="columns portfolio-item">
                            <div className="item-wrap">
                                <Link to={name}>
                                    <img alt={projects.title} src={projectImage} />
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>{projects.title}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Route>
                )
            })
        }

        return (
            <section id="courses">

                <div className="row row1">

                    <div className="twelve columns collapsed">

                        <h1>PROJECTS</h1>

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