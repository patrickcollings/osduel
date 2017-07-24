import { OsduelPage } from './app.po';

describe('osduel App', () => {
  let page: OsduelPage;

  beforeEach(() => {
    page = new OsduelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
