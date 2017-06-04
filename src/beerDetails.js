import React from 'react';
import './beerDetails.css';
import { Thumbnail, Col, Alert } from 'react-bootstrap';
const BeerDetails = ({ selectedBeer }) => {
    return selectedBeer ? <Col xs={12} md={12} className="detailspace">
        <Thumbnail className="beerdetails" src={selectedBeer.image_url} alt={selectedBeer.tagline}>
            <h4>{selectedBeer.tagline}</h4>
            <p>First brewed at : {selectedBeer.first_brewed} </p>
            <p>ABV : {selectedBeer.abv} </p>
            <p>Description : {selectedBeer.description} </p>
            <p>Brewers Tips : {selectedBeer.brewers_tips} </p>
        </Thumbnail>
    </Col> : <Alert className="detailspace" bsStyle="warning">
            <strong>Not Selected: </strong> No Beer is selected. Please select one beer.
    </Alert>

}

export default BeerDetails;