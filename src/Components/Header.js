import React, { Component } from 'react';
import ParticlesBg from "particles-bg";
import Typical from 'react-typical';

class Header extends Component {
    render() {

        if (this.props.data) {
            var resume = this.props.data.resumedownload;
            var github = this.props.data.github;
            var linkedin = this.props.data.linkedin;
            var name = this.props.data.name;
            var description = this.props.data.description;
        }

        return (
            <header id="home">
                <ParticlesBg num={1} type="polygon" bg={true} />
                <nav id="nav-wrap">
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Experience</a></li>
                        <li><a className="smoothscroll" href="#courses">Projects</a></li>
                    </ul>
                </nav>

                <div className="row banner">

                    <div className="banner-text">
                        <h1 className="responsive-headline">
                            <Typical steps={['Hello!', 500, 'This is', 500, name , 500]} loop={1} wrapper="p"/>
                        </h1>
                        <h3>{description}</h3>
                        <hr />
                        <ul className="social">
                            <a href={github} className="button btn github-btn">Github</a>
                            <a href={linkedin} className="button btn linkedin-btn">LinkedIn</a>
                            <a href={resume} className="button btn project-btn">Resume</a>
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#resume"><i className="icon-down-open"></i></a>
                </p>

            </header>
        );
    }
}

export default Header;