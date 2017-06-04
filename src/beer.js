import React, { Component } from 'react';
import {ListGroupItem} from 'react-bootstrap';
import './beer.css';

class Beer extends Component {
    onBeerSelect = () => {
        this.props.onBeerSelect(this.props.beer);
    }
    render() {
        const {beer} = this.props;
        return (
            <ListGroupItem header={beer.tagline} onClick={this.onBeerSelect}>
                First brewed at : {beer.first_brewed} | ABV : {beer.abv}
            </ListGroupItem>
        );
    }
}
export default Beer;