import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

type BotaoInfo = {
    value: string;
    onPress?: any;
}

const Botao = ({ value, onPress }: BotaoInfo) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.btn}>
                <Text style={styles.txt}>{value}</Text>
            </View>
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({

    btn: {
        width: 293,
        height: 55,
        backgroundColor: "#FFCD00",
        borderRadius: 10,
        marginLeft: 67,
        alignItems: "center",
        justifyContent: "center"
    },

    txt: {
        fontFamily: "Roboto_700Bold",
        fontSize: 20,
        color: "#2B3151",
        letterSpacing: 1.3,

    },
})
export default Botao;
