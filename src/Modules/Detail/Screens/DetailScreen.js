import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import styles from '../styles/DetailScreenStyles';

/**
 * @typedef {object} DetailRouteParams
 * @property {import('../../../Types/Character').Character} character
 */

const DetailScreen = props => {
    /** @type {DetailRouteParams} */
    const {
        character: { avatar, description, id, job, name, ranking },
    } = props.route.params;

    return (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.container}
        >
            <Image
                source={{ uri: avatar }}
                style={styles.image}
                resizeMode={'contain'}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.job}>{job}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{description}</Text>
            </View>
        </ScrollView>
    );
};

export default DetailScreen;
