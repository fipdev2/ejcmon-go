import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Perfil from '../pages/Perfil';
import EditarPerfil from '../pages/EditarPerfil';
function PerfilStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Perfil'
                component={Perfil}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Editar Perfil'
                component={EditarPerfil} />
        </Stack.Navigator>
    );
}

export default PerfilStack;