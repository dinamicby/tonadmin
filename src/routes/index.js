import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

// lazy load all the views

// auth
const Login = React.lazy(() => import('../pages/account/Login'));
const Logout = React.lazy(() => import('../pages/account/Logout'));
const Register = React.lazy(() => import('../pages/account/Register'));
const Confirm = React.lazy(() => import('../pages/account/Confirm'));
const ForgetPassword = React.lazy(() => import('../pages/account/ForgetPassword'));
const LockScreen = React.lazy(() => import('../pages/account/LockScreen'));

// dashboard

const EcommerceDashboard = React.lazy(() => import('../pages/dashboard/Ecommerce'));
const CRMDashboard = React.lazy(() => import('../pages/dashboard/CRM'));
const MinerDashboard = React.lazy(() => import('../pages/dashboard/Miner'));
const ValidatorDashboard = React.lazy(() => import('../pages/dashboard/Validator'));
const ValidatorsList = React.lazy(() => import('../pages/ValidatorsList'));

const HashRate = React.lazy(() => import('../pages/analytics/HashRate'));
const BleedRate = React.lazy(() => import('../pages/analytics/BleedRate'));
const Machines = React.lazy(() => import('../pages/analytics/Machines'));

// app
// root routes
const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/dashboard/validator" />,
  route: Route,
};

// dashboards
const dashboardRoutes = {
    path: '/dashboard',
    name: 'Dashboards',
    icon: 'uil-home-alt',
    header: 'Navigation',
    children: [
        {
            path: '/dashboard/validator',
            name: 'Validator',
            component: ValidatorDashboard,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/miner',
            name: 'Miner',
            component: MinerDashboard,
            route: PrivateRoute,
        },
        {
            path: '/dashboard/ecommerce',
            name: 'Ecommerce',
            badge: {
                variant: 'success',
                text: '3',
            },
            component: EcommerceDashboard,
            route: PrivateRoute,
        },
    ],
};

const ValidatorsListRoute = {
    path: '/validators',
    name: 'Validators',
    route: PrivateRoute,
    roles: ['Admin'],
    icon: 'uil-list',
    component: ValidatorsList
};

// flatten the list of all nested routes
const flattenRoutes = (routes) => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach((item) => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// auth
const authRoutes = [
    {
        path: '/account/login',
        name: 'Login',
        component: Login,
        route: Route,
    },
    {
        path: '/account/logout',
        name: 'Logout',
        component: Logout,
        route: Route,
    },
    {
        path: '/account/register',
        name: 'Register',
        component: Register,
        route: Route,
    },
    {
        path: '/account/forget-password',
        name: 'Forget Password',
        component: ForgetPassword,
        route: Route,
    },
    {
        path: '/account/lock-screen',
        name: 'Lock Screen',
        component: LockScreen,
        route: Route,
    }
];
const analyticRoutes = [
    {
        path: '/analytics/hashrate',
        name: 'HashRate',
        component: HashRate,
        route: Route,
    },
    {
        path: '/analytics/bleedrate',
        name: 'BleedRate',
        component: BleedRate,
        route: Route,
    },
    {
        path: '/analytics/machines',
        name: 'Hash Rate vs Hardware',
        component: Machines,
        route: Route,
    }
]

// All routes
const authProtectedRoutes = [rootRoute, dashboardRoutes, ValidatorsListRoute];
const publicRoutes = [...authRoutes, ...analyticRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);

export { publicRoutes, authProtectedRoutes, authProtectedFlattenRoutes, publicProtectedFlattenRoutes };
