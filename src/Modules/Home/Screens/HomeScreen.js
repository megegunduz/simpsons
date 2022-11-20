import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HomeSelectors, HomeSlice } from '../Redux/HomeRedux';

import CharacterItem from '../Components/CharacterItem';

import styles from '../styles/HomeScreenStyles';

const HomeScreen = props => {
    const dispatch = useDispatch();
    const characters = useSelector(HomeSelectors.characters);

    useEffect(() => {
        (!characters || characters.length === 0) &&
            dispatch(HomeSlice.actions.fetchCharacters());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
            />
        </View>
    );
};

export default HomeScreen;
