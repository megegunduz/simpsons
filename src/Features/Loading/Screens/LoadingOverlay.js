import React from 'react';
import Modal from 'react-native-modal';
import Lottie from 'lottie-react-native';
import { useDispatch, useSelector } from 'react-redux';

import { LoadingSelectors, InitialLoadingSelectors, LoadingSlice } from '..';
import { Colors } from '../../../Constants';
import gifs from '../../../Assets/Gifs';

import styles from '../styles/LoadingOverlayStyles';

const LoadingOverlay = props => {
    const awaitedJobs = useSelector(LoadingSelectors.awaitedJobs);
    const awaitedInitialJobs = useSelector(InitialLoadingSelectors.awaitedJobsCount);
    const dispatch = useDispatch();

    const _onWillShow = () => {
        dispatch(LoadingSlice.actions.setOverlayVisibility(true));
    };

    const _onHide = () => {
        dispatch(LoadingSlice.actions.setOverlayVisibility(false));
    };

    return (
        <Modal
            style={styles.modal}
            isVisible={awaitedJobs.length > 0 && awaitedInitialJobs <= 0}
            backdropOpacity={0.5}
            backdropColor={Colors.darkBlue}
            onModalWillShow={_onWillShow}
            onModalHide={_onHide}
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            animationInTiming={500}
            animationOutTiming={300}
            backdropTransitionInTiming={500}
            backdropTransitionOutTiming={0}
        >
            <Lottie source={gifs.spinner()} style={styles.lottie} autoPlay loop />
        </Modal>
    );
};

export default LoadingOverlay;
