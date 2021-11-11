// @flow
import React, { Suspense, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

// actions
import { changeLayout } from '../redux/actions';

import * as layoutConstants from '../constants/layout';

// components
import ThemeCustomizer from '../components/ThemeCustomizer';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import('./Topbar'));
const LeftSidebar = React.lazy(() => import('./LeftSidebar'));
const Footer = React.lazy(() => import('./Footer'));
const RightSidebar = React.lazy(() => import('./RightSidebar'));

const loading = () => <div className="text-center"></div>;

type VerticalLayoutProps = {
    children?: any,
};

type VerticalLayoutState = {
    isMenuOpened?: boolean,
};

const DetachedLayout = ({ children }: VerticalLayoutProps, state: VerticalLayoutState): React$Element<any> => {
    const dispatch = useDispatch();
    const { leftSideBarTheme, leftSideBarType } = useSelector((state) => ({
        layoutWidth: state.Layout.layoutWidth,
        leftSideBarTheme: state.Layout.leftSideBarTheme,
        leftSideBarType: state.Layout.leftSideBarType,
        showRightSidebar: state.Layout.showRightSidebar,
    }));

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    /**
     * Open the menu when having mobile screen
     */
    const openMenu = (e) => {
        setIsMenuOpened((prevState) => {
            setIsMenuOpened(!prevState);
        });
        if (document.body) {
            if (isMenuOpened) {
                document.body.classList.add('sidebar-enable');
            } else {
                document.body.classList.remove('sidebar-enable');
            }
        }
    };

    useEffect(() => {
        dispatch(changeLayout(layoutConstants.LAYOUT_DETACHED));
    }, [dispatch]);

    const isCondensed = leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED;
    const isLight = leftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_LIGHT;

    return (
        <>
            <Suspense fallback={loading()}>
                <Topbar
                    isMenuOpened={isMenuOpened}
                    openLeftMenuCallBack={openMenu}
                    navCssClasses="topnav-navbar topnav-navbar-dark"
                    topbarDark={true}
                />
            </Suspense>
            <Container fluid>
                <div className="wrapper">
                    <Suspense fallback={loading()}>
                        <LeftSidebar
                            isMenuOpened={isMenuOpened}
                            isCondensed={isCondensed}
                            isLight={isLight}
                            hideLogo={true}
                            hideUserProfile={false}
                        />
                    </Suspense>

                    <div className="content-page">
                        <div className="content">
                            <Suspense fallback={loading()}>{children}</Suspense>
                        </div>

                        <Suspense fallback={loading()}>
                            <Footer />
                        </Suspense>
                    </div>
                </div>
            </Container>
            <Suspense fallback={loading()}>
                <RightSidebar>
                    <ThemeCustomizer />
                </RightSidebar>
            </Suspense>
        </>
    );
};

export default DetachedLayout;
