import { StyleSheet, Text, View } from "react-native"
import { Button, useTheme } from "react-native-paper"

const HomeScreen = () => {
    const theme = useTheme()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            alignItems: "center",
            justifyContent: "center",
        },
    })

    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Button
                icon="home"
                mode="contained-tonal"
                onPress={() => console.log("Pressed")}
            >
                Press me
            </Button>
        </View>
    )
}

export default HomeScreen
