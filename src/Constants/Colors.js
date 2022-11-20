const ConstantColors = {
    white: '#FFFFFF',
    black: '#000000',
    gray: '#8A9197',
    green: '#46732E',
    red: '#C80813',
    yellow: '#FED439',
    brown: '#91331F',
    lightBrown: '#D2AF81',
    blue: '#709AE1',
    darkBlue: '#197EC0',
    lightBlue: '#71D0F5',
};

/**
 * @param {string} hexCode
 * @param {number} opacity - Opacity between 0 - 100;
 * @returns {string} rgba string
 */
export const toRGBA = (hexCode, opacity) => {
    let hex = hexCode.replace('#', '');

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
};

export const Colors = {
    constantColors: {
        ...ConstantColors,
    },
};

export default {
    ...ConstantColors,
    toRGBA,
};
