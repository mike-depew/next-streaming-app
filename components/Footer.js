import Image from "next/image"
import React from "react"
import { Container } from "react-bootstrap"
import Instagram from "../Images/insta.png"
import Twitter from "../Images/twitter.png"
import styles from "../styles/Home.module.css";
import Link from "next/link";

function Footer(){
return(
  <div className="footer-container">
    <footer className="bg-black">
    
      <div className="flex items-center justify-center -mt-40 space">
  
 
      <Image src={Instagram}  alt="instgram" objectFit="contain" width={30}  />
      <Image src={Twitter} alt="instgram" objectFit="contain" width={30} />
      </div>
      <div className="px-3 md:px-24 md:container md:mx-auto ">

      <div className="flex text-gray-50 justify-between">
        <h4 className="text-med font-small">Legal</h4>
        <h4 className="text-md font-small">Court of Records</h4>
        <h4 className="text-md font-small">About</h4>
        <h4 className="text-md font-small">Webmaster</h4>
 
      </div>
   <br /> 
  
      </div>
      <div>
 
      </div>
    
  </footer>
  </div>
)
}

export default Footer