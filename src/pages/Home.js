import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps"
import { Avatar } from '@material-ui/core';

function Home() {
    return (
        <div className="home">
            {/* <h1>Home page</h1> */}
            <div className="home__header">
                <div className="home__headerRight">
                    {/* link */}
                    <Link to="/Gmail">Gmail</Link>
                    {/* link */}
                    <Link to="/images">Images</Link>
                    {/* icon */}
                    <AppsIcon className="home__appsicon" />
                    {/* avatar */}
                    <Avatar />
                </div>
            </div>
            <div className="home__body">

            </div>
            <div className="home__footer">

            </div>
            {/* <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" /> */}
        </div>
    )
}

export default Home
