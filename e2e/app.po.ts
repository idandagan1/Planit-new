import { browser, element, by } from 'protractor';

export class PlanitPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('view-root h1')).getText();
  }
}
