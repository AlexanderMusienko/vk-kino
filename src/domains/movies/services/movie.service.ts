import { axiosRequest } from "@/common/http";
import { IMovie } from "../models/movie.model";
import { ENDPOINTS } from "@/common/constants/url";
import { TApiResponse } from "@/shared/types/api.type";

export class MovieAPI {
  constructor() {}

  static getMovie(id: number) {
    return axiosRequest<undefined, IMovie>({
      url: ENDPOINTS.getMovie(id),
      method: "GET",
    });
  }

  static getMoviesList(page: number, filters?: string) {
    return axiosRequest<undefined, TApiResponse<IMovie[]>>({
      url: ENDPOINTS.getMoviesWithFilters(page, filters),
      method: "GET",
    });
  }
}
