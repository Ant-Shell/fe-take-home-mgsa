<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Ant-Shell/fe-take-home-mgsa">
    <img width="350" alt="MGSA_Logo" src="https://github.com/Ant-Shell/fe-take-home-mgsa/assets/100455148/6a5a3247-69bf-48f7-918f-1e034adede58">
  </a>

<!-- HEADER -->
  <h3 align="center">Mock Grocery Store App</h3>
  <p align="center">
    A mock grocery store application, for a take home challenge
    <br />
    <a href="https://github.com/Ant-Shell/fe-take-home-mgsa"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://fe-take-home-mgsa.vercel.app/"><strong>Check it out! »</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#notes">Notes</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

[![Portfolio Preview][Preview-image]](https://github.com/Ant-Shell/fe-take-home-mgsa/assets/100455148/68ae92c6-27c2-4caf-88d4-721373fea811)

This web application was created for a week-long take home challenge. It allowed me to utilize skills learned in my bootcamp experience, and beyond, to craft a solution that is engaging and fun!

### Built With

* [![React][React.js]][React-url]
* [![React Router][React-Router-shield]][React-Router-url]
* [![TypeScript][TypeScript-shield]][TypeScript-url]
* [![CSS][CSS-shield]][CSS-url]
* [![NPM][NPM-shield]][NPM-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Setup
- Clone the repository to your local machine by following instructions [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- Install dependencies:
```
npm i
```
- Start the project
```
npm run dev
```
<br>

<strong>Note:</strong> in order to utilize the search functionality, you will need API credentials, which can be obtained [here](https://developer.edamam.com/food-database-api), using the following directions:
<br>
<ul>
  <li> Step 1: Sign up for a free DEVELOPER account for the Food Database API here
  <li> Step 2: Be sure to select the Developer plan for the Food Database API in the Choose your plan drop down menu.
  <li> Step 3: You will be asked to provide an organization during the sign-up process. Please enter your name for the organization or your own personal organization name/identifier if you have one (this is to ensure that you can   make use of the free Developer plan).
  <li> Step 4: Once your account is fully set up, you will be able to set up an Application here, which is where you will be able to find your Application ID and Application Keys, both of which you will need to make GET requests (you're welcome to name your application whatever you'd like to call it).
  <li> Step 5: You should now be able to use the Edamam Food Database API to search for food items.
    <ul>
    <li> Here is an example GET request: <code>https://api.edamam.com/api/food-database/v2/parser?app_id=[APP ID HERE]&app_key=[APP KEY HERE]&ingr=[FOOD ITEM HERE]&nutrition-type=cooking</code>
  </ul>
</ul>
<br>

Then create up a local [.env](https://vitejs.dev/guide/env-and-mode) file in the root of the project:

```
touch .env
```
and add the follwing to the `.env` file:
```
VITE_APP_API_ID=[YOUR-APP-ID-HERE]
VITE_APP_API_KEY=[YOUR-API-KEY-HERE]
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage
- Please visit the [deployed site](https://fe-take-home-mgsa.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Notes

There were lot of features and additional styling that I wanted to tackle during this project, but I had to scope down due to the completion timeframe of a week. There is room for refactoring and improvement, but overall I'm happy with the result. Most importantly, I learned a lot along the way!

**Update:**<br/>
I have submitted the project and completed my final interview. I am thankful for the opportunity, and intend to keep updating this project for additional learning opportunities. 

### Functionality includes...
- Intuitive user flow
- Product search
- Adding to cart
- Removing from cart
- "Purchasing" an order
- Confirmation of purchase

### Wins:

* I was happy with being able to complete the MVP in a week (and complete a stretch feature)!

### Challenges:

* I attempted two other stretch features, but had to scope down due to time constraints. I look forward to attempting them at a later time.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [x] Add/Subtract Product Quantities
- [x] Refactor from PropTypes to TypeScript
- [ ] Filter Search Results
- [ ] Improve Accessibility
- [ ] Improve Overall Look and Responsivness
- [ ] Implement State Management

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

[![LinkedIn][Linkedin]][Linkedin-url] [![Gmail][Gmail]][Gmail-url]

## API Used

* [edamam.com](https://developer.edamam.com/) was used for this project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[Preview-image]: https://github.com/Ant-Shell/fe-take-home-mgsa/assets/100455148/68ae92c6-27c2-4caf-88d4-721373fea811

[React.js]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React-url]: https://react.dev/

[React-Router-shield]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[React-Router-url]: https://reactrouter.com/en/main

[TypeScript-shield]: https://img.shields.io/badge/TypeScript-4279C0?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/

[CSS-shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://www.w3schools.com/css/

[NPM-shield]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]: https://www.npmjs.com/

[Linkedin]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[Linkedin-url]: https://www.linkedin.com/in/anthonyshellman/

[Gmail]: https://img.shields.io/badge/gmail-%2320232a.svg?style=for-the-badge&logo=gmail&logoColor=%DA5040
[Gmail-url]: mailto:atshellman@gmail.com
