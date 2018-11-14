import React, {Component} from 'react';
import axios from 'axios';
import {Form, Button, FormGroup, FormControl} from 'react-bootstrap';

class Search extends Component {
    state = {
        location: ""
    }

    handleSubmit = event => {
        event.preventDefault();

        axios
        .get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${this.state.location}`)
        .then( resp =>{
            axios.get(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${resp.data[0].woeid}`)
            .then(resp2 =>{
                this.props.update({
                    city: resp2.data.title,
                    weather: resp2.data.consolidated_weather[0].weather_state_name,
                    temp: resp2.data.consolidated_weather[0].the_temp,
                    err: ""
                })
            })
            .catch(err => {
                console.log(err);
                this.props.update(undefined)
            })
        })
        .catch(err =>{
            console.log(err);
            this.props.update(undefined)
        })
    }

    render(){
        return(
            <Form className="text-center" onSubmit = {this.handleSubmit}>
                <FormGroup>
                    <FormControl type="text" placeholder="Enter City"
                        onChange = {event => this.setState({location: event.target.value})} required />
                </FormGroup>
                <Button type="submit" className="btn-primary">Search City</Button>
            </Form>
        );
    }
}

export default Search;