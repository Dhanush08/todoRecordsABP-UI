import { TodosAppABPTemplatePage } from './app.po';

describe('TodosAppABP App', function() {
  let page: TodosAppABPTemplatePage;

  beforeEach(() => {
    page = new TodosAppABPTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
