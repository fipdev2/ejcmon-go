import * as React from "react";

import Login from './src/pages/Login';
import Cadastro from "./src/pages/Cadastro";
import AppLoading from "expo-app-loading";
import Login from './src/pages/Login';
import Pokédex from './src/pages/Pokédex';
import Perfil from './src/pages/Perfil';
import EditarPerfil from './src/pages/EditarPerfil';
import MeusPokémons from './src/pages/MeusPokémons';
import Pokédex from './src/pages/Pokédex';

import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from "@expo-google-fonts/roboto";



>>>>>>> d53024f34c97ca66f95b3824070dfdb4cc6121ef

export default function App() {

  let [fontsLoaded, error] = useFonts({ Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black })
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <Cadastro/>

    </>

  );
}