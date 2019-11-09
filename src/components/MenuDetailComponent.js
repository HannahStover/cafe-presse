import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderMenu({ menu }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={menu.location} alt={menu.name} />
                <CardBody>
                    <CardTitle>{menu.name}</CardTitle>
                    <CardText>{menu.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

const MenuDetail = (props) => {
    if (props.menu) {
        return (
            <div className="container">
                <div className="row">
                    <RenderMenu menu={props.menu} />
                </div>
            </div>
        );
    }
    else
        return (
            <div></div>
        );
}


export default MenuDetail;