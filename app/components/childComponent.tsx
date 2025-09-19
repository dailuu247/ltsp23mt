import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Props {
    counter: number;
    parentCallback: (text: string) => void;
}

const ChildComponent = ({ counter, parentCallback }: Props) => {
    const [text, onChangeText] = useState("");

    const send = () => {
        parentCallback(text);
        onChangeText(""); // Optional: Clear input after sending
    };

    return (
        <View style={styles.childComponent}>
            <Text style={{
                color: "#000000", fontWeight: "bold",
                fontSize: 40,
            }}>Bộ đếm {counter}</Text>
            <TextInput
                value={text}
                placeholder="Gửi gì cho cha đi!"
                onChangeText={onChangeText}
                style={styles.input}
            />
            <TouchableOpacity
                onPress={send}
                style={{ ...styles.btn, backgroundColor: '#be29ec' }}>
                <Text style={styles.btnText}> Send </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChildComponent;

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF"
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        borderColor: "#0d324d",
        borderWidth: 5
    },
    btn: {
        backgroundColor: '#086972',
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 10,
        borderRadius: 10,
    },
    btnText: {
        fontSize: 18,
        color: '#fff',
    },
    text: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: "bold",
        color: "green"
    },
    childComponent: {
        borderColor: "#ffe4e1",
        borderWidth: 2,
        width: "100%",
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffe4e1"
    },
    input: {
        borderWidth: 1,
        borderColor: "#be29ec",
        borderRadius: 8,
        width: "50%",
        padding: 10,
        marginTop: 10,
    }
});
