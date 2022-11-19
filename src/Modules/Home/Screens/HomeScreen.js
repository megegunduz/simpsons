import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/HomeScreenStyles';

const HomeScreen = props => {
    return (
        <View style={styles.container}>
            <Text>{'HomeScreen'}</Text>
        </View>
    );
};

export default HomeScreen;
