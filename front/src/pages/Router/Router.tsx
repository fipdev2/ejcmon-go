import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';
import Cadastro from '../Cadastro';
import BottomTabs from './BottomTabs';

function Router() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='Login'
                        component={Login}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name='Cadastro'
                        component={Cadastro}
                        options={{
                            headerShown: false
                        }} />
                    <Stack.Screen
                        name='BottomTabs'
                        component={BottomTabs}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>);
}

export default Router;
