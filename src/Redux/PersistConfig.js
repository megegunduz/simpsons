import AsyncStorage from '@react-native-async-storage/async-storage';
import { HomeSlice } from '../Modules/Home';

export default {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        HomeSlice.name, //
    ],
};
