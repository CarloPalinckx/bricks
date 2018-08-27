import React from 'react';
import { shallowWithTheme } from '../../utility/styled/testing';
import Icon from '../../components/Icon';
import StyledIcon from '../../components/Icon/style';

describe('Icon', () => {
    it('should have a custom fill', () => {
        const color = '#fff';
        const icon = shallowWithTheme(<Icon color={color} size="large" icon="desert" />);

        /* tslint:disable */
        (expect(icon.find(StyledIcon)) as any).toHaveStyleRule('fill', color, {
            modifier: 'svg',
        });
        /* tslint:enable */
    });

    it('should have the correct size', () => {
        const icon = shallowWithTheme(<Icon size="small" icon="checkmark" />);

        /* tslint:disable */
        (expect(icon.find(StyledIcon)) as any).toHaveStyleRule('height', '12px');
        (expect(icon.find(StyledIcon)) as any).toHaveStyleRule('width', '12px');
        /* tslint:enable */
    });
});
