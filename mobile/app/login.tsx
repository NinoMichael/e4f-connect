import { useState } from "react";
import { View, Text } from "react-native";
import { Button, Provider as PaperProvider } from "react-native-paper";

export default function LoginScreen() {
    return (
        <PaperProvider>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Connexion</Text>
            </View>
        </PaperProvider>
    );
}
