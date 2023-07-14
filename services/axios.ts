"use client";

import axios, { AxiosError, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: window ? `${window.location.origin}/api` : "",
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    const responseData = response.data;
    if (responseData.erro) {
      return Promise.reject(responseData.erro);
    }
    return response;
  },
  (error: AxiosError<{ error: string }>) => {
    if (error.response) {
      const errorMessage = error.response.data.error;
      return Promise.reject(`Erro na resposta: ${errorMessage}`);
    }
    if (error.request) {
      return Promise.reject("Não foi possível obter resposta do servidor.");
    }
    return Promise.reject("Erro ao fazer a solicitação:");
  }
);

export default api;
