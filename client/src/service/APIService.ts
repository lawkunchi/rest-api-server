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

  private handleError(error: any): never {
    if (axios.isAxiosError(error)) {
      console.error("Axios error occurred:", error.message);
      throw new Error(`Axios error: ${error.message}`);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error("An unexpected error occurred");
    }
  }

  public async get<T>(config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(`${this.path}`, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  public async post<T, R = T>(data?: R, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(`${this.path}`, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  public async put<T, R = T>(id:string, data?: R, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.put(`${this.path}${id}`, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  public async delete<T>(id:string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete(`${this.path}${id}`, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  public async getAll<T>(config?: AxiosRequestConfig): Promise<T[]> {
    try {
      const response: AxiosResponse<T[]> = await this.axiosInstance.get(`${this.path}`, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }
}

export default APIService;