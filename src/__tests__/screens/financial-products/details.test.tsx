import React from 'react';
import {create} from 'react-test-renderer';
import {Text} from 'react-native';
import {ProductDetailsScreen} from '@/screens/financial-products/details';
import {ProductDetails} from '@/components/financial-products/details';

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(() => ({
        navigate: jest.fn(),
    })),
}));
jest.mock('@/store', () => ({
    useProductStore: jest.fn(),
}));

const {useNavigation} = require('@react-navigation/native');
const {useProductStore} = require('@/store');

describe('ProductDetailsScreen Component', () => {
    const navigateMock = jest.fn();

    beforeEach(() => {
        useNavigation.mockReturnValue({navigate: navigateMock});
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders product details when product is available', () => {
        const mockProduct = {id: '1', name: 'Product 1', date_release: new Date('2023-01-01'), date_revision: new Date('2023-12-01')};
        useProductStore.mockReturnValue({product: mockProduct});

        const component = create(<ProductDetailsScreen />);
        const productDetails = component.root.findByType(ProductDetails);

        expect(productDetails.props.product).toEqual(mockProduct);
    });

    it('renders error message when no product is found', () => {
        useProductStore.mockReturnValue({product: null});

        const component = create(<ProductDetailsScreen />);
        const textElements = component.root.findAllByType(Text);
        const errorMessage = textElements.find(el => el.props.children === 'Error al obtener detalles del producto');

        expect(errorMessage).toBeTruthy();
    });

    it('matches the snapshot', () => {
        const mockProduct = {id: '1', name: 'Product 1', date_release: new Date('2023-01-01'), date_revision: new Date('2023-12-01')};
        useProductStore.mockReturnValue({product: mockProduct});

        const component = create(<ProductDetailsScreen />).toJSON();
        expect(component).toMatchSnapshot();
    });
});
