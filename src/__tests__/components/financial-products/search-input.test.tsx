import React from 'react';
import { create, act } from 'react-test-renderer';
import { TextInput } from 'react-native';
import {SearchInput} from "@/components/financial-products/search-input";

describe('SearchInput Component', () => {
    const mockOnChangeText = jest.fn();

    it('renders correctly with default styles', () => {
        const tree = create(<SearchInput onChangeText={mockOnChangeText} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('has the correct placeholder', () => {
        const component = create(<SearchInput onChangeText={mockOnChangeText} />);
        const inputElement = component.root.findByType(TextInput);

        expect(inputElement.props.placeholder).toBe('Search...');
    });

    it('calls onChangeText when text is changed', () => {
        const component = create(<SearchInput onChangeText={mockOnChangeText} />);
        const inputElement = component.root.findByType(TextInput);

        act(() => {
            inputElement.props.onChangeText('new text');
        });

        expect(mockOnChangeText).toHaveBeenCalledWith('new text');
    });
});
