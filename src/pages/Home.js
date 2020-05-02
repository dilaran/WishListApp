import React, { Component } from "react";
import HomeItem from "../components/home";
import Category from "../components/category";
import CarouselDemo from "../components/CarouselDemo";
import Principles from "../components/Principles";
//import CarouselDemo from "../components/CarouselDemo";
import car from '../components/assets/car.jpg';

class Home extends Component {
  render() {
    return (
      <div  styles={{ backgroundImage:`url(${car})` }}>
      <div>
        <center>
          {/* <HomeItem /> */}
          <HomeItem />
          <Category />
          <br />
          <Principles />
          <br />
        </center>
      </div>
      </div>
    )
  }
}

  // const mapStateToProps = (state) => {
  //   return {
  //     items: state.items
  //   }
  // }
  
  export default Home;
