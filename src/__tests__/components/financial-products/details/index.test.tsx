import React from 'react';
import {create, act} from 'react-test-renderer';
import {Text, TouchableOpacity} from 'react-native';
import {LargeButton} from '@/components/large-button';
import ProductImage from '@/components/product-image';
import {formatDateToString} from '@/helpers';
import {ProductDetails} from "@/components/financial-products/details";

describe('ProductDetails Component', () => {
    const product = {
        id: '12345',
        name: 'Sample Product',
        description: 'Sample Description',
        logo: 'https://example.com/logo.png',
        date_release: new Date('2023-01-01'),
        date_revision: new Date('2024-01-01')
    };

    it('renders correctly with product details', () => {
        const tree = create(<ProductDetails product={product} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('displays the correct product name', () => {
        const component = create(<ProductDetails product={product} />);
        const nameElement = component.root.findAllByType(Text).find(el => el.props.children === product.name);

        expect(nameElement).toBeTruthy();
    });

    it('displays the correct product image', () => {
        const component = create(<ProductDetails product={product} />);
        const imageElement = component.root.findByType(ProductImage);

        expect(imageElement.props.uri).toBe(product.logo);
    });

    it('displays formatted release and revision dates', () => {
        const component = create(<ProductDetails product={product} />);
        const releaseDate = component.root.findByProps({children: formatDateToString(product.date_release)});
        const revisionDate = component.root.findByProps({children: formatDateToString(product.date_revision)});

        expect(releaseDate).toBeTruthy();
        expect(revisionDate).toBeTruthy();
    });

    it('renders the Edit button and triggers the onPress event', () => {
        const onPressEdit = jest.fn();
        const component = create(<LargeButton text="Editar" onPress={onPressEdit} color="#0F265B" backgroundColor="rgba(0, 0, 0, 0.1)"/>);
        const buttonElement = component.root.findByType(TouchableOpacity);

        act(() => {
            buttonElement.props.onPress();
        });

        expect(onPressEdit).toHaveBeenCalled();
    });

    it('renders the Delete button and triggers the onPress event', () => {
        const onPressDelete = jest.fn();
        const component = create(<LargeButton text="Eliminar" onPress={onPressDelete} color="white" backgroundColor="#D30707"/>);
        const buttonElement = component.root.findByType(TouchableOpacity);

        act(() => {
            buttonElement.props.onPress();
        });

        expect(onPressDelete).toHaveBeenCalled();
    });
});
