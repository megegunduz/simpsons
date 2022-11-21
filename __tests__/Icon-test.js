import React from 'react';
import { Icon } from '../src/Components';
import { Svgs } from '../src/Constants';
import renderer from 'react-test-renderer';
import { fireEvent, waitFor, render } from '@testing-library/react-native';

describe('Icon', () => {
    it('renders correctly', () => {
        expect(
            renderer.create(<Icon svg={Svgs.Plus} onPress={() => {}} />),
        ).toMatchSnapshot();
    });

    it('onPress functionality', async () => {
        const onPressEvent = jest.fn();
        onPressEvent.mockReturnValue('Pressed');
        const { getByTestId } = render(
            <Icon svg={Svgs.Trash} onPress={onPressEvent} />,
        );
        await waitFor(() => {
            expect(getByTestId('icon-touchable')).toBeTruthy();
        });
        fireEvent.press(getByTestId('icon-touchable'));
        expect(onPressEvent).toBeCalled();
    });
});

describe('Icon disabled', () => {
    it('should be disabled when onPress prop is not passed', () => {
        expect(renderer.create(<Icon svg={Svgs.Up} />)).toMatchSnapshot();
    });
});
