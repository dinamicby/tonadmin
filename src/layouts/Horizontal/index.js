// @flow
import React, { Suspense, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

// actions
import { changeLayout } from '../../redux/actions';
import * as layoutConstants from '../../constants/layout';

// components
import ThemeCustomizer from '../../components/ThemeCustomizer';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import('../Topbar'));
const Navbar = React.lazy(() => import('./Navbar'));
const Footer = React.lazy(() => import('../Footer'));
const RightSidebar = React.lazy(() => import('../RightSidebar'));

const loading = () => <div className="text-center"></div>;

type HorizontalLayoutProps = {
    children?: any,
};

type HorizontalLayoutState = {
    isMenuOpened: boolean,
};

const HorizontalLayout = ({ children }: HorizontalLayoutProps, state: HorizontalLayoutState): React$Element<any> => {
    const dispatch = useDispatch();

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    /**
     * Open the menu when having mobile screen
     */
    const openMenu = () => {
        setIsMenuOpened(!isMenuOpened);
        if (document.body) {
            if (isMenuOpened) {
                document.body.classList.remove('sidebar-enable');
            } else {
                document.body.classList.add('sidebar-enable');
            }
        }
    };

    useEffect(() => {
        dispatch(changeLayout(layoutConstants.LAYOUT_HORIZONTAL));
    }, [dispatch]);

    return (
        <>
            <div className="wrapper">
                <div className="content-page">
                    <div className="content">
                        <Suspense fallback={loading()}>
                            <Topbar
                                isMenuOpened={isMenuOpened}
                                openLeftMenuCallBack={openMenu}
                                navCssClasses="topnav-navbar"
                                topbarDark={false}
                            />
                        </Suspense>

                        <Suspense fallback={loading()}>
                            <Navbar isMenuOpened={isMenuOpened} />
                        </Suspense>

                        <Container fluid>
                            <Suspense fallback={loading()}>{children}</Suspense>
                        </Container>
                    </div>

                    <Suspense fallback={loading()}>
                        <Footer />
                    </Suspense>

                    <Suspense fallback={loading()}>
                        <RightSidebar>
                            <ThemeCustomizer />
                        </RightSidebar>
                    </Suspense>
                </div>
            </div>
        </>
    );
};

export default HorizontalLayout;
