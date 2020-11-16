import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Resume from './Components/Resume';
import Courses from './Components/Courses';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Portfolio from './Components/Portfolio';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resumeData: {}
        };

    }

    getResumeData() {
        $.ajax({
            url: '../personal/resumeData.json',
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({ resumeData: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        });
    }

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        if (this.state.resumeData.courses) {
            var routes = this.state.resumeData.courses.projects.map(function (projects) {
                var name = '/personal/' + projects.title.slice(0,6);
                return (
                    <Route key={name} path={name} component={props => <Portfolio data={projects.work} name={projects.title} info={projects.category}/>}/>
                )
            })
        }
        return (
            <Router>
                <div className="App">
                    <Route exact path="/personal">
                        <Header data={this.state.resumeData.main} />
                        <Resume data={this.state.resumeData.resume} />
                        <Courses data={this.state.resumeData.courses}/>
                        <Footer data={this.state.resumeData.main} />
                    </Route>
                    {routes}
                </div>
            </Router>
        );
    }
}

export default App;
