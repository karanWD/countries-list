![](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/5723b4283334ed6d742cadb37a86ff8c45e4e9d36a658492.jpg)

[**Demo**](https://countries-app-sandy.vercel.app/)

## **Countries App**

The countries app shows a list of 250 countries from REST Countries database.

The app shows the country's flags and some other information about them like population, region and each one has a detail page that shows more information about that country.

The app was developed with Next.js, TypeScript and Tailwindcss.

Use just Axios library for fetch requests.

### Features 

* Filter countries by their name without using any 3rd party libraries.
* Filter countries by their region.
* Sort filtered or unfiltered countries by their name and population. (Simultaneous filtering and sorting)
* Store the filters in the URL query strings and sync it with the app.
* Implemented search based on name with the possibility of recognizing names with more than 70% similarity. (for example Germany country shows in both “grmny” and “grmany” searches)
* Toggle the color scheme between light and dark modes without using any 3rd party libraries.
* Add lazy loading for country images and lists.
* Loaded styles when it is needed.
* Maintain images ratio in different device sizes.

### [Demo](https://countries-app-sandy.vercel.app/)

The app deployed on vercel, you can see it from [here](https://countries-app-sandy.vercel.app/).

### Development Build

Install all dependencies, in repo's root:

```plaintext
$ npm install
```

And build it 

```plaintext
$ npm run build
```
