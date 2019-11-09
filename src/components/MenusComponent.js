import React from 'react';
import {
    Card, CardImg, CardImgOverlay, CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuPage({ menu }) {
    return (
        <Card>
            <Link to={`/menu/${menu.id}`} >
                <CardImg width="100%" src={menu.image} alt={menu.name} />
                <CardImgOverlay>
                    <CardTitle>{menu.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menus = (props) => {
    const menu = props.menus.map((menu) => {
        return (
            <div key={menu.id} className="col-12 col-md-5 m-1">
                <RenderMenuPage menu={menu} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menus;