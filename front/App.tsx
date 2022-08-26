import * as React from "react";
import AppLoading from "expo-app-loading";


import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black } from "@expo-google-fonts/roboto";
import Router from "./src/Router";
import Cadastro from "./src/pages/Cadastro";



export default function App() {

  let [fontsLoaded, error] = useFonts({ Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black })
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <Router />
    </>

  );
}