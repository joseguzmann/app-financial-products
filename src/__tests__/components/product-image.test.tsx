import React from 'react';
import { create, act } from 'react-test-renderer';
import { Image } from 'react-native';
import ProductImage from "@/components/product-image";

describe('ProductImage Component', () => {
    const validUri = 'https://example.com/valid-image.jpg';

    it('renders correctly with a valid URI', () => {
        const component = create(<ProductImage uri={validUri} />);
        const imageElement = component.root.findByType(Image);

        expect(imageElement.props.source).toEqual({ uri: validUri });
        expect(imageElement.props.alt).toBe('Logo del producto');
    });

    it('displays placeholder image on error', () => {
        const component = create(<ProductImage uri={validUri} />);
        const imageElement = component.root.findByType(Image);

        act(() => {
            imageElement.props.onError();
        });

        expect(imageElement.props.source).toEqual(require('../../../assets/card-placeholder.png'));
    });
});
