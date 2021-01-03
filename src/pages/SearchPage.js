import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import { Link } from "react-router-dom";
import Search from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
// import Response from '../response'
import DetailsIcon from '@material-ui/icons/Details';



function SearchPage() {
    const [{ term }, dispatch] = useStateValue()
    const { data } = useGoogleSearch(term) //? Live API call
    // const data = Response

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

                    <div className="searchpage__options">
                        <div className="searchpage__optionsLeft">
                            <div className="searchpage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchpage__option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchpage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchpage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchpage__option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchpage__option">
                                <OndemandVideoIcon />
                                <Link to="/videos">Videos</Link>
                            </div>
                            <div className="searchpage__option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="searchpage__optionsRight">
                            <div className="searchpage__option">
                                <Link to="/setting">Settings</Link>
                            </div>
                            <div className="searchpage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {term && (
                <div className="searchpage__results">
                    <p className="searchpage__resultsCount">
                        About {data?.searchInformation.formattedTotalResults}
                        results ({data?.searchInformation.formattedSearchTime} seconds) for "{term}"
                    </p>

                    {data?.items.map(item => (
                        <div className="searchpage__result">
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img
                                        className="searchPage__resultImage"
                                        src={item.pagemap?.cse_image?.length > 0 &&
                                            item.pagemap?.cse_image[0]?.src
                                        }

                                        alt="" />
                                )}
                                {item.displayLink}
                            </a><DetailsIcon style={{ fontSize: 11 }} /><br />

                            <a className="searchpage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchpage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>

                    ))}


                </div>
            )}
        </div>
    )
}

export default SearchPage
