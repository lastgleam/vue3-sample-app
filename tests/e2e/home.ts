import { Selector } from 'testcafe';

fixture('Home').page('http://localhost:8080/');

test('Home', async (t: TestController) => {
  await t
    .expect(Selector('div.hello > h1').innerText)
    .eql('Welcome to Your Vue.js + TypeScript App');
});
