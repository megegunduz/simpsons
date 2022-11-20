import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight;
const designWidth = 360;

const measure = designSize => designSize * (width / designWidth);
const fullRadius = Math.round((width + height) / 2);

export default {
    measure,
    width,
    height,
    statusBarHeight,
    fullRadius,
    baseMargin: measure(10),
    semiMargin: measure(15),
    section: measure(50),
    border: measure(1),
    elevation: e => measure(Platform.Version >= 28 ? e : e / 3),
    headerHeight: measure(50),
};
