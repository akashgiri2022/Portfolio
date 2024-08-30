import React from 'react'
import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
import Home from './Home';

const Header = () => {
  
    const [mobilemenu,setMobilemenu]=useState("close");

    function handlemenu(){
        setMobilemenu(prevmenu => {
            return prevmenu==="close" ? "open" : "close"
        })
    }

  return (
    <div id="header">
      <div className="container">
        <nav>
          <h1>W E L C O M E</h1>
          <ul id="sidemenu" className={mobilemenu}>
          <Link to={"/"}><li><a href="">Home</a></li></Link>
          <Link to={"/about"}><li><a href="">About</a></li></Link>
          <Link to={"/services"}><li><a href="">Services</a></li></Link>
          <Link to={"/portfolio"}><li><a href="">Portfolio</a></li></Link>
          <Link to={"/contact"}><li><a href="">Contact</a></li></Link>
          <i className="fas fa-times" onClick={handlemenu}></i>
          </ul>
          <i className="fas fa-bars" onClick={handlemenu}></i>

        </nav>
        
      </div>
    
    </div>
  )
}

export default Header
