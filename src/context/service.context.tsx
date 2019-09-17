import React, { createContext, useContext } from "react";

import { callApi } from "../utils/service.util";
import { AxiosRequestConfig } from "axios";

import { useSnackbar } from "notistack";

interface IServiceContext {
  apiGet: any;
  apiPost: any;
  apiDelete: any;
  apiPut: any;
}

export const ServiceContext = createContext<IServiceContext>({
  apiGet: null,
  apiPost: null,
  apiDelete: null,
  apiPut: null
});

const ServiceProvider = (props: any) => {
  const { enqueueSnackbar } = useSnackbar();

  function apiPost(options: AxiosRequestConfig) {
    return callApi(
      {
        method: "POST",
        ...options
      },
      enqueueSnackbar
    );
  }
  function apiGet(options: AxiosRequestConfig) {
    return callApi(
      {
        method: "GET",
        ...options
      },
      enqueueSnackbar
    );
  }
  function apiDelete(options: AxiosRequestConfig) {
    return callApi(
      {
        method: "DELETE",
        ...options
      },
      enqueueSnackbar
    );
  }
  function apiPut(options: AxiosRequestConfig) {
    return callApi(
      {
        method: "PUT",
        ...options
      },
      enqueueSnackbar
    );
  }

  return (
    <ServiceContext.Provider
      value={{ apiDelete, apiPut, apiGet, apiPost }}
      {...props}
    />
  );
};

export const useServiceContext = () =>
  useContext<IServiceContext>(ServiceContext);

export default ServiceProvider;
