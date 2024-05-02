import axiosClient from "../index";
import {AxiosResponse} from "axios";
import {Product} from "@/types/product";

const getFinancialProducts =  async (authorId: number): Promise<AxiosResponse<Product[]>> => {
    return axiosClient.get("bp/products", {
        headers: {
            authorId: 1
        }
    });
}

export {getFinancialProducts}