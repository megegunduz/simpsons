import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../Constants';

const iconSize = Metrics.measure(40);
const buttonSize = Metrics.baseMargin + iconSize;
const buttonMargin= Metrics.semiMargin;
const listFooterHeight = buttonSize + buttonMargin;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.toRGBA(Colors.lightBrown, 30),
    },
    separator: {
        height: Metrics.measure(2),
        marginVertical: Metrics.baseMargin,
        backgroundColor: Colors.brown,
    },
    flatListContentContainer: {
        padding: Metrics.semiMargin,
    },
    flatListFooter: {
        height: listFooterHeight,
    },
    iconContainer: {
        backgroundColor: Colors.darkBlue,
        position: 'absolute',
        alignSelf: 'center',
        bottom: Metrics.semiMargin,
        borderRadius: Metrics.fullRadius,
        padding: Metrics.baseMargin * 0.5,
    },
    icon: {
        width: iconSize,
        height: iconSize,
        color: Colors.white,
    }
});
