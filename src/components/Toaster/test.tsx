import React from 'react';
import { mountWithTheme } from '../../utility/_styled/testing';
import Toaster from './';
import Button from '../Button';

describe('Toaster', () => {
    it('should be possible to close the toaster using the close button', () => {
        const clickMock = jest.fn();

        const component = mountWithTheme(
            <Toaster isOpen={true} severity="success" buttonTitle="Bar?" title="Foo" closeAction={clickMock} />,
        );

        const closeButton = component.find(Button.Flat).first();

        closeButton.simulate('click');

        expect(clickMock).toHaveBeenCalled();
    });

    it('should not break when no close is provided', () => {
        const component = mountWithTheme(<Toaster isOpen={true} severity={'info'} title="Foo" />);
        const closeButton = component.find(Button.Flat).first();

        const fn = (): void => {
            closeButton.simulate('click');
        };

        expect(fn).not.toThrow();
    });

    it('should not break when no onClick is provided', () => {
        const component = mountWithTheme(
            <Toaster
                isOpen={true}
                severity={'warning'}
                buttonSeverity={'destructive'}
                buttonTitle="Bar?"
                onClick={undefined}
                title="Foo"
            />,
        );

        const closeButton = component.find(Button).first();

        const fn = (): void => {
            closeButton.simulate('click');
        };

        expect(fn).not.toThrow();
    });

    it('should be possible to trigger the button', () => {
        const clickMock = jest.fn();

        const component = mountWithTheme(
            <Toaster
                isOpen={true}
                severity="warning"
                title="Foo"
                buttonTitle="Bar?"
                closeAction={undefined}
                onClick={clickMock}
            />,
        );

        const closeButton = component.find(Button).first();
        closeButton.simulate('click');

        expect(clickMock).toHaveBeenCalled();
    });
});
