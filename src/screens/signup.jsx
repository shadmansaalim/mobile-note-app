import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Image, TextInput, Pressable } from 'react-native'
import Button from '../components/Button';
import Input from '../components/Input';

export default function Signup() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingHorizontal: 16, paddingVertical: 25 }}>
                <Input placeholder="Email Address" />
                <Input placeholder="Password" secureTextEntry />
                <Input placeholder="Full Name" />
                <Input placeholder="Age" />
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',

                }}
            >
                <Button title={"Sign Up"} customStyles={{ alignSelf: 'center', marginBottom: 60 }} />

                <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>Already have an account?</Text>
                    <Text style={{ color: 'green', fontWeight: 'bold', marginLeft: 6 }}>Sign In</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
