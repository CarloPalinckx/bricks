import { configure, addDecorator } from '@storybook/react';
import themeDecorator from '../decorators/themeDecorator';
import { withKnobs } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from 'react-storybook-addon-props-combinations';

setDefaults({});

setOptions({
    name: 'Bricks',
    url: '#',
    addonPanelInRight: true,
});

addDecorator(themeDecorator);
addDecorator(withKnobs);

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

function loadStories() {
    requireAll(require.context('../../../src/__tests__/visual', true, /tsx$/));
}

configure(loadStories, module);
