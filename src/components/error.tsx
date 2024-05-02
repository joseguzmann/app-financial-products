import {View, Text} from "react-native";
import React, {ReactElement} from "react";

interface ErrorComponentProps {
    error: Error | null;
}

const ErrorComponent = ({ error }: ErrorComponentProps): ReactElement => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Error: {error?.message ?? "Details unavailable"}</Text>
        </View>
    );
}

export {ErrorComponent}