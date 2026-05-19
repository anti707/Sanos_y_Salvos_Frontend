import { useState } from "react";
import { Container } from 'react-bootstrap';
import "../../css/pages/Home.css";
import "../../Components/molecules/CardHorizontal"
import CardHorizontal from "../../Components/molecules/CardHorizontal";




function Home() {

 
  return (
    <Container className="home-container">


      <div className="home-box">
        <h1 className="home-title">Sanos y Salvos</h1>
      </div>

      <CardHorizontal/>
      <CardHorizontal/>
      <CardHorizontal/>
      


    </Container>
  );
}

export default Home;