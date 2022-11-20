import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../Modules/Home';
import { DetailScreen } from '../Modules/Detail';
import { AddScreen } from '../Modules/Add';

import Header from './Components/Header';

import { ScreenNames } from '../Constants';

const AppStack = createStackNavigator();

const AppNavigation = props => {
    return (
        <AppStack.Navigator
            screenOptions={{
                header: headerProps => <Header {...headerProps} />,
            }}
        >
            <AppStack.Screen
                name={ScreenNames.HOME}
                component={HomeScreen}
                options={{
                    title: 'Simpsons',
                }}
            />
            <AppStack.Screen
                name={ScreenNames.DETAIL}
                component={DetailScreen}
                options={{
                    title: 'Character Detail',
                }}
            />
            <AppStack.Screen
                name={ScreenNames.ADD}
                component={AddScreen}
                options={{
                    title: 'Add Character',
                }}
            />
        </AppStack.Navigator>
    );
};

export default AppNavigation;
