import React, {ReactElement, useState} from 'react';
import { Image, View, Text } from 'react-native';

interface ProductImageProps {
    uri: string;
}

const ProductImage = ({ uri }: ProductImageProps): ReactElement => {
    const [error, setError] = useState(false);

    return (
        <View>
            <Image
                style={{ width: 200, height: 150 }}
                source={error ? require('../../assets/card-placeholder.png') : { uri }}
                resizeMode="contain"
                alt="Logo del producto"
                onError={() => setError(true)}
            />
        </View>
    );
};

export default ProductImage;
