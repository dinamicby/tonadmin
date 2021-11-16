import axios from 'axios';
import https from 'https';

import { store } from "react-notifications-component";

// content type
axios.defaults.headers.post['Content-Type'] = 'application/json';
//axios.defaults.baseURL = config.API_URL;

// intercepting to capture errors
axios.interceptors.response.use(
    (response) => {
        if(response && response.data && response.data.error){
          store.addNotification({
            title: "JSONRPC error: " + response.data.error.message,
            message: response.data.error.data ? response.data.error.data.message : " ",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: { duration: 15000 },
            dismissable: { click: true }
          });

          let error = response.data.error


          let message;
          if (error && error.data && error.data.args[0] === 404) {

          } else if (error && error.data && error.data.args[0] === 403) {
              sessionStorage.removeItem(AUTH_SESSION_KEY);
              window.location.href = '/account/login';
              store.addNotification({
                title: "Wrong AUTH token",
                message: "Please, login again.",
                type: "warning",
                insert: "top",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: { duration: 5000 },
                dismissable: { click: true }
              });
          } else {
              switch (!error.data || error.data.args[0]) {
                  case 401:
                      message = 'Invalid credentials';
                      break;
                  case 403:
                      message = 'Access Forbidden';
                      break;
                  case 404:
                      message = 'Sorry! the data you are looking for could not be found';
                      break;
                  default: {
                      message =
                          error.response && error.response.data ? error.response.data['message'] : error.message || error;
                  }
              }
              return Promise.reject(message);
        }
        return "JsonRPC Error: " + response.data.error.data.message;
      }
      return response;
    },
    (error) => {
        let message;
        if (error && error.response && error.response.status === 404) {

        } else if (error && error.response && error.response.status === 403) {
            window.location.href = '/access-denied';
        } else {
            switch (!error.response || error.response.status) {
                case 401:
                    message = 'Invalid credentials';
                    break;
                case 403:
                    message = 'Access Forbidden';
                    break;
                case 404:
                    message = 'Sorry! the data you are looking for could not be found';
                    break;
                default: {
                    message =
                        error.response && error.response.data ? error.response.data['message'] : error.message || error;
                }
            }
            return Promise.reject(message);
        }
    }
);

const AUTH_SESSION_KEY = 'hyper_user';

/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token) => {
    if (token) axios.defaults.headers.common['Authorization'] = "token " + token;
    else delete axios.defaults.headers.common['Authorization'];
};

const getUserFromSession = () => {
    const user = sessionStorage.getItem(AUTH_SESSION_KEY);
    return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null;
};

class APICore {
    /**
     * Fetches data from given url
     */
    get = (url, params) => {
        let response;
        if (params) {
            var queryString = params
                ? Object.keys(params)
                      .map((key) => key + '=' + params[key])
                      .join('&')
                : '';
            response = axios.get(`${url}?${queryString}`, params);
        } else {

            response = axios.get(`${url}`,   {transformRequest: (data, headers) => {
                  delete headers.common['Authorization'];
                  return data;
                }});
        }
        return response;
    };

    getFile = (url, params) => {
        let response;
        if (params) {
            var queryString = params
                ? Object.keys(params)
                      .map((key) => key + '=' + params[key])
                      .join('&')
                : '';
            response = axios.get(`${url}?${queryString}`, { responseType: 'blob' });
        } else {

            response = axios.get(`${url}`, { responseType: 'blob' });
        }
        return response;
    };

    getMultiple = (urls, params) => {
        const reqs = [];
        let queryString = '';
        if (params) {
            queryString = params
                ? Object.keys(params)
                      .map((key) => key + '=' + params[key])
                      .join('&')
                : '';
        }

        for (const url of urls) {
            reqs.push(axios.get(`${url}?${queryString}`));
        }
        return axios.all(reqs);
    };

    /**
     * post given data to url
     */
    create = (url, data) => {
        return axios.post(url, data);
    };

    /**
     * post jsonrpc given data to url
     */
    sendJRPC = (url, data, params = []) => {
      const httpsAgent = new https.Agent({ rejectUnauthorized: false });
        return axios.post(
          url,
          JSON.stringify({jsonrpc: "2.0", id: 0, method: data, params: params}, { httpsAgent }),
      /*    {transformRequest: (data, headers) => {
            delete headers.common['Authorization'];
            return data;
          }}*/
        )
    };


    /**
     * Updates patch data
     */
    updatePatch = (url, data) => {
        return axios.patch(url, data);
    };

    /**
     * Updates data
     */
    update = (url, data) => {
        return axios.put(url, data);
    };

    /**
     * Deletes data
     */
    delete = (url) => {
        return axios.delete(url);
    };

    /**
     * post given data to url with file
     */
    createWithFile = (url, data) => {
        const formData = new FormData();
        for (const k in data) {
            formData.append(k, data[k]);
        }

        const config = {
            headers: {
                ...axios.defaults.headers,
                'content-type': 'multipart/form-data',
            },
        };
        return axios.post(url, formData, config);
    };

    /**
     * post given data to url with file
     */
    updateWithFile = (url, data) => {
        const formData = new FormData();
        for (const k in data) {
            formData.append(k, data[k]);
        }

        const config = {
            headers: {
                ...axios.defaults.headers,
                'content-type': 'multipart/form-data',
            },
        };
        return axios.patch(url, formData, config);
    };

    isUserAuthenticated = () => {
        const user = this.getLoggedInUser();
        if (!user || (user && !user.token)) {
            return false;
        }

    /*    const decoded = jwtDecode(user.token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            console.warn('access token expired');
            return false;
        } else {
            return true;
        }*/
        return true;
    };



    setLoggedInUser = (session) => {

        if (session) {
          sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
          sessionStorage.setItem('URL', session.api);
          console.log("SET BASE URL: "+session.api)
          axios.defaults.baseURL = session.api;
        }
        else {
            sessionStorage.removeItem(AUTH_SESSION_KEY);
        }
    };

    /**
     * Returns the logged in user
     */
    getLoggedInUser = () => {
        return getUserFromSession();
    };

    setUserInSession = (modifiedUser) => {
        let userInfo = sessionStorage.getItem(AUTH_SESSION_KEY);
        if (userInfo) {
            const { username, token } = JSON.parse(userInfo);
            this.setLoggedInUser({ token, ...username, ...modifiedUser });
        }
    };
    removeSession = () => {
        sessionStorage.removeItem(AUTH_SESSION_KEY);
    };
}

/*
Check if token available in session
*/
let user = getUserFromSession();
if (user) {
    const { token, api } = user;
    if (token) {
        axios.defaults.baseURL = api;
        setAuthorization(token);

    }
}



export { APICore, setAuthorization };
