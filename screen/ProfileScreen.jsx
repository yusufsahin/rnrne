import React from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';

const ProfileScreen = () => {
    const handlePress = () => Alert.alert('Button Pressed!', 'You tapped the button.');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Screen</Text>
          
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

export default ProfileScreen;
