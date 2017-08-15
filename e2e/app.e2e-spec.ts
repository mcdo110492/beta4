import { Beta4Page } from './app.po';

describe('beta4 App', () => {
  let page: Beta4Page;

  beforeEach(() => {
    page = new Beta4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
