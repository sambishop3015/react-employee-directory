import React, { Component } from "react";
import ResultList from "./ResultList";
import SortFilter from "./SortAndFilter";
import API from "../utils/API";

class EmployeeListContainer extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = (query) => {
    API.search(query)
      .then((res) => this.setState({ results: res.data.data }))
      .catch((err) => console.log(err));
  };




  render() {
    return (
      <div>
        <SortFilter
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default EmployeeListContainer;