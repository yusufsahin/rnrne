import React from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { Button } from '@rneui/base';

const HomeScreen = () => {
    const handlePress = () => Alert.alert('Button Pressed!', 'You tapped the button.');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Screen</Text>
            <Image
                source={{ uri: 'https://placeimg.com/640/480/any' }}
                style={styles.image}
            />
            <Button
                title="Click Me"
                onPress={handlePress}
                color="#841584"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 10,
        marginBottom: 20
    }
});

export default HomeScreen;
