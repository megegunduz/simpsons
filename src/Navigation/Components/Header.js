import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from '../../Components';
import { ScreenNames, Svgs } from '../../Constants';

import styles from '../styles/HeaderStyles';

const Header = props => {
    const isHome = props.route.name === ScreenNames.HOME;
    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            <TouchableOpacity style={styles.sideContainer} onPress={props.navigation.goBack} disabled={isHome}>
                {!isHome && <Icon svg={Svgs.Back} style={styles.backIcon} />}
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.options.title}</Text>
            </View>
            <View style={styles.sideContainer} />
        </SafeAreaView>
    );
};

export default Header;
