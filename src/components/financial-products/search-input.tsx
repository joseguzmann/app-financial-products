import React, {ReactElement} from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface SearchInputProps {
    onChangeText: (text: string) => void
}

const SearchInput = ({onChangeText}: SearchInputProps): ReactElement => {
    return (
        <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="rgba(128, 128, 128, 1)"
            onChangeText={onChangeText}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.4)',
        borderRadius: 5,
        padding: 10,
        color: 'rgba(128, 128, 128, 0.5)',
    },
});

export {SearchInput};
