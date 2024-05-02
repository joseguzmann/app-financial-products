import React, {ReactElement, ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

interface ProvidersProps {
    children: ReactNode;
}

const queryClient = new QueryClient();

const Providers = ({children}: ProvidersProps): ReactElement => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                <QueryClientProvider client={queryClient}>
                    <NavigationContainer>
                        {children}
                    </NavigationContainer>
                </QueryClientProvider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export {Providers};
