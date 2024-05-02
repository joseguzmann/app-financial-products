import {useQuery} from "@tanstack/react-query";
import {getFinancialProducts} from "@/services/financial-products";

const useFinancialProductsFetcher = (authorId: number)  => {
    const getFinancialProductsQuery = useQuery({
        queryKey: ['financialProducts', authorId],
        queryFn: () => getFinancialProducts(authorId)
    });

    return {getFinancialProductsQuery}
};

export {useFinancialProductsFetcher}