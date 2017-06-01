import { PlanitPage } from './app.po';

describe('planit App', function() {
  let page: PlanitPage;

  beforeEach(() => {
    page = new PlanitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
