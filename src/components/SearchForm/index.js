import React from "react";
import "./style.css";



function SearchForm(props) {
  console.log(props);
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input
          value={props.city}
          onChange={props.handleInputChange}
          name="city"
          type="text"
          className="form-control"
          placeholder="Type in your city"
          id="city"
        />
         <input
          value={props.search}
          onChange={props.handleSearchChange}
          name="monthlyKwh"
          type="decimal"
          className="form-control"
          placeholder="Type in your monthly energy use in Kwh (you will need a utility bill"
          id="monthlyKwh"
        />
            <input
          value={props.cost}
          onChange={props.handleCostChange}
          name="monthlyCost"
          type="decimal"
          className="form-control"
          placeholder="Type in your monthly electric cost"
          id="monthlyCost"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

