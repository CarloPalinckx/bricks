import React from 'react';
import Renderer from 'react-test-renderer';
import MosTheme from '../../themes/MosTheme';
import ErrorBoundary from './ErrorBoundary.template';

beforeEach(() => {
    /*
     * this mutes both the regular console aswell as the virtual console of jsdom
     * because jest doesn't swallow jsdom errors in its console and react
     * doesn't swallow caught errors even if they are caught.
     */

    /* tslint:disable */
    (global as any).console = {
        error: jest.fn(),
    };

    jest.spyOn((window as any)._virtualConsole, 'emit').mockImplementation(() => false);
    /* tslint:enable */
});

describe('ErrorBoundary', () => {
    it('should catch an error and report it', () => {
        const mockReport = jest.fn();

        const ThrowingComponent = ():JSX.Element => {
            throw new Error('Mock Error');
        };

        const boundary = Renderer.create(
            <MosTheme>
                <ErrorBoundary
                    message="This has an error"
                    reportError={mockReport}
                >
                    <ThrowingComponent />
                </ErrorBoundary>
            </MosTheme>
        ).toJSON();

        expect(boundary).toMatchSnapshot();
        expect(mockReport).toHaveBeenCalled();
    });
});