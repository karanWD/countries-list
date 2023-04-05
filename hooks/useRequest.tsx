import { useState } from "react";
import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {ApiRoutes} from "@/enums/ApiRoutes";

const apiInstance = axios.create({baseURL: ApiRoutes.BASE} as any);

apiInstance.interceptors.request.use(
    (req) => {
      return req;
    },
    (err) => {
      return Promise.reject(err);
    }
);

const useRequest = (axiosParams?: AxiosRequestConfig) => {
  const [response, setResponse] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const sendRequest = async (newParams?: AxiosRequestConfig): Promise<any> => {
    try {
      setResponse({ data: null, loading: true, error: null })
      const result = await apiInstance.request(newParams ?? axiosParams as any);
      setResponse({ data: result.data, loading: false, error: null });
      return result.data
    } catch (e) {
      let message = e.response?.data?.message ? e.response.data.message : e.response?.data
      setResponse({ data: null, loading: false, error: message });
      return Promise.reject(message)
    }
  };
  return [sendRequest, response, setResponse] as const;
};

export default useRequest;