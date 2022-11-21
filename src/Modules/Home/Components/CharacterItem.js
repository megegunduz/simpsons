import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { HomeSlice } from '../Redux/HomeRedux';
import { Icon } from '../../../Components';
import { ScreenNames, Svgs } from '../../../Constants';

import styles from '../styles/CharacterItemStyles';

/**
 *
 * @param {object} props
 * @param {import('../../../Types/Character').Character} props.character
 * @param {number} props.index
 * @returns {React.Component}
 */
const CharacterItem = props => {
    const { character } = props;

    const { avatar, name, ranking } = character;

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const _onPress_Navigate = () => {
        navigation.navigate(ScreenNames.DETAIL, {
            character,
        });
    };

    const _onPress_Delete = () => {
        dispatch(HomeSlice.actions.deleteCharacter({ character }));
    };

    const _onPress_Up = () => {
        dispatch(
            HomeSlice.actions.updateRanking({
                character,
                updateType: 'increase',
            }),
        );
    };

    const _onPress_Down = () => {
        dispatch(
            HomeSlice.actions.updateRanking({
                character,
                updateType: 'decrease',
            }),
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.touchable}
                onPress={_onPress_Navigate}
            >
                <Text style={styles.ranking}>{ranking}</Text>
                <Image
                    source={{ uri: avatar }}
                    style={styles.image}
                    resizeMode={'contain'}
                />
                <Text style={styles.name} numberOfLines={2}>
                    {name}
                </Text>
                <View style={styles.iconsContainer}>
                    <Icon
                        svg={Svgs.Up}
                        style={styles.upIcon}
                        containerStyle={styles.iconContainer}
                        onPress={_onPress_Up}
                    />
                    <Icon
                        svg={Svgs.Down}
                        style={styles.downIcon}
                        containerStyle={styles.iconContainer}
                        onPress={_onPress_Down}
                    />
                    <Icon
                        svg={Svgs.Trash}
                        style={styles.deleteIcon}
                        containerStyle={styles.iconContainer}
                        onPress={_onPress_Delete}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CharacterItem;
