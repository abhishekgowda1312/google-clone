import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import { Link } from "react-router-dom";
import Search from '../components/Search';


function SearchPage() {
    const [{ term }, dispatch] = useStateValue()
    const { data } = useGoogleSearch(term) //? Live API call


    console.log(data);
    return (
        <div className="searchpage">
            <div className="searchpage__header">
                <Link to="/">
                    <img
                        className="searchpage__logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt="Google icon"
                    />
                </Link>
                <div className="searchpage__headerBody">
                    <Search hideButtons />
                </div>
            </div>
            <div className="searchpage__results">

            </div>


        </div>
    )
}

export default SearchPage
