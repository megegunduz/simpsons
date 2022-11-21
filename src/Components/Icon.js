import React from 'react';
import { TouchableOpacity } from 'react-native';

/**
 * @param {object} props
 * @param {any} props.svg
 * @param {{width: number, height: number, color: import('react-native').ColorValue}} [props.style]
 * @param {import('react-native').ViewStyle} [props.containerStyle]
 * @param {number} [props.width]
 * @param {number} [props.height]
 * @param {() => void} [props.onPress]
 */
const Icon = props => {
    const { svg: Svg, style, containerStyle, width, height, onPress } = props;

    return (
        <TouchableOpacity
            style={containerStyle}
            onPress={onPress}
            disabled={!onPress}
            activeOpacity={0.4}
            testID={'icon-touchable'}
        >
            <Svg style={style} width={width} height={height} />
        </TouchableOpacity>
    );
};

export default Icon;
