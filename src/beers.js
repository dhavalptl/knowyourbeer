import React, { Component } from 'react';
import { Grid, Row, Col, Alert, FormGroup, FormControl, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import Beer from './beer';
import BeerDetails from './beerDetails';
import Spinner from 'react-spinner';
class Beers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            error: undefined,
            selectedBeer: undefined,
            filterText: ''
        }
    }
    componentDidMount() {
        this.loadBeers();
    }
    loadBeers = () => {
        axios.get('https://api.punkapi.com/v2/beers?per_page=10')
            .then(response => this.setState({
                beers: response.data
            }))
            .catch(error => this.setState({
                erorr: "Error while fetching beers data!!!"
            }));
    }
    handleAlertDismiss = () => {
        this.setState({
            error: undefined
        })
    }
    handleSelectBeer = (beer) => {
        this.setState({
            selectedBeer: beer
        })
    }
    handleFilter = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                filterText: e.target.value
            });
            /*const filterText = e.target.value;
            const beers = this.state.beers;
            if(filterText.length === 0){
                this.setState({
                    filteredBeers: beers.filter(beer => beer.tagline.indexOf(filterText) !== -1)
                });
            }
            this.setState({
                filteredBeers: beers.filter(beer => beer.tagline.indexOf(filterText) !== -1)
            });*/
        }
    }
    render() {
        const { error, beers, selectedBeer, filterText } = this.state;
        let filteredBeers = [];
        if (filterText) {
            filteredBeers = beers.filter(beer => beer.tagline.indexOf(filterText) !== -1)
        } else {
            filteredBeers = beers;
        }
        const beerNodes = filteredBeers.map((beer) => <Beer key={beer.id} beer={beer} onBeerSelect={this.handleSelectBeer} />);
        return (
            beers.length > 0 ? <Grid className="beers">
                {
                    error && <Alert bsStyle="warning" onDismiss={this.handleAlertDismiss}>
                        <strong>Error:  </strong> {error}
                    </Alert>
                }
                <Col xs={12} md={6}>
                    <Row style={{ paddingBottom: 10 }}>
                        <Col>
                            <FormGroup>
                                <Col sm={12}>
                                    <FormControl type="text" placeholder="Filter" onKeyPress={this.handleFilter} />
                                </Col>
                            </FormGroup>
                        </Col>
                    </Row>
                    <ListGroup>
                        {beerNodes}
                    </ListGroup>
                </Col>
                <Col xs={12} md={6}>
                    <Row>
                        <BeerDetails selectedBeer={selectedBeer} />
                    </Row>
                </Col>
            </Grid> : <Spinner />
        );
    }
}

export default Beers;