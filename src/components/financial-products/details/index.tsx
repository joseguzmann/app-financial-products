import {ReactElement} from "react";
import {Product} from "@/types/product";
import {StyleSheet, View, Text, Image} from "react-native";
import {formatDateToString} from "@/helpers";
import {LargeButton} from "@/components/large-button";
import ProductImage from "@/components/product-image";

interface ProductDetailsProps {
    product: Product;
}

const ProductDetails = ({product}: ProductDetailsProps): ReactElement => {
    return (
        <View style={{
            flex: 1
        }}>
            <View style={{
                flex: 1,
                justifyContent: 'flex-start',
                gap: 70,
            }}>
                <View>
                    <Text style={styles.id}>
                        ID: {product.id}
                    </Text>
                    <Text style={styles.extraInformation}>
                        Información extra
                    </Text>
                </View>
                <View>
                    <View style={{
                        paddingHorizontal: 10,
                        gap: 10
                    }}>
                        <View style={styles.detail}>
                            <Text style={styles.detailLabel}>
                                Nombre
                            </Text>
                            <Text style={styles.detailValue}>
                                {product.name}
                            </Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={styles.detailLabel}>
                                Descripción
                            </Text>
                            <Text style={styles.detailValue}>
                                {product.name}
                            </Text>
                        </View>
                        <View>
                            <Text  style={styles.detailLabel}>
                                Logo
                            </Text>
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <ProductImage
                                    uri={product.logo}
                                />
                            </View>
                        </View>
                        <View style={styles.detail}>
                            <Text style={styles.detailLabel}>
                                Fecha liberación
                            </Text>
                            <Text style={styles.detailValue}>
                                {formatDateToString(product.date_release)}
                            </Text>
                        </View>
                        <View style={styles.detail}>
                            <Text style={styles.detailLabel}>
                                Fecha revisión
                            </Text>
                            <Text style={styles.detailValue}>
                                {formatDateToString(product.date_revision)}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                gap: 10
            }}>
                <LargeButton
                    text="Editar"
                    onPress={() => {
                    }}
                    color="#0F265B"
                    backgroundColor="rgba(0, 0, 0, 0.1)"
                />
                <LargeButton
                    text="Eliminar"
                    onPress={() => {
                    }}
                    color="white"
                    backgroundColor="#D30707"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    id: {
        fontSize: 23,
        fontWeight: "500"
    },
    extraInformation: {
        color: "rgba(0, 0, 0, 0.6)",
        fontSize: 15
    },
    detail: {
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "space-between"
    },
    detailLabel: {
        fontSize: 17,
        color: "rgba(0, 0, 0, 0.6)"
    },
    detailValue: {
        fontWeight: "600"
    }
})

export {ProductDetails}