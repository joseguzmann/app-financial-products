import {ReactElement, useEffect} from "react";
import {useProductStore} from "@/store";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {ProductDetails} from "@/components/financial-products/details";
import {StyleSheet, Text, View} from "react-native";
import {MainLayout} from "@/layouts/main";

const ProductDetailsScreen = (): ReactElement => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const { product } = useProductStore();

    useEffect(() => {
        if (!product) {
            navigation.navigate("List")
        }
    }, []);

    return (
        <MainLayout>
            {
                product ?
                    <ProductDetails product={product}/> :
                    <View style={styles.noProduct}>
                        <Text>
                            Error al obtener detalles del producto
                        </Text>
                    </View>
            }
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    noProduct: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export {ProductDetailsScreen}