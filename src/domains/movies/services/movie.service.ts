import { axiosRequest } from "@/common/http";
import { IMovie } from "../models/movie.model";
import { TApiResponse } from "@/shared/types/api.type";
import { ENDPOINTS } from "@/common/constants/url";

export class MovieAPI {
  constructor() {}

  static getMovie(id: number) {
    return axiosRequest<undefined, IMovie>({
      url: ENDPOINTS.GET_MOVIE + "/" + id,
      method: "GET",
    });
  }
}
