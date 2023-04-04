import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";
 import  Redirect from "react-router-dom/Redirect";




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

// import React, { Component } from "react";
// import API from "../utils/API";
// import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
// // import { BrowserRouter } from 'react-router-dom';
//  import { Redirect } from 'react-router-dom';
// // const withAuth = require('../utils/auth');

// var lat = [];
// var long = [];
// var Kwh = "";
// class Search extends Component {
//   state = {
//     search: "",
//     city: "",
//     cost: "",

//     solars: "",
  
//     redirect:"",
//     results: null,
//     error: "",
//   };

//   handleInputChange = (event) => {
//     this.setState({ city: event.target.value });
//   };
//   handleRedirectChange = (event) => {
//     this.setState({ redirect: event.target.value });
//   };
//   handleSearchChange = (e) => {
//     this.setState({ search: e.target.value });
//   };
//   handleCostChange = (e) => {
//     this.setState({ cost: e.target.value });
//   };
//   handleFormSubmit =  (event) => {
//     event.preventDefault();
//     // var monthlyKwh = (this.state.search)
//     API.getLatLong(this.state.city)
//       // console.log(monthlyKwh);
//       .then((res) => {
//         lat.push(res.data[0].lat);
//         long.push(res.data[0].lon);

//         // console.log(JSON.parse(long));
//         // console.log(JSON.parse(lat));
//         if (res.data.status === "error") {
//           throw new Error(res.data);
//         }

//         API.getIrradiance(lat, long)
//           .then((res) => {
//             const annualDNI = res.data.outputs.avg_dni.annual;
//             // const monthlyKwh = 333;
//             Kwh = this.state.search;
         
       
//             var solar = (+Kwh / 30) / (annualDNI * 0.71);
       
//             this.setState({solars: solar });
//                    if(this.state.results > 3){
// <Redirect to="/good" />
//           } 
           
//             console.log(this.state.solar , "fry");
          
//             if (res.data.status === "error") {
//               throw new Error(res.data);
//             }
//             console.log(solar , "fish");
//             this.setState({ results: annualDNI, error: "" });
//             console.log(this.results , "mayor");
//           })
//           .catch((err) => this.setState({ error: err.message }));
//       });

//   };

// //   if (this.state.solars <= 3) {
// //     console.log("good ");
// // } else {
// //  console.log("bad");
// // }
 
//   // .catch(err => this.setState({ error: err.message t}));

//   //   API.getIrradiance(lat, long)
//   //   .then(res => {
//   //     if (res.data.status === "error") {
//   //       throw new Error(res.data);
//   //     }
//   //     this.setState({ results: res.data, error: "" });
//   //   })
//   //   .catch(err => this.setState({ error: err.message }));
//   // };

//   render( ) {
   
//     return (
//       <div>
//         <Container style={{ minHeight: "80%" }}>
//           <h1 className="text-center">Enter your information:</h1>
//           <Alert
//             type="danger"
//             style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
//           >
//             {this.state.error}
//           </Alert>
//           <SearchForm
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//             handleSearchChange={this.handleSearchChange}
//             handleCostChange={this.handleCostChange}
//             city={this.state.city}
//             cost={this.state.cost}
//             search={this.state.search}
//           />
//           {/* if(this.state.results > 3){
// <Redirect to="/good" />
//           } */}
//              <SearchResults results={"your result : " + this.state.solars} />
//         </Container>
//       </div>
//     );
//   }
// }

// export default Search;
