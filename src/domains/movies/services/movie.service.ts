import { axiosRequest } from "@/common/http";
import { IMovie } from "../models/movie.model";
import { ENDPOINTS } from "@/common/constants/url";

export class MovieAPI {
  constructor() {}

  static getMovie(id: number) {
    return axiosRequest<undefined, IMovie>({
      url: ENDPOINTS.getMovie(id),
      method: "GET",
    });
  }
}
