import { DatabidingInputOutputPage } from './app.po';

describe('databiding-input-output App', () => {
  let page: DatabidingInputOutputPage;

  beforeEach(() => {
    page = new DatabidingInputOutputPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
