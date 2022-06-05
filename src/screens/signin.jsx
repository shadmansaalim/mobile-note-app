import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Image, TextInput, Pressable } from 'react-native'
import Button from '../components/Button';
export default function Signin() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Image
                source={require('../../assets/signin.png')}
                style={{ alignSelf: 'center', width: 350, height: 350 }}
            />
            <Text
                style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}
            >Never forget your notes</Text>

            <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
                <TextInput placeholder="Email" style={styles.input} />
                <TextInput placeholder="Password" secureTextEntry style={styles.input} />
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',

                }}
            >
                <Button title={"Login"} customStyles={{ alignSelf: 'center', marginBottom: 60 }} />

                <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>Don't have an account?</Text>
                    <Text style={{ color: 'green', fontWeight: 'bold', marginLeft: 6 }}>Sign Up</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 48,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginBottom: 25
    }
});