import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../Constants';

const icon = {
    width: Metrics.measure(30),
    height: Metrics.measure(30),
};

export default StyleSheet.create({
    container: {},
    touchable: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ranking: {
        marginRight: Metrics.semiMargin,
    },
    image: {
        width: Metrics.measure(50),
        aspectRatio: 0.5,
        marginRight: Metrics.semiMargin,
    },
    name: {
        flexGrow: 1,
        flexShrink: 1,
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconContainer: {
        padding: Metrics.baseMargin * 0.5,
    },
    upIcon: {
        ...icon,
        color: Colors.green,
    },
    downIcon: {
        ...icon,
        color: Colors.red,
    },
    deleteIcon: {
        ...icon,
        color: Colors.darkBlue,
    },
});
