/* tslint:disable */
import initStoryshots, { imageSnapshot } from '@storybook/addon-storyshots';

jest.setTimeout(10000);
jest.mock('../../utility/calculateRandomPercentage', () => () => 70);

const getMatchOptions = () => {
    return {
        failureThreshold: 0,
        failureThresholdType: 'percent',
    };
};

// @ts-ignore
initStoryshots({
    configPath: './config/storybook/test',
    suite: 'Visual regression',
    test: imageSnapshot({
        getMatchOptions,
        updatePassedSnapshot: true,
        fullPage: false,
        storybookUrl: `file://${__dirname}/../../../.test`,
    }),
});
