import {ReactElement} from "react";
import {ActivityIndicator, View} from "react-native";

const LoadingComponent = (): ReactElement => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
}

export {LoadingComponent}