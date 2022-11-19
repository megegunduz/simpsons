import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HomeSelectors, HomeSlice } from '../Redux/HomeRedux';

import styles from '../styles/HomeScreenStyles';

const HomeScreen = props => {
    const dispatch = useDispatch();
    const characters = useSelector(HomeSelectors.characters);

    useEffect(() => {
        characters.length === 0 &&
            dispatch(HomeSlice.actions.fetchCharacters());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={characters}
                renderItem={({ item, index }) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => item.id}
            />
        </View>
    );
};

export default HomeScreen;
