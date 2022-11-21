import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../../Constants';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.toRGBA(Colors.lightBrown, 30),
    },
    scrollView: {
        paddingHorizontal: Metrics.baseMargin,
        paddingTop: Metrics.baseMargin,
    },
    formContainer: {
        paddingBottom: Metrics.baseMargin,
    },
    inputContainer: {
        marginBottom: Metrics.semiMargin,
    },
    inputLabel: {
        color: Colors.brown,
    },
    inputValidation: {
        color: Colors.red,
    },
    addButton: {
        backgroundColor: Colors.darkBlue,
        margin: Metrics.baseMargin,
        padding: Metrics.baseMargin,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Metrics.measure(10),
    },
    addButtonText: {
        color: Colors.white,
    },
    successModal: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContentContainer: {
        backgroundColor: Colors.white,
        borderWidth: 2,
        borderColor: Colors.darkBlue,
        borderRadius: Metrics.measure(10),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        padding: Metrics.baseMargin * 2,
    },
    modalTitleContainer: {},
    modalTitle: {
        fontSize: Fonts.size(26),
        color: Colors.darkBlue,
        textAlign: 'center',
        fontWeight: '500',
    },
    modalButton: {
        padding: Metrics.semiMargin,
        backgroundColor: Colors.toRGBA(Colors.lightBrown, 40),
        borderRadius: Metrics.measure(10),
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop: Metrics.section,
        fontWeight: '400',
    },
    modalButtonText: {
        fontSize: Fonts.size(18),
        color: Colors.darkBlue,
    },
});

const getInputStyle = multiline => [
    styles.input,
    {
        height: multiline ? Metrics.measure(150) : null,
    },
];

const formColors = {
    border: Colors.brown,
    borderFocused: Colors.darkBlue,
    borderInvalid: Colors.red,
    cursor: Colors.brown,
    backgroundColor: Colors.toRGBA(Colors.white, 30),
    text: Colors.brown,
    placeholder: Colors.gray,
};

export default {
    ...styles,
    formColors,
    getInputStyle,
};
