import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../../Constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.toRGBA(Colors.lightBrown, 30)
    },
    separator: {
        height: Metrics.measure(2),
        marginVertical: 10,
        backgroundColor: Colors.brown,
    },
    flatListContentContainer: {
        padding: Metrics.semiMargin,
    }
});
