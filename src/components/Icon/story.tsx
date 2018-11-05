import { color } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from '.';
import trbl from '../../utility/trbl';
import Box from '../Box';
import Text from '../Text';
import { LargeIcons, MediumIcons, SmallIcons } from './types';

/* tslint:disable */
const smallIconKeys = Object.keys(SmallIcons).filter(key => SmallIcons[key as any].match('<svg'));
const mediumIconKeys = Object.keys(MediumIcons).filter(key => MediumIcons[key as any].match('<svg'));
const largeIconKeys = Object.keys(LargeIcons).filter(key => LargeIcons[key as any].match('<svg'));
/* tslint:enable */

storiesOf('Primitives/Icon', module)
    .add('Small icons', () => {
        const iconColor = color('fill', '#000');

        /* tslint:disable */
        return (
            <Box wrap margin={trbl(12)}>
                {smallIconKeys.map(icon => (
                    <Box basis={'33.333333%'} alignItems={'center'} margin={trbl(12, 0)} key={icon}>
                        <Icon color={iconColor} size="small" icon={icon as any} />
                        <Box margin={trbl(0, 0, 0, 24)}>
                            <Text>{icon}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        );
        /* tslint:enable */
    })
    .add('Medium icons', () => {
        const iconColor = color('fill', '#000');

        /* tslint:disable */
        return (
            <Box wrap margin={trbl(24)}>
                {mediumIconKeys.map(icon => (
                    <Box basis={'33.333333%'} alignItems={'center'} margin={trbl(12, 0)} key={icon}>
                        <Icon color={iconColor} size="medium" icon={icon as any} />
                        <Box margin={trbl(0, 0, 0, 24)}>
                            <Text>{icon}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        );
        /* tslint:enable */
    })
    .add('Large icons', () => {
        const iconColor = color('fill', '#000');

        /* tslint:disable */
        return (
            <Box wrap margin={trbl(24)}>
                {largeIconKeys.map(icon => (
                    <Box basis={'50%'} alignItems={'center'} margin={trbl(12, 0)} key={icon}>
                        <Icon color={iconColor} size="large" icon={icon as any} />
                        <Box margin={trbl(0, 0, 0, 24)}>
                            <Text>{icon}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        );
        /* tslint:enable */
    });
