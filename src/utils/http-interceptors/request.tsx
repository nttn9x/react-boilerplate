import axios from "axios";

import { getAccessToken } from "../auth";

import { API_ENDPOINT, HTTP_CODE } from "../../constants/common";

function formatResponse(response: any): any {
  return {
    isError: true,
    data: response.data
  };
}

export function formatError(error: any) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const status = error.response.status;
    return {
      isError: true,
      statusMessage:
        status === HTTP_CODE.Unauthorized
          ? "Unauthorized"
          : error.response.statusText,
      status
    };
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    return {
      isError: true,
      statusMessage: error.request.statusText
    };
  }
  // Something happened in setting up the request that triggered an Error
  return { isError: true, statusMessage: error.message };
}

function handleBeforeCallApi() {
  // Add a request interceptor
  axios.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      config.headers.Authorization = `Bearer ${getAccessToken()}`;

      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
}

function handleAfterCallApi() {
  // Add a response interceptor
  axios.interceptors.response.use(
    function(response: any): any {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return formatResponse(response);
    },
    function(error: any) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
}

function setUpApi() {
  axios.defaults.baseURL = API_ENDPOINT;
  axios.defaults.headers.post["Content-Type"] = "application/json";

  handleBeforeCallApi();

  handleAfterCallApi();
}

export { setUpApi };
