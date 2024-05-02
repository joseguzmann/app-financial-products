import {ReactElement} from "react";
import {FinancialProductsScreen} from "./financial-products";
import {ProductDetailsScreen} from "@/screens/financial-products/details";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainScreen = (): ReactElement => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"List"}>
            <Stack.Screen
                name="List"
                component={FinancialProductsScreen}
            />
            <Stack.Screen
                name="Details"
                component={ProductDetailsScreen}
            />
        </Stack.Navigator>
    )
}

export {MainScreen}
