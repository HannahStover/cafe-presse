import React from 'react';
import { Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { Fade, Stagger } from 'react-animation-components';

function RenderEmployee({ employee }) {
  return (
    <li key={employee.id} className='col-12 mt-5'>
      <Media tag='li'>
        <Media left href={`/about/${employee.id}`}>
          <Media object src={baseUrl + employee.image} alt={employee.name} />
        </Media>
        <Media body className='ml-5'>
          <Media heading>{employee.name}</Media>
          <p>{employee.designation}</p>
          <p>{employee.description}</p>
        </Media>
      </Media>
    </li>
  );
}

const EmployeeList = props => {
  const employees = props.employees.employees.map(employee => {
    return (
      <Fade in>
        <RenderEmployee employee={employee} />
      </Fade>
    );
  });

  if (props.employees.isLoading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading />
        </div>
      </div>
    );
  } else if (props.employees.errMess) {
    return (
      <div className='row'>
        <h4>{props.employees.errMess}</h4>
      </div>
    );
  } else {
    return (
      <div className='row'>
        <ul className='list-unstyled'>
          <Stagger in>{employees}></Stagger>
        </ul>
      </div>
    );
  }
};

function About(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h3>About</h3>
          <hr />
        </div>
      </div>
      <div className='row row-content'>
        <div className='col-12 col-md-6'>
          <h2>Our History</h2>
          <p>
            Enjoy coffee and croissants in the morning, meet friends for lunch,
            dinner or drinks throughout the day or to have a late night bite or
            a night cap until 2am.
          </p>
        </div>
        <div className='col-12 col-md-5'>
          <Card>
            <CardHeader className='bg-primary text-white'>
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className='row p-1'>
                <dt className='col-6'>Started</dt>
                <dd className='col-6'>3 Feb. 2013</dd>
                <dt className='col-6'>Major Stake Holder</dt>
                <dd className='col-6'>HK Fine Foods Inc.</dd>
                <dt className='col-6'>Last Year's Turnover</dt>
                <dd className='col-6'>$1,250,375</dd>
                <dt className='col-6'>Employees</dt>
                <dd className='col-6'>40</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className='col-12'>
          <Card>
            <CardBody className='bg-faded'>
              <blockquote className='blockquote'>
                <p className='mb-0'>
                  You better cut the pizza in four pieces because I'm not hungry
                  enough to eat six.
                </p>
                <footer className='blockquote-footer'>
                  Yogi Berra,
                  <cite title='Source Title'>
                    The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books,
                    2014
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className='row row-content'>
        <div className='col-12'>
          <h2>Corporate Leadership</h2>
        </div>
        <div className='col-12'>
          <Media list>
            <EmployeeList employees={props.employees} />
          </Media>
        </div>
      </div>
    </div>
  );
}

export default About;
