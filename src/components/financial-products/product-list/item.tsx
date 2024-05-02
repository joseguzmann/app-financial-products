import React, {ReactElement} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Product} from "@/types/product";
import Icon from "react-native-vector-icons/FontAwesome";
import {useProductStore} from "@/store";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

interface ProductItemProps {
    product: Product;
    isLastItem: boolean;
}

const ProductItem = ({ product, isLastItem }: ProductItemProps): ReactElement => {
    const { setProduct } = useProductStore();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const handleItemClick = () => {
        setProduct(product);
        navigation.navigate("Details")
    }

    return (
        <TouchableOpacity onPress={handleItemClick} style={[styles.item, !isLastItem ? styles.itemBorder : null]}>
            <View>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.id}>ID: {product.id}</Text>
            </View>
            <Icon name="chevron-right" size={15} color="rgba(0, 0, 0, 0.3)" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    itemBorder: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.3)'
    },
    name: {
        fontSize: 17,
        fontWeight: "500"
    },
    id: {
        color: "rgba(0, 0, 0, 0.6)",
        fontWeight: "400"
    }
})

export {ProductItem}