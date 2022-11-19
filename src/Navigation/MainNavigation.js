import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation';

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <AppNavigation />
        </NavigationContainer>
    );
};

export default MainNavigation;
