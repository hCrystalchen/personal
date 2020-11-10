import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Resume from './Components/Resume';
import Courses from './Components/Courses';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
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
            url: 'personal/resumeData.json',
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
        return (
            <Router>
                <div className="App">
                    <Route exact path="/personal">
                        <Header data={this.state.resumeData.main} />
                        <Resume data={this.state.resumeData.resume} />
                        <Courses data={this.state.resumeData.courses}/>
                        <Footer data={this.state.resumeData.main} />
                    </Route>
                    <Route path="/personal/hi" component={Portfolio} />
                </div>
            </Router>
        );
    }
}

export default App;
