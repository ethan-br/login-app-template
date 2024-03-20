import { StyleSheet, View } from "react-native"
import { Button, TextInput, useTheme } from "react-native-paper"
import useLoginStore from "../utils/store/loginStore"

const LoginScreen = ({ navigation }: { navigation: any }) => {
    const { email, password, setEmail, setPassword } = useLoginStore()
    const theme = useTheme()

    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            backgroundColor: theme.colors.background,
            alignItems: "center",
            // justifyContent: "center",
        },
        inputBox: {
            height: "50%",
            width: "90%",
        },
        button: {
            marginTop: 8,
            minWidth: 150,
            width: "30%",
        },
    })

    return (
        <View style={styles.container}>
            <View style={styles.inputBox}>
                <TextInput
                    mode="outlined"
                    label="Email"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    mode="outlined"
                    label="Password"
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                />
                <Button
                    mode="contained-tonal"
                    style={styles.button}
                    onPress={() => navigation.navigate("Home")}
                >
                    Login
                </Button>
            </View>
        </View>
    )
}

export default LoginScreen
