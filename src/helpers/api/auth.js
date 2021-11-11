// @flow
import { APICore } from './apiCore';
const api = new APICore();

// account
function login(params: any): any {
    return api.sendJRPC(`${params[0]}`, 'login', params);
}

function logout(): any {
    return api.sendJRPC(``, 'logout', {});
}

function signup(params: any): any {
    const baseUrl = '/register/';
    return api.sendJRPC(`${baseUrl}`, params);
}

function forgotPassword(params: any): any {
    const baseUrl = '/forget-password/';
    return api.sendJRPC(`${baseUrl}`, params);
}

function forgotPasswordConfirm(params: any): any {
    const baseUrl = '/password/reset/confirm/';
    return api.sendJRPC(`${baseUrl}`, params);
}

export { login, logout, signup, forgotPassword, forgotPasswordConfirm };
