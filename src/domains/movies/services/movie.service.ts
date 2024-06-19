import { axiosRequest } from "@/common/http";
import { IMovie } from "../models/movie.model";
import { TApiResponse } from "@/shared/types/api.type";

export class MovieAPI {
  constructor() {}

  static getMovie(id: number) {
    return axiosRequest<undefined, IMovie>({
      url: `/movies/${id}`,
      method: "GET",
    });
  }
}
