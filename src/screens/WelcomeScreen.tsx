import { StyleSheet } from "react-native"
import { FAB, Text, useTheme } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"

const WelcomeScreen = ({ navigation }: { navigation: any }) => {
    const theme = useTheme()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: theme.colors.background,
            alignItems: "center",
            justifyContent: "space-between",
        },
        text: {
            color: theme.colors.onBackground,
        },
        fab: {
            marginBottom: "5%",
        },
    })

    return (
        <SafeAreaView style={styles.container}>
            <Text variant="displayLarge">Welcome to login-app</Text>
            <FAB
                label="Get Started"
                style={styles.fab}
                onPress={() => navigation.navigate("Login")}
            />
        </SafeAreaView>
    )
}

export default WelcomeScreen
