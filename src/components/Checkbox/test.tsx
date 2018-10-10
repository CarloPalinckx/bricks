import React from 'react';
import Checkbox from '.';
import { mosTheme } from '../../themes/MosTheme';
import { mountWithTheme } from '../../utility/testing/styled_components';
import { StyledCheckbox, StyledCheckboxSkin } from './style';

describe('Checkbox', () => {
    it('should have theme background when checked', () => {
        const checkbox = mountWithTheme(
            <Checkbox onChange={(): void => undefined} name="demo" checked={true} value="bar" />,
        );

        /* tslint:disable */
        (expect(checkbox.find(StyledCheckboxSkin)) as any).toHaveStyleRule(
            'background-color',
            mosTheme.Checkbox.checked.backgroundColor,
        );
        /* tslint:enable */
    });

    it('should show a box-shadow on focus', () => {
        const checkbox = mountWithTheme(
            <Checkbox onChange={(): void => undefined} name="demo" checked={false} value="bar" />,
        );

        checkbox.find(StyledCheckbox).simulate('focus');

        /* tslint:disable */
        (expect(checkbox.find(StyledCheckboxSkin)) as any).toHaveStyleRule(
            'box-shadow',
            mosTheme.Checkbox.focus.boxShadow,
        );
        /* tslint:enable */
    });

    it('should be able to change checked value', () => {
        let mockEvent;

        const mockHandler = jest.fn(({ event }) => {
            mockEvent = event;
        });

        const checkbox = mountWithTheme(<Checkbox onChange={mockHandler} name="demo" checked={false} value="bar" />);

        checkbox.simulate('click');

        expect(mockHandler).toHaveBeenCalledWith({
            checked: true,
            event: mockEvent,
        });
    });
});
