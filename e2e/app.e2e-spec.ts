import { Homework2Page } from './app.po';

describe('homework2 App', () => {
  let page: Homework2Page;

  beforeEach(() => {
    page = new Homework2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
