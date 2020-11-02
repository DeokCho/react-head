import React, {useState} from 'react'
import './Head.css'
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import MenuIcon from '@material-ui/icons/Menu';

const Head = () => {
    const [toggleState, setToggleState] = useState(false)

    const toggleHandler = () =>{
        setToggleState(!toggleState)
    } 

    return (
        <div>
            <nav className="navbar">
                <div className="navbar_logo">
                    <ControlCameraIcon/>
                    {`  Flexible Header`}
                </div>

                <ul className={toggleState? "navbar_menu": "navbar_menu_hidden"}>
                    <li><a href="#">홈</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Weddings</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Bookings</a></li>
                </ul>

                <ul className={toggleState? "navbar_links": "navbar_links_hidden"}>
                    <li><TwitterIcon/></li>
                    <li><FacebookIcon/></li>
                </ul>
                <a href="#" className="navbar_btn" onClick={toggleHandler}><MenuIcon/></a>
            </nav>
        </div>
    )
}

export default Head
