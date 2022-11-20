import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Constants';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Metrics.semiMargin,
        height: Metrics.headerHeight,
        backgroundColor: Colors.darkBlue,
    },
    sideContainer: {
        width: Metrics.measure(50),
    },
    backIcon: {
        color: Colors.white,
    },
    titleContainer: {
        flexGrow: 1,
        alignItems: 'center',
    },
    title: {
        color: Colors.white,
        letterSpacing: 0.5,
    },
});
