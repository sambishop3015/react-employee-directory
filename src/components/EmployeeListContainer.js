import React, {
  Component
} from "react";
// import ResultList from "./ResultList";
// import SortFilter from "./SortAndFilter";
import API from "../utils/API";

class EmployeeListContainer extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    API.search()
      .then((res) => this.setState({results: res.data.data}))
      .catch((err) => console.log(err));
    console.log(this.state);
  };



  render() {
    return ( 
    <div> 
      {this.state.results} 
    </div>
    );
    // return (
    //   <div>
    //     <SortFilter
    //       search={this.state.search}
    //       handleFormSubmit={this.handleFormSubmit}
    //       handleInputChange={this.handleInputChange}
    //     />
    //     <ResultList results={this.state.results} />
    //   </div>
    // );
  }
}

export default EmployeeListContainer;