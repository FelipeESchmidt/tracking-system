import axios, { AxiosError, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: `https://d13ovmltb9.execute-api.us-east-1.amazonaws.com`,
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    const responseData = response.data;
    if (responseData.erro) {
      return Promise.reject(responseData.erro);
    }
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response) {
      return Promise.reject("Erro na resposta:");
    }
    if (error.request) {
      return Promise.reject("Não foi possível obter resposta do servidor.");
    }
    return Promise.reject("Erro ao fazer a solicitação:");
  }
);

export default api;
