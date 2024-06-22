// A pressable Card component that displays a modal to add an exercise to the workout

import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Card from './Card';

const addExercise = () => {
    alert('Add Exercise');
};

export default function AddCard() {
  return (
    <Pressable onPress={addExercise}>
        <Card>
            <View style={styles.cardContent}>
                <MaterialIcons name="playlist-add" size={24} color="black" />
                <Text style={styles.text}>Add Exercise</Text>
            </View>
        </Card>
    </Pressable>
  );
}


const styles = StyleSheet.create({
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',//center vertically
        justifyContent: 'center',//center horizontally
        height: '100%'//100% of the card height(so center vertically has an effect)
    },
    text: {
        marginLeft: 10,
    }
});