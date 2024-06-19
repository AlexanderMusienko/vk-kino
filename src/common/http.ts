import axios, {
  AxiosError,
  AxiosProgressEvent,
  AxiosRequestConfig,
  Method,
} from "axios";
import qs from "qs";
import { BASE_URL } from "./constants/url";
let isFetching: boolean = false;

export const ACCESS_TOKEN_KEY = "accessToken";

export interface IErrorMessage {
  errorMessage?: string;
  error?: string;
  errorCode: string;
}

export type TAPIError = AxiosError<IErrorMessage>;

export type ApiParams<T> = {
  data?: T;
  method: Method;
  url: string;
  token?: string;
  contentType?: string;
  baseURL?: string;
  params?: object;
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
};

export const API_BASE_URL = BASE_URL;

const API_KEY = "4W7CAF4-7PG4YKZ-QJY0GWJ-KHPZX9D";

export const axiosRequest = async <TRequestData, TResponseData = void>({
  data,
  method,
  url,
  baseURL,
  params,
  contentType,
  header,
  onUploadProgress,
}: ApiParams<TRequestData> & {
  header?: Record<string, string>;
}): Promise<TResponseData> => {
  const config: AxiosRequestConfig = {
    baseURL,
    data,
    method,
    url,
    params,
    onUploadProgress,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  if (isFetching) {
    console.warn("A request is already pending. Please wait.");
    return Promise.reject(new Error("Concurrent requests are not allowed."));
  }

  isFetching = true;

  config.url = url;
  if (!config.baseURL) config.baseURL = baseURL || API_BASE_URL;

  if (header) {
    const preparedHeaders = new Headers();
    Object.entries(header).forEach(([key, value]) =>
      preparedHeaders.append(key, value)
    );
    config.headers = { ...config.headers, ...header };
  }
  console.log(API_KEY, "api key");
  if (API_KEY) {
    config.headers = {
      ...config.headers,
      "X-API-KEY": API_KEY,
    };
  }

  if (contentType) {
    config.headers = {
      ...config.headers,
      "content-type": contentType,
    };
  }

  return axios
    .request(config)
    .then((resp) => {
      isFetching = false;
      const returningExpression = resp && "data" in resp ? resp.data : resp;
      return returningExpression;
    })
    .catch((err) => {
      isFetching = false;
      throw err;
    });
};
