import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from "@expo-google-fonts/roboto";
import React from "react";
import AppLoading from "expo-app-loading";
import Login from './src/pages/Login';
import Pokédex from './src/pages/Pokédex';
import MeusPokémons from './src/pages/MeusPokémons';
import Perfil from './src/pages/Perfil';
import EditarPerfil from "./src/pages/EditarPerfil";

export default function App() {

  let [fontsLoaded, error] = useFonts({ Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black })
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <Login />
    </>

  );
}