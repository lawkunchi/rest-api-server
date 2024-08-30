import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosHeaders,
} from "axios";

abstract class APIService {
  private axiosInstance: AxiosInstance;
  protected path: string = "/";

  constructor(headers?: AxiosHeaders) {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });
  }

  protected setPath(newPath: string): void {
    this.path = newPath;
  }

  protected async get<T>(config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(
      `${this.path}`,
      config
    );
    return response.data;
  }

  protected async post<T, R = T>(
    data?: R,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(
      `${this.path}`,
      data,
      config
    );
    return response.data;
  }

  protected async put<T, R = T>(
    data?: R,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put(
      `${this.path}`,
      data,
      config
    );
    return response.data;
  }

  protected async delete<T>(config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete(
      `${this.path}`,
      config
    );
    return response.data;
  }
}

export default APIService;
