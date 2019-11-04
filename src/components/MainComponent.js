import React, { Component, Render } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { EMPLOYEES } from '../shared/employees';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: EMPLOYEES,
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home employee={this.state.employees.filter((leader) => leader.featured)[0]}>

                </Home>
            );
        }


        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/about" component={() => <About employees={this.state.employees} />} />
                </Switch>
            </div>
        );
    }
}

export default Main;