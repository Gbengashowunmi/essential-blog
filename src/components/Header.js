import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp, AiFillFacebook, AiFillGoogleCircle, AiFillTwitterCircle, AiFillYoutube, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';

import './styles/Header.scss'
export default function Headers(){

    const[menuClick, setMenuclick]= useState(false)
const HandleClick = ()=>{
    setMenuclick((prev) => !prev)
}
    return (
      <div className={menuClick ? "header shownavlist" : "header"}>
        <div className="wrapper">
          <div className="leftNav">
            <div className="menu" onClick={HandleClick}>
              <AiOutlineMenu />
              MENU
            </div>
            <div className="logo">ESSENTIAL</div>
          </div>
          <div className="rightNav">
            <div className="facebook">
              <AiFillFacebook className="icon" />
            </div>
            <div className="google">
              <AiFillGoogleCircle className="icon" />
            </div>
            <div className="twitter">
              <AiFillTwitterCircle className="icon" />
            </div>
            <div className="youtube">
              <AiFillYoutube className="icon" />
            </div>
            <div className="facebook">
              <AiFillFacebook className="icon" />
            </div>
          </div>
        </div>

        <div className="navList">
          <ul className="navList-ul">
            <Link to={"/"}>
              {/* <AiFillCaretUp className='home-arrow'/> */}
              <li>Home </li>
            </Link>
            <Link to={"/"}>
              <li>
                Domes <AiFillCaretDown />
              </li>
            </Link>
            <Link to={"/"}>
              <li>
                Drop Down <AiFillCaretDown id="arrow-down" />
              </li>
            </Link>
            <Link to={"/"}>
              <li>
                Mega Links <AiFillCaretDown />
              </li>
            </Link>
            <Link to={"/"}>
              <li>
                Mega Label <AiFillCaretDown />
              </li>
            </Link>
            <Link to={"/"}>
              <li>
                ComplexMega <AiFillCaretDown />
              </li>
            </Link>
            <Link to={"/"}>
              <li>
                Shortcode <AiFillCaretDown />
              </li>
            </Link>
            <div className="shortcode">
              <ul>
                <li></li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    );
} 