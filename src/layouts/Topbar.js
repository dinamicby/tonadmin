// @flow
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


// components


import logoSmDark from '../assets/images/logo_sm_dark.png';
import logoSmLight from '../assets/images/logo_sm.png';
import logo from '../assets/images/logo-light.png';



type TopbarProps = {
    hideLogo?: boolean,
    navCssClasses?: string,
    openLeftMenuCallBack?: () => void,
    topbarDark?: boolean,
};

const Topbar = ({ hideLogo, navCssClasses, openLeftMenuCallBack, topbarDark }: TopbarProps): React$Element<any> => {

    const [isopen, setIsopen] = useState(false);

    const navbarCssClasses = navCssClasses || '';
    const containerCssClasses = !hideLogo ? 'container-fluid' : '';

    const { layoutType } = useSelector((state) => ({
        layoutType: state.Layout.layoutType,
    }));

    /**
     * Toggle the leftmenu when having mobile screen
     */
    const handleLeftMenuCallBack = () => {
        setIsopen((prevState) => !prevState);
        if (openLeftMenuCallBack) openLeftMenuCallBack();
    };


    return (
        <React.Fragment>
            <div className={`navbar-custom ${navbarCssClasses}`}>
                <div className={containerCssClasses}>
                    {!hideLogo && (
                        <Link to="/" className="topnav-logo">
                            <span className="topnav-logo-lg">
                                <img src={logo} alt="logo" height="16" />
                            </span>
                            <span className="topnav-logo-sm">
                                <img src={topbarDark ? logoSmLight : logoSmDark} alt="logo" height="16" />
                            </span>
                        </Link>
                    )}
                    <button className="button-menu-mobile open-left disable-btn" onClick={handleLeftMenuCallBack}>
                        <i className="mdi mdi-menu" />
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Topbar;
