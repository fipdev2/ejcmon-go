import * as React from 'react';
//navegação em tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//importação das telas
import Pokédex from '../Pokédex';
import MeusPokémons from '../MeusPokémons';
import { Image } from 'react-native';
import PerfilStack from './PerfilStack';
//estilizações globais
import { globalStyles } from '../../global/globalStyles';
function BottomTabs() {
    const Tab = createBottomTabNavigator();
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: globalStyles.colors.primaryPurple,
                    tabBarInactiveTintColor: 'red',
                    tabBarShowLabel: true,
                    tabBarLabelStyle: { fontSize: 20 },
                    tabBarStyle: { backgroundColor: '#FAFAFA', height: 95 }
                }}>
                <Tab.Screen
                    name='Pokédex'
                    component={Pokédex}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused = true }: any) => {
                            let icon = focused ? 'ActivePokedex' : 'OutlinePokedex'
                            return <Image source={require(`../../assets/${icon}.png`)} style={{ height: 60, width: 60 }} />
                        }
                    }} />
                <Tab.Screen
                    name='Meus Pokémons'
                    component={MeusPokémons}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused = true }: any) => {
                            let icon = focused ? 'ActivePokeball' : 'OutlinePokeball'
                            return <Image source={require(`../../assets/${icon}.png`)} style={{ height: 60, width: 60 }} />
                        }
                    }} />
                <Tab.Screen
                    name='Perfil'
                    component={PerfilStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused = true }: any) => {
                            let icon = focused ? 'ActiveUser' : 'OutlineUser'
                            return <Image source={require(`../../assets/${icon}.png`)} style={{ height: 60, width: 60 }} />
                        }
                    }} 
                    />
            </Tab.Navigator>
        </>
    );
}

export default BottomTabs;