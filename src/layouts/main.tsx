import React, {ReactElement, ReactNode} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout = ({children}: MainLayoutProps): ReactElement => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="money" size={20} color="#0F265B" />
                <Text style={styles.headerText}>BANCO</Text>
            </View>
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        height: 60,
        backgroundColor: '#fff',
        display: "flex",
        flexDirection: "row",
        gap: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(128, 128, 128, 0.3)',
    },
    headerText: {
        color: '#0F265B',
        fontSize: 17,
        fontWeight: "bold",
    },
    content: {
        paddingHorizontal: 20,
        paddingVertical: 40,
        flex: 1
    }
});

export {MainLayout};
