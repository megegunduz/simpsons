import { StyleSheet } from 'react-native';
import { Metrics } from '../../../Constants';

export default StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    lottie: {
        width: Metrics.measure(100),
        height: Metrics.measure(100),
    },
});
