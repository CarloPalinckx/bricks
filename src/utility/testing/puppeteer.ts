import path from 'path';
import { Response } from 'puppeteer';

const goToComponent = (component: string, story: string): Promise<Response> => {
    return page.goto(`file:${path.join(__dirname, `../../../.out/iframe.html?selectedKind=${component}&selectedStory=${story}`)}`);
}

export {
    goToComponent,
};
