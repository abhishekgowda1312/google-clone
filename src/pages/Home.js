import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps"
import { Avatar } from '@material-ui/core';
import Search from '../components/Search';

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
                    <Avatar >AR</Avatar>
                </div>
            </div>
            <div className="home__body">

                <img
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    alt="Google"
                />
                <div className="home__inputContainer">
                    <Search />
                </div>

            </div>
            <div className="home__footer">

            </div>
        </div>
    )
}

export default Home
