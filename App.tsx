import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { registerDevMenuItems } from "expo-dev-menu"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import {
    MD3DarkTheme,
    PaperProvider,
    adaptNavigationTheme,
} from "react-native-paper"
import HomeScreen from "./src/screens/HomeScreen"
import LoginScreen from "./src/screens/LoginScreen"
import WelcomeScreen from "./src/screens/WelcomeScreen"
import useLoginStore from "./src/utils/store/loginStore"

const Stack = createNativeStackNavigator()

const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
})

const devMenuItems = [
    {
        name: "Show Login Store",
        callback: () =>
            console.log(
                "Login Store:\n" +
                    JSON.stringify(useLoginStore.getState(), null, 4)
            ),
    },
]

registerDevMenuItems(devMenuItems)

const App = () => {
    return (
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
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Home" component={HomeScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </PaperProvider>
    )
}

export default App
