import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
const withAuth = require('../utils/auth');

var lat = [];
var long = [];
var Kwh = "";
class Search extends Component {
  state = {
    search: "",
    city: "",
    cost: "",

    solars: "",
    // breeds: [],
    redirect:"",
    results: [],
    error: "",
  };
 
 

  handleInputChange = (event) => {
    this.setState({ city: event.target.value });
  };
  handleRedirectChange = (event) => {
    this.setState({ redirect: event.target.value });
  };
  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };
  handleCostChange = (e) => {
    this.setState({ cost: e.target.value });
  };
  handleFormSubmit =  (event) => {
    event.preventDefault();
    // var monthlyKwh = (this.state.search)
    API.getLatLong(this.state.city)
      // console.log(monthlyKwh);
      .then((res) => {
        lat.push(res.data[0].lat);
        long.push(res.data[0].lon);

        // console.log(JSON.parse(long));
        // console.log(JSON.parse(lat));
        if (res.data.status === "error") {
          throw new Error(res.data);
        }

        API.getIrradiance(lat, long)
          .then((res) => {
            const annualDNI = res.data.outputs.avg_dni.annual;
            // const monthlyKwh = 333;
            Kwh = this.state.search;
         
       
            var solar = (+Kwh / 30) / (annualDNI * 0.71);
       
            this.setState({solars: solar });
           
            
            console.log(this.state.solars);
            if (res.data.status === "error") {
              throw new Error(res.data);
            }
            console.log(solar , "fish");
            this.setState({ results: annualDNI, error: "" });
          })
          .catch((err) => this.setState({ error: err.message }));
        
      });
  };



  render( ) {
   
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Enter your information:</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            handleSearchChange={this.handleSearchChange}
            handleCostChange={this.handleCostChange}
            city={this.state.city}
            cost={this.state.cost}
            search={this.state.search}
          />
          <SearchResults results={ "your result : " + this.state.solars} />
        </Container>
      </div>
    );
  }
}

export default Search;
