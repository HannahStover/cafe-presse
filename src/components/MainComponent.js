import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';
import MenuDetail from './MenuDetailComponent';
import Menus from './MenusComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        employees: state.employees,
        menus: state.menus
    }
}

class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home employee={this.props.employees.filter((employee) => employee.featured)[0]} />
            );
        }

        const MenuWithId = ({ match }) => {
            return (
                <MenuDetail menu={this.props.menus.filter((menu) => menu.id === parseInt(match.params.dishId, 10))[0]} />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/about" component={() => <About employees={this.props.employees} />} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/menu" component={() => <Menus menus={this.props.menus} />} />
                    <Route path="/menu/:menuID" component={MenuWithId} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
