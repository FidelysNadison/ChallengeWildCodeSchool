import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Createargonautes from "./components/Createargonautes";
import Liste from "./components/Liste";

export default function App() {
    return (
      <main>
        <Header/>
        <Createargonautes/>
        <Liste/>
        <Footer/>
      </main>
    );
  }