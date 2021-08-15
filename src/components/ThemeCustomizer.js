// @flow
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// actions
import { changeLayout, changeLayoutWidth, changeSidebarTheme, changeSidebarType } from '../redux/actions';

// constants
import * as layoutConstants from '../constants/layout';

type ThemeCustomizerState = {
    isHorizontalLayout?: boolean,
    isDetachedLayout?: boolean,
    isBoxed?: boolean,
    isSidebarScrollable?: boolean,
    isCondensed?: boolean,
    isLight?: boolean,
    isDark?: boolean,
};

const ThemeCustomizer = (state: ThemeCustomizerState): React$Element<any> => {
    const dispatch = useDispatch();

    const [disablelayoutWidth, setDisablelayoutWidth] = useState(false);
    const [disableSidebarTheme, setDisableSidebarTheme] = useState(false);
    const [disableSidebarType, setDisableSidebarType] = useState(false);

    const { layoutType, layoutWidth, leftSideBarType, leftSideBarTheme } = useSelector((state) => ({
        layoutType: state.Layout.layoutType,
        layoutWidth: state.Layout.layoutWidth,
        leftSideBarTheme: state.Layout.leftSideBarTheme,
        leftSideBarType: state.Layout.leftSideBarType,
        showRightSidebar: state.Layout.showRightSidebar,
    }));

    /**
     * change state based on props changes
     */
    const _loadStateFromProps = useCallback(() => {
        setDisablelayoutWidth(layoutType === 'detached' ? true : false);
        setDisableSidebarTheme(layoutType === 'detached' || layoutType === 'topnav' ? true : false);
        setDisableSidebarType(layoutType === 'topnav' ? true : false);
    }, [layoutType]);

    useEffect(() => {
        _loadStateFromProps();
    }, [_loadStateFromProps]);

    /**
     * On layout change
     */
    const changeLayoutType = (e) => {
        var layout = e ? e.currentTarget.value : 'default';

        switch (layout) {
            case 'topnav':
                dispatch(changeLayout(layoutConstants.LAYOUT_HORIZONTAL));
                break;
            case 'detached':
                dispatch(changeLayout(layoutConstants.LAYOUT_DETACHED));
                break;
            default:
                dispatch(changeLayout(layoutConstants.LAYOUT_VERTICAL));
                break;
        }
    };

    /**
     * Change the width mode
     */
    const changeWidthMode = (e) => {
        var mode = e ? e.currentTarget.value : 'default';

        switch (mode) {
            case 'boxed':
                dispatch(changeLayoutWidth(layoutConstants.LAYOUT_WIDTH_BOXED));
                break;
            default:
                dispatch(changeLayoutWidth(layoutConstants.LAYOUT_WIDTH_FLUID));
                break;
        }
    };

    /**
     * Changes the theme
     */
    const changeTheme = (e) => {
        var theme = e ? e.currentTarget.value : 'default';
        switch (theme) {
            case 'light':
                dispatch(changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_LIGHT));
                break;
            case 'dark':
                dispatch(changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_DARK));
                break;
            default:
                dispatch(changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT));
                break;
        }
    };

    /**
     * Change the leftsiderbar type
     */
    const changeLeftSiderbarType = (e) => {
        var type = e ? e.currentTarget.value : 'default';
        switch (type) {
            case 'condensed':
                dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED));
                break;
            case 'scrollable':
                dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_SCROLLABLE));
                break;
            default:
                dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED));
                break;
        }
    };

    /**
     * Reset everything
     */
    const reset = () => {
        changeLayoutType();
        changeWidthMode();
        changeTheme();
        changeLeftSiderbarType();
    };

    return (
        <React.Fragment>
            <div className="p-3">
                <div className="alert alert-warning" role="alert">
                    <strong>Customize </strong> the overall color scheme, sidebar menu, etc.
                </div>

                <h5 className="mt-3">Layout</h5>
                <hr className="mt-1" />

                <div className="form-check form-switch mb-1">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="layout"
                        value="vertical"
                        id="vertical-check"
                        onChange={changeLayoutType}
                        checked={layoutType === 'vertical'}
                    />
                    <label className="custom-control-label" htmlFor="vertical-check">
                        Vertical Layout
                    </label>
                </div>

                <div className="form-check form-switch mb-1">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="layout"
                        value="topnav"
                        id="horizontal-check"
                        onChange={changeLayoutType}
                        checked={layoutType === 'topnav'}
                    />
                    <label className="custom-control-label" htmlFor="horizontal-check">
                        Horizontal Layout
                    </label>
                </div>

                <div className="form-check form-switch mb-1">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="layout"
                        value="detached"
                        id="detached-check"
                        onChange={changeLayoutType}
                        checked={layoutType === 'detached'}
                    />
                    <label className="form-check-label" htmlFor="detached-check">
                        Detached Layout
                    </label>
                </div>

                <h5 className="mt-4">Width</h5>
                <hr className="mt-1" />

                <div className="form-check form-switch mb-1">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="width"
                        value="fluid"
                        id="fluid-check"
                        checked={layoutWidth === 'fluid'}
                        onChange={changeWidthMode}
                        disabled={disablelayoutWidth}
                    />
                    <label className="form-check-label" htmlFor="fluid-check">
                        Fluid
                    </label>
                </div>

                <div className="form-check form-switch mb-1">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="width"
                        value="boxed"
                        id="boxed-check"
                        checked={layoutWidth === 'boxed'}
                        onChange={changeWidthMode}
                        disabled={disablelayoutWidth}
                    />
                    <label className="form-check-label" htmlFor="boxed-check">
                        Boxed
                    </label>
                </div>

                <h5 className="mt-4">Left Sidebar</h5>
                <hr className="mt-1" />

                <div className="form-check form-switch mb-1">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="theme"
                        value="default"
                        id="default-check"
                        onChange={changeTheme}
                        checked={leftSideBarTheme === 'default'}
                        disabled={disableSidebarTheme}
                    />
                    <label className="form-check-label" htmlFor="default-theme-check">
                        Default
                    </label>
                </div>

                <div className="form-check form-switch mb-1">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="theme"
                        value="light"
                        id="light-check"
                        onChange={changeTheme}
                        checked={leftSideBarTheme === 'light'}
                        disabled={disableSidebarTheme}
                    />
                    <label className="form-check-label" htmlFor="light-theme-check">
                        Light
                    </label>
                </div>

                <div className="form-check form-switch mb-3">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="theme"
                        value="dark"
                        id="dark-check"
                        onChange={changeTheme}
                        checked={leftSideBarTheme === 'dark'}
                        disabled={disableSidebarTheme}
                    />
                    <label className="form-check-label" htmlFor="dark-theme-check">
                        Dark
                    </label>
                </div>

                <div className="form-check form-switch mb-1">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="compact"
                        value="fixed"
                        id="fixed-check"
                        checked={leftSideBarType === 'fixed'}
                        onChange={changeLeftSiderbarType}
                        disabled={disableSidebarType}
                    />
                    <label className="form-check-label" htmlFor="fixed-check">
                        Fixed
                    </label>
                </div>

                <div className="form-check form-switch mb-1">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="compact"
                        value="condensed"
                        id="condensed-check"
                        onChange={changeLeftSiderbarType}
                        checked={leftSideBarType === 'condensed'}
                        disabled={disableSidebarType}
                    />
                    <label className="form-check-label" htmlFor="condensed-check">
                        Condensed
                    </label>
                </div>

                <div className="form-check form-switch mb-1">
                    <input
                        type="radio"
                        className="form-check-input"
                        name="compact"
                        value="scrollable"
                        id="scrollable-check"
                        onChange={changeLeftSiderbarType}
                        checked={leftSideBarType === 'scrollable'}
                        disabled={disableSidebarType}
                    />
                    <label className="form-check-label" htmlFor="scrollable-check">
                        Scrollable
                    </label>
                </div>

                <div className="d-grid mt-4">
                    <button className="btn btn-primary" id="resetBtn" onClick={reset}>
                        Reset to Default
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ThemeCustomizer;
