import React from 'react';
import { create, act } from 'react-test-renderer';
import { TouchableOpacity, Text } from 'react-native';
import { useProductStore } from '@/store';
import { useNavigation } from '@react-navigation/native';
import {ProductItem} from "@/components/financial-products/product-list/item";
import {Product} from "@/types/product";

jest.mock('@/store', () => ({
    useProductStore: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
}));

describe('ProductItem Component', () => {
    const product: Product = {
        id: '123',
        name: 'Sample Product',
        description: "Test Description",
        logo: "Test Logo",
        date_revision: new Date(),
        date_release: new Date()
    };
    const mockSetProduct = jest.fn();
    const mockNavigate = jest.fn();

    beforeAll(() => {
        (useProductStore as unknown as jest.Mock).mockReturnValue({ setProduct: mockSetProduct });
        (useNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate });
    });

    it('renders correctly with the specified props', () => {
        const tree = create(<ProductItem product={product} isLastItem={false} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('displays the correct product name and ID', () => {
        const component = create(<ProductItem product={product} isLastItem={false} />);
        const nameElement = component.root.findAllByType(Text)[0];
        const idElement = component.root.findAllByType(Text)[1];

        expect(nameElement.props.children).toBe(product.name);
        expect(idElement.props.children).toContain(product.id);
    });

    it('applies the correct styles when it is not the last item', () => {
        const component = create(<ProductItem product={product} isLastItem={false} />);
        const itemElement = component.root.findByType(TouchableOpacity);

        expect(itemElement.props.style).toContainEqual({
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(0, 0, 0, 0.3)',
        });
    });

    it('triggers the onPress function correctly', () => {
        const component = create(<ProductItem product={product} isLastItem={true} />);
        const itemElement = component.root.findByType(TouchableOpacity);

        act(() => {
            itemElement.props.onPress();
        });

        expect(mockSetProduct).toHaveBeenCalledWith(product);
        expect(mockNavigate).toHaveBeenCalledWith('Details');
    });
});
