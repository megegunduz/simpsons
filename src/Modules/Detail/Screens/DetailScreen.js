import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/DetailScreenStyles';

const DetailScreen = props => {
    return (
        <View style={styles.container}>
            <Text>{'DetailScreen'}</Text>
        </View>
    );
};

export default DetailScreen;
