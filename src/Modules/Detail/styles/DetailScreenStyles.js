import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../../Constants';

export default StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: Colors.toRGBA(Colors.lightBrown, 30),
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: Metrics.baseMargin * 2,
    },
    image: {
        width: 120,
        aspectRatio: 0.5,
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: Metrics.semiMargin,
    },
    name: {
        fontSize: Fonts.size(20),
        fontWeight: 'bold',
    },
    job: {
        fontSize: Fonts.size(16),
    },
    descriptionContainer: {},
    description: {
        fontSize: Fonts.size(14),
    },
});
