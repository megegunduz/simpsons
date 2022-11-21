import { StyleSheet } from 'react-native';
import { Colors } from '../../../Constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.toRGBA(Colors.yellow, 50),
        alignItems: 'center',
        justifyContent: 'center',
    },
});
