import React, {ReactElement} from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface LargeButtonProps {
    text: string;
    onPress: () => void;
    color: string;
    backgroundColor: string;
}

const LargeButton = ({ text, onPress, color, backgroundColor }: LargeButtonProps): ReactElement => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            onPress={onPress}
        >
            <Text style={[styles.text, { color }]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
    },
});

export {LargeButton};
