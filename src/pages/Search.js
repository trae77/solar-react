import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
import { Redirect } from "react-router-dom";
// import withAuth from "../utils/auth";

var lat = [];
var long = [];
var Kwh = "";
class Search extends Component {
  state = {
    search: "",
    city: "",
    cost: "",
    solars: "",
    results: [],
    error: "",
     redirect: false,
  };

  handleInputChange = (event) => {
    this.setState({ city: event.target.value });
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleCostChange = (e) => {
    this.setState({ cost: e.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getLatLong(this.state.city)
      .then((res) => {
        lat.push(res.data[0].lat);
        long.push(res.data[0].lon);

        if (res.data.status === "error") {
          throw new Error(res.data);
        }

        API.getIrradiance(lat, long)
          .then((res) => {
            const annualDNI = res.data.outputs.avg_dni.annual;
            Kwh = this.state.search;
            var solar = +Kwh / 30 / (annualDNI * 0.71);

            this.setState({ solars: solar });

            if (res.data.status === "error") {
              throw new Error(res.data);
            }

            this.setState({ results: annualDNI, error: "" });
          })
          .catch((err) => this.setState({ error: err.message }));
      })
      .then(() => {
        this.setState({ redirect: true });
      });
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      if (this.state.solar > 3) {
        console.log("hit");
        console.log(this.state.solar);
        return <Redirect to="/Good" />;
      } else {
        return <Redirect to="/Bad" />;
      }
    }

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
          <SearchResults results={"your result : " + this.state.solars} />
        </Container>
      </div>
    );
  }
}

export default Search;

