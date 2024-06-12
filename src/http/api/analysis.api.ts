import { AxiosResponse } from "axios";
import { GetAllOrdersReq, GetAllOrdersRes, OrdersByPatientGetRes } from "../../types/api/orders.api.types";
import { authApi } from "../instances";
import { ANALYSIS_PATHS, ORDERS_PATHS, USER_PATHS } from "../paths/index.paths";
import { CategoriesGetReq, CategoriesGetRes } from "../../types/api/categories.api.types";
import { AnalysisGetByIdReq, AnalysisGetByIdRes, AnalysisGetReq, AnalysisGetRes } from "../../types/api/analysis.api.types";
import { ConvertDataToGetParams } from "../../utils/ConvertDataToGetParams";

export class AnalysisServiceApi {
    static async GetByTitle(req: AnalysisGetReq): Promise<AxiosResponse<AnalysisGetRes>> {
        const res: AxiosResponse<AnalysisGetRes> = await authApi.get(`${ANALYSIS_PATHS.GET_PRODUCTS_BY_CATEGORY}${ConvertDataToGetParams(req)}`);
        if (!res.data) {
            throw res
        }
        return res
    }
    static async GetById(req: AnalysisGetByIdReq): Promise<AxiosResponse<AnalysisGetByIdRes>> {
        const res: AxiosResponse<AnalysisGetByIdRes> = await authApi.get(`${ANALYSIS_PATHS.GET_PRODUCTS_BY_ID}${ConvertDataToGetParams(req)}`);
        if (!res.data) {
            throw res
        }
        return res
    }
}