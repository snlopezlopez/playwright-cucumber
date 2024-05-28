[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![Cucumber](https://img.shields.io/badge/Documantation-Cucumber-23d96c.svg?logo=cucumber)](https://cucumber.io/)
[![GitHub](https://img.shields.io/badge/Documantation-GitHub-23d96c.svg?logo=github)](https://github.com/adamcegielka/playwright-cucumber-bdd-typescript)




# Playwright with Typescript - Cucumber - BDD
## template-e2e-playwright-test
**Playwright** is used in Digital Cepsa for E2E testing.
## Project structure
![structure cucumber.jpg](..%2F..%2FUsers%2Fsantiagolopez%2FDownloads%2Fstructure%20cucumber.jpg)

helper/inits.ts--> create folder test-result

helper/reports.ts--> report configuration. Configure metadata

hooks/hooks.ts--> Configure Before and After test. headless (activate ui mode)

hooks/pageFixture.ts--> Configure Fixture mode in playwright)

test/features/*.features--> Features)

test/steps/*.ts--> Playwright tests)

## Installation
https://playwright.dev/docs/intro#installing-playwright <br>

- Install Playwright
- Install Cucumber plugin
- Install dependencies: 
  - `npm i @cucumber/cucumber -D`
  - `npm i ts-node -D`
- Create folder `src/test/features` and `src/test/steps`
- Configuration `npm init @eslint/config`
- Add prettier :
```json
"extends": [
    "prettier"
],
```
- Install Prettier `npm install --save-dev --save-exact prettier`
- Add file `.prettierignore` :
```
package-lock.json
README.md
```
- Add Prettier rule `.prettierrc.json` :
```json
{
    "singleQuote": true
}
```
- Run formatting with Prettier `npx prettier --write .`
- Linking Prettier with ESLint `npm install --save-dev eslint-config-prettier`

## Tutorials

- [Playwright Cucumber (BDD) - Typescript](https://www.udemy.com/course/playwright-cucumber-bdd-typescript)
- [Automated Software Testing with Playwright](https://www.udemy.com/course/automated-software-testing-with-playwright)
- [Playwright & Cucumber - Typescript](https://www.youtube.com/watch?v=bfWXNLqKlvA&list=PL699Xf-_ilW6KgK-S1l9ynOnBGiZl2Bsk)
- [Cucumber and Playwright](https://www.youtube.com/watch?v=PUVFmhYJNJA&t=1314s)
- [Cucumber JS - YT](https://www.youtube.com/watch?v=vT4WHsZh6AU&list=PLBw1ubD1J1UhScgbM67OAfZqrVQJNzg0b)
- [Cucumber JS - GitHub](https://github.com/cucumber/cucumber-js)
- [Selenium JavaScript Tutorial](https://www.youtube.com/watch?v=BQ-9e13kJ58)



npm install -D @playwright/test@latest