import {ReactElement} from "react";
import {StyleSheet, Text, View} from "react-native";
import {useFinancialProductsFetcher} from "@/hooks/financial-products/query";
import {ErrorComponent} from "@/components/error";
import {LoadingComponent} from "@/components/loading";
import {MainLayout} from "@/layouts/main";
import {ProductList} from "@/components/financial-products/product-list";
import {useProductStore} from "@/store";

const FinancialProductsScreen = (): ReactElement => {
    const {
        getFinancialProductsQuery: {
            data,
            isFetching,
            isError,
            error
        }
    } = useFinancialProductsFetcher(1);

    if (isFetching) {
        return (
            <LoadingComponent/>
        );
    }

    if (isError) {
        return (
            <ErrorComponent error={error}/>
        )
    }

    return (
        <MainLayout>
            {
                data?.data ?
                    <ProductList products={data?.data}/> :
                    <View style={styles.noProducts}>
                        <Text>
                            No se han encontrado productos
                        </Text>
                    </View>
            }
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    noProducts: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export {FinancialProductsScreen}