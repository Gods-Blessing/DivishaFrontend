import './Navbar.css';

// importing images
import profile from '../../assets/images/profile.png';

import arrow from '../../assets/images/rightarrow.png'


function Navbar(){
    return(
        <nav>
            <img className="site-logo" src="https://startupz.world/images/white-logo.png" alt="logo"/>

            <ul className="site-navs">
                <li>HOME</li>
                <li>STARTUP</li>
                <li>INVESTOR</li>
                <li>ABOUT US</li>
            </ul>

            <div className="profile-div flexing">
                <div className="profile-smalldiv flexing">
                    <img className="profile-img" src={profile} alt="profile"></img>

                    <p>
                        LOG IN
                    </p>
                </div>

                <button className="flexing">
                    ADD LISTING

                    <img src={arrow} alt="arrow" />
                </button>
            </div>

        </nav>
    )
}


export default Navbar;