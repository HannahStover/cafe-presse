import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchDishes,
  fetchEmployees,
  postFeedback
} from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { __values } from 'tslib';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    employees: state.employees
  };
};

const mapDispatchToProps = dispatch => ({
  postFeedback: values => {
    dispatch(postFeedback(values)).then(res => {
      return alert(`Thank you for your feedback! ${JSON.stringify(res)}`);
    });
  },
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset('feedback'));
  },
  fetchEmployees: () => {
    dispatch(fetchEmployees());
  }
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchEmployees();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          employee={
            this.props.employees.employees.filter(
              employee => employee.featured
            )[0]
          }
          employeesLoading={this.props.employees.isLoading}
          employeesErrMess={this.props.employees.errMess}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
        />
      );
    };

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames='page'
            timeout={300}
          >
            <Switch>
              <Route path='/home' component={HomePage} />
              <Route
                exact
                path='/about'
                component={() => <About employees={this.props.employees} />}
              />
              <Route
                exact
                path='/menu'
                component={() => <Menu dishes={this.props.dishes} />}
              />
              />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route
                exact
                path='/contactus'
                render={() => (
                  <Contact
                    postFeedback={this.props.postFeedback}
                    resetFeedbackForm={this.props.resetFeedbackForm}
                  />
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
