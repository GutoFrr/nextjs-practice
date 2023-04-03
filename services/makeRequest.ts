import axios, { AxiosRequestConfig } from 'axios';

interface Options extends AxiosRequestConfig {}

export async function clientRequest(url: string, options?: Options) {
  return await axios(url, options);
}
