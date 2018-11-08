import React from 'react';
import { mountWithTheme } from '../../../utility/styled/testing';
import Option from '.';

describe('Option', () => {
    it('should render', () => {
        const component = mountWithTheme(
            <Option
                label="test"
                isSelected={true}
                isTargeted={false}
                onClick={(): void => {
                    return undefined;
                }}
                onMouseEnter={(): void => {
                    return undefined;
                }}
            />,
        );

        expect(component).toMatchSnapshot();
    });
});
