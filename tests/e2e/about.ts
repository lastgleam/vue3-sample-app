import { Selector } from 'testcafe';

fixture('Home').page('http://localhost:8080/');

test('About', async (t: TestController) => {
  await t
    .click(Selector('a').withText('About'))
    .expect(Selector('div > h1').innerText)
    .eql('This is an about page');
});
