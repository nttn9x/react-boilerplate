import axios, { AxiosRequestConfig } from "axios";

import { formatError } from "./http-interceptors/request";

import { SNACKBAR_TYPE } from "../constants/common";

export function callApi(options: AxiosRequestConfig, enqueueSnackbar: any) {
  return axios(options).catch(function(error) {
    const err = formatError(error);
    enqueueSnackbar(err.statusMessage, { variant: SNACKBAR_TYPE.Error });
  });
}
