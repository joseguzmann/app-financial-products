import React, {ReactElement, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Product} from "@/types/product";
import {ProductItem} from "@/components/financial-products/product-list/item";
import {SearchInput} from "@/components/financial-products/search-input";

interface ProductListProps {
    products: Product[];
}

const ProductList = ({products}: ProductListProps): ReactElement => {
    const [filter, setFilter] = useState<string>("");

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <SearchInput
                onChangeText={(text) => setFilter(text)}
            />
            <View style={styles.listContainer}>
                {filteredProducts.map((item, index) => (
                    <ProductItem
                        key={index}
                        product={item}
                        isLastItem={index == products.length - 1}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 30
    },
    listContainer: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 8,
        overflow: 'hidden'
    }
});

export {ProductList};
