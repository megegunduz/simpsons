import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Lottie from 'lottie-react-native';

import { InitialLoadingSelectors, InitialLoadingSlice } from '..';
import { ScreenNames } from '../../../Constants';
import gifs from '../../../Assets/Gifs';

import styles from '../styles/InitialLoadingScreenStyles';

const InitialLoadingScreen = props => {
    const dispatch = useDispatch();
    const awaitedJobsCount = useSelector(InitialLoadingSelectors.awaitedJobsCount);
    const navigation = useNavigation();

    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    useEffect(() => {
        dispatch(InitialLoadingSlice.actions.runInitialJobs());
    }, [dispatch]);

    useEffect(() => {
        if (awaitedJobsCount === 0 && isAnimationComplete) {
            navigation.replace(ScreenNames.HOME);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, awaitedJobsCount, isAnimationComplete]);

    return (
        <View style={styles.container}>
            <Lottie
                source={gifs.splash()}
                autoPlay
                loop={false}
                speed={0.8}
                onAnimationFinish={() => setIsAnimationComplete(true)}
            />
        </View>
    );
};

export default InitialLoadingScreen;
