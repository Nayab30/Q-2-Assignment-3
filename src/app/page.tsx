
import React from "react";
import Navbar from "@/component/Header";
import Image from "next/image";
import homepic from "@../../../public/homepic.JPG"
export default function Home (){
  return(
    <>
    <Navbar />

    <div>
    <div className="home-container">
      <div className="child-container">
        Hi,
        <br/>
        My name is <span className="name"> Nayab Aslam</span>
        <br/>
        I am Next JS Developer
      </div>
      <div className="child-container-2">
        
        <Image  src={homepic} alt={ "homepic"} width={400} height={400} 
        /> 
      </div>

    </div>
    </div>
    </>
  )
}