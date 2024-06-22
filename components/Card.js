import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function Card( props ) {
  return (
    <View style={styles.card}>
        { props.children }
    </View>
  );
}

// The styles for the Card component, will effect all cards
const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',//white
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',//black
        shadowOpacity: 0.3,
        width: screenWidth - 20,
        height: 50,
    }
});