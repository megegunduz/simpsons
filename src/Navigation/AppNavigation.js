import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../Modules/Home';
import { DetailScreen } from '../Modules/Detail';
import { AddScreen } from '../Modules/Add';

import { ScreenNames } from '../Constants';

const AppStack = createStackNavigator();

const AppNavigation = props => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name={ScreenNames.HOME} component={HomeScreen} />
            <AppStack.Screen
                name={ScreenNames.DETAIL}
                component={DetailScreen}
            />
            <AppStack.Screen name={ScreenNames.ADD} component={AddScreen} />
        </AppStack.Navigator>
    );
};

export default AppNavigation;
