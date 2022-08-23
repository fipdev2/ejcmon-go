import * as React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { BackgroundCadastro, BotaoDeEntrar, ChamadaLogin, Formulario, LogoApp, Rodape, WelcomeText, InputForm, Button, TextButton } from './style';

export default function Cadastro() {
    
    const {control, handleSubmit} = useForm();
    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <BackgroundCadastro>

            <WelcomeText>Seja bem-vindo a</WelcomeText>
            <LogoApp source={require('../../assets/ejcmongo_logo.svg')}></LogoApp>

            <Formulario>
                <Controller
                    control={control}
                    name='nome'
                    render={({field:{onBlur, onChange, value}}) => (
                        <InputForm
                            onBlur={onBlur}
                            onChangeText={(value:any) => onChange(value)}
                            value={value}
                            placeholder='Nome'
                        />
                    )}
                    defaultValue=''
                />
                <Controller
                    control={control}
                    name='email'
                    render={({field:{onBlur, onChange, value}}) => (
                        <InputForm
                            onBlur={onBlur}
                            onChangeText={(value:any) => onChange(value)}
                            value={value}
                            placeholder='Email'
                        />
                    )}
                    defaultValue=''
                />
                <Controller
                    control={control}
                    name='cpf'
                    render={({field:{onBlur, onChange, value}}) => (
                        <InputForm
                            onBlur={onBlur}
                            onChangeText={(value:any) => onChange(value)}
                            value={value}
                            placeholder='CPF'
                        />
                    )}
                    defaultValue=''
                />
                <Controller
                    control={control}
                    name='senha'
                    render={({field:{onBlur, onChange, value}}) => (
                        <InputForm
                            onBlur={onBlur}
                            onChangeText={(value:any) => onChange(value)}
                            value={value}
                            placeholder='Senha'
                        />
                    )}
                    defaultValue=''
                />
                <Controller
                    control={control}
                    name='confirmarSenha'
                    render={({field:{onBlur, onChange, value}}) => (
                        <InputForm
                            onBlur={onBlur}
                            onChangeText={(value:any) => onChange(value)}
                            value={value}
                            placeholder='Confirme sua senha'
                        />
                    )}
                    defaultValue=''
                />
            </Formulario>

            <Button onPress={handleSubmit(onSubmit)}>
                <TextButton>Cadastrar-se</TextButton>
            </Button>

            <Rodape>    
                <ChamadaLogin>Já possui uma conta?</ChamadaLogin>
                <BotaoDeEntrar>Login</BotaoDeEntrar>
            </Rodape>
        </BackgroundCadastro>
    )

}