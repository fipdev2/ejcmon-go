import * as React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import InputTexto from "../../components/InputTexto";
import Botao from "../../components/Botao";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { TextError, InputForm } from "../Cadastro/style";
import trainerServices from '../../services/trainerServices';
import { AuthContext } from '../../contexts/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface loginData {
  email: string;
  password: string;
}

// Usei @expo-google-fonts para conseguir usar Roboto na página
const Login = () => {
  const navigation = useNavigation();
  const Auth = React.useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: "onTouched" });

  const onSubmit = (data: loginData) => {
    trainerServices.login(data).then(response => {
      Auth.setToken(response?.data.token);
      AsyncStorage.setItem('token', response?.data.token);
      navigation.navigate('Tabs' as never);
    })
  };

  let [fontsLoaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.fundo}
        source={require("../../assets/background.svg")}
      >
        <Text style={styles.texto1}> Seja bem-vindo a</Text>

        <Image
          style={styles.logo}
          source={require("../../assets/ejcmongo_logo.svg")}
        />

        <View style={styles.dados}>
          <View>
            <Controller
              control={control}
              name="email"
              defaultValue=""
              render={({ field: { onBlur, onChange, value } }) => (
                <InputForm
                  onBlur={onBlur}
                  onChangeText={(value: any) => onChange(value)}
                  value={value}
                  placeholder="Email"
                  maxLength={256}
                />
              )}
              rules={{
                required: "Email é obrigatório",
                pattern: {
                  value: /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Formato de email inválido",
                },
              }}
            />
            {errors.email && <TextError>{errors.email.message}</TextError>}
          </View>
          <View>
            <Controller
              control={control}
              name="password"
              defaultValue=""
              render={({ field: { onBlur, onChange, value } }) => (
                <InputForm
                  secureTextEntry={true}
                  onBlur={onBlur}
                  onChangeText={(value: any) => onChange(value)}
                  value={value}
                  placeholder="Senha"
                  maxLength={18}
                />
              )}
              rules={{
                required: "Senha é obrigatória",
                minLength: {
                  value: 6,
                  message: "Senha muito curta",
                },
              }}
            />
            {errors.password && (
              <TextError>{errors.password.message}</TextError>
            )}
          </View>
        </View>

        <Botao value={"Entrar"} onPress={handleSubmit(onSubmit)} />

        <View style={styles.below}>
          <Text style={styles.under1}>Ainda não possui conta?</Text>
          <Text
            style={styles.under2}
            onPress={() => navigation.navigate("Cadastro" as never)}
          >
            Registre-se
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

//Estilizei com Stylesheets para ser figurativo e lúdico durante a aula e deixar styled-components para a próx. aula

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },

  fundo: {
    width: "428px",
    height: "926px",
  },

  texto1: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    color: "white",
    marginTop: "64px",
    marginLeft: "57px",
  },

  logo: {
    width: "327px",
    height: "218px",
    marginTop: "6px",
    marginLeft: "55px",
  },

  dados: {
    height: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  below: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },

  under1: {
    color: "white",
    fontFamily: "Roboto_700Bold",
  },

  under2: {
    color: "#FFCD00",
    fontFamily: "Roboto_700Bold",
    marginLeft: 3,
  },
});

export default Login;
