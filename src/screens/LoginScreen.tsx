import { StyleSheet, View } from "react-native";
import { TextInput, Button, useTheme } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";

import ReduxState from "../utils/store/ReduxState";
import { setEmail, setPassword } from "../utils/store/loginSlice";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const email = useSelector((state: ReduxState) => state.login.email);
  const password = useSelector((state: ReduxState) => state.login.password);
  const dispatch = useDispatch();

  const theme = useTheme();

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
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={(text) => dispatch(setEmail(text))}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={(text) => dispatch(setPassword(text))}
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
  );
};

export default LoginScreen;
