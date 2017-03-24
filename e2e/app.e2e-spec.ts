import { AngularTutPage } from './app.po';

describe('angular-tut App', () => {
  let page: AngularTutPage;

  beforeEach(() => {
    page = new AngularTutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
