import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import {
    PaperProvider,
    adaptNavigationTheme,
    MD3DarkTheme,
} from "react-native-paper"
import { Provider as ReduxProvider } from "react-redux"

import HomeScreen from "./src/screens/HomeScreen"
import LoginScreen from "./src/screens/LoginScreen"
import WelcomeScreen from "./src/screens/WelcomeScreen"
import { store } from "./src/utils/store/store"

const Stack = createNativeStackNavigator()

const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
})

const App = () => {
    return (
        <ReduxProvider store={store}>
            <PaperProvider theme={MD3DarkTheme}>
                <StatusBar style="auto" />
                <View style={{ flex: 1, backgroundColor: "#000" }}>
                    <NavigationContainer theme={DarkTheme}>
                        <Stack.Navigator initialRouteName="Welcome">
                            <Stack.Screen
                                name="Welcome"
                                component={WelcomeScreen}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen
                                name="Login"
                                component={LoginScreen}
                            />
                            <Stack.Screen name="Home" component={HomeScreen} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </View>
            </PaperProvider>
        </ReduxProvider>
    )
}

export default App
