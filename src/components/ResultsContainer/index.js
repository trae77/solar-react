import React, { Component } from "react";
//import Search from "../search/Search";
import API from "../../utils/API";

class ResultsContainer extends Component {
    state = {
      // search
      search: "",
      // results
      results: [],
    };
  
    // component did mount calls searchEmployees
    componentDidMount() {
      this.solarResults("");
    }
  
    // method to searchEmployees randomly
    solarResults = (query) => {
      // API.search(query) goes here
      API.search(query)
        .then((res) => this.setState({ results: res.data.results }))
        .catch((err) => console.log(err));
    };
  
  }