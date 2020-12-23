import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./NavBar";
import Cards from "./Cards";
import CARDS_LIST from "./CardsDetails";
import Social from "./Social";

function App() {
  const CardsList = CARDS_LIST.map((product, index) =>(
    <div className="col-md-3 mb-2">
      <Cards key = {index} item = {product} />
    </div>
  )
);
  
  return (
    <div className="container">
      <div className="main-navbar">
        <NavBar />
      </div>
      <div className="row py-5">
        {CardsList}
      </div>
        <div className="container"> 
       <Social/>
     </div>
    </div>
  );
}
export default App;
