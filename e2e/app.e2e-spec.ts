import { NgrxTodosPage } from './app.po';

describe('ngrx-todos App', () => {
  let page: NgrxTodosPage;

  beforeEach(() => {
    page = new NgrxTodosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
