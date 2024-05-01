import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";

const MainScreen = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your apss</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export {MainScreen}
