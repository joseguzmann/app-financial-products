import React from 'react';
import { create, act } from 'react-test-renderer';
import { TouchableOpacity, Text } from 'react-native';
import {LargeButton} from "@/components/large-button";

describe('LargeButton Component', () => {
    const defaultProps = {
        text: 'Press Me',
        onPress: jest.fn(),
        color: 'white',
        backgroundColor: 'blue'
    };

    it('renders correctly with the specified props', () => {
        const tree = create(<LargeButton {...defaultProps} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('displays the correct text', () => {
        const component = create(<LargeButton {...defaultProps} />);
        const textElement = component.root.findByType(Text);

        expect(textElement.props.children).toBe(defaultProps.text);
    });

    it('applies the correct text color and background color', () => {
        const component = create(<LargeButton {...defaultProps} />);
        const buttonElement = component.root.findByType(TouchableOpacity);
        const textElement = component.root.findByType(Text);

        expect(buttonElement.props.style[1].backgroundColor).toBe(defaultProps.backgroundColor);
        expect(textElement.props.style[1].color).toBe(defaultProps.color);
    });

    it('calls onPress when pressed', () => {
        const component = create(<LargeButton {...defaultProps} />);
        const buttonElement = component.root.findByType(TouchableOpacity);

        act(() => {
            buttonElement.props.onPress();
        });

        expect(defaultProps.onPress).toHaveBeenCalled();
    });
});
