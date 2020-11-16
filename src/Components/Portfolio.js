import React, { Component } from 'react';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.currImg = null;
        this.handleShowDialog = this.handleShowDialog.bind(this);
    }
    state = { isOpen: false };
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleShowDialog(img) {
        this.currImg = img;
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        if (this.props.data) {
            var projects = this.props.data.map(projects => {
                var projectImage = projects.image ? 'images/' + projects.image : null;
                return (
                    <div key={projects.title} className="columns2 portfolio-item item-details">
                        <div className="item-wrap">
                            <div className="portfolio-item-meta2">
                                <h5>{projects.title}</h5>
                                <p className="portfolio-description">{projects.description}</p>
                            </div>
                            {projectImage ? <img alt={projects.title} src={projectImage} onClick={this.handleShowDialog.bind(this, projectImage)} /> : null}
                            {this.state.isOpen && this.currImg === projectImage && (
                                <div
                                    className="dialog"
                                >
                                    <img alt={projects.title} src={projectImage} onClick={this.handleShowDialog} />
                                </div>
                            )}
                        </div>
                    </div>
                )
            })
        }

        return (
            <div>
                {this.state.isOpen ? <div id="dialog-overlay" onClick={this.handleShowDialog} /> : null}
                <nav id="back-wrap">
                <ul id="back" className="nav">
                    <li><a href="/personal/#courses">Back</a></li>
                </ul>
                </nav>
                <section id="portfolio">
                    <h1>{this.props.name}</h1>
                    <h3>{this.props.info}</h3>
                    <div className="row row2">
                        <div>
                            <div id="portfolio-wrapper" >
                                {projects}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;