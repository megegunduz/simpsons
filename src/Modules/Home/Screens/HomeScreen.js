import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HomeSelectors, HomeSlice } from '../Redux/HomeRedux';

import CharacterItem from '../Components/CharacterItem';

import styles from '../styles/HomeScreenStyles';
import { Icon } from '../../../Components';
import { ScreenNames, Svgs } from '../../../Constants';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = props => {
    const dispatch = useDispatch();
    const characters = useSelector(HomeSelectors.characters);

    const navigation = useNavigation();

    useEffect(() => {
        (!characters || characters.length === 0) &&
            dispatch(HomeSlice.actions.fetchCharacters());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const _onPress_Add = () => {
        navigation.navigate(ScreenNames.ADD);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={characters}
                renderItem={({ item, index }) => (
                    <CharacterItem character={item} index={index} />
                )}
                keyExtractor={(item, index) => item?.id}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                contentContainerStyle={styles.flatListContentContainer}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => (
                    <View style={styles.flatListFooter} />
                )}
            />
            <Icon
                svg={Svgs.Plus}
                onPress={_onPress_Add}
                containerStyle={styles.iconContainer}
                style={styles.icon}
            />
        </View>
    );
};

export default HomeScreen;
