# [Viewer Artwork](https://viewer-artwork.netlify.app/) - React - TypeScript - Vite

## Step by step to run this project locally:

-   Download `Git` by clicking here: [Git](https://git-scm.com/download/win) and follow the steps for installation.
-   Install `Node` following the steps by clicking here: [NodeJS documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
-   Install `Yarn package manager` following the steps by clicking here: [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable).
-   Once `Git`, `Node` and `Yarn package manager` has been installed open your terminal and run the command `git clone https://github.com/MarlonTancredo/viewer-artwork.git` to clone this repository.
-   Go inside the project folder and install the project dependencies running `yarn` command.
-   After all dependencies has been installed run the command `yarn dev` to run the project locally.

## API:

-   This project consume data from a `FREE API` called `Cleveland Art API` to render the cards and components.
-   Link to the api documentation used to build this project: [Cleveland Art documentation](https://openaccess-api.clevelandart.org/)

Api request example:

```js
const response = await fetch(
    "https://openaccess-api.clevelandart.org/api/creators/?name=smith&birth_year_after=1900&limit=1&indent=1",
);
const data = await response.json();
```

Api response example:

```json
{
 "info": {
  "total": 21,
  "parameters": {
   "name": "smith",
   "birth_year_after": "1900",
   "limit": "1",
   "indent": "1"
  }
 },
 "data": [
  {
   "created_at": "2020-11-04 19:01:09.608000",
   "updated_at": "2020-11-04 22:36:25.316000",
   "name": "William E. Smith",
   "nationality": "American",
   "description": "William E. Smith (American, 1913-1997)",
   "biography": "A highly skilled printmaker, William Elijah Smith specialized in genre scenes of working-class African-American life in Cleveland. Born in Chattanooga, Smith moved to Cleveland at the age of 13 and became involved with Karamu House, learning print making and stage design. He studied art at the Huntington Polytechnic Institute, 1933\u201334. During this time he began teaching at Karamu House and continued to do so until 1940. In 1941 he won the art competition for presenting one of his prints to the Library of Congress for its permanent collection. Smith exhibited at the Connecticut Academy of Fine Arts in Hartford (1935), in the annual May Shows at the Cleveland Museum of Art (1936\u2013 49), at the Associated American Artists Galleries of New York (1942), and at Atlanta University (1942). During World War II, he served as a photographer in the army\u2019s educational department. After the war, he returned to Cleveland and established a commercial silkscreening studio. In 1946 the Lyman Brothers\u2019 Gallery in Indianapolis mounted his first solo exhibition. From 1946 to 1948 he studied painting and printmaking at the Cleveland School of Art and the Cooper School of Art. In the late 1940s Smith moved to Los Angeles, where he associated with Curtis Tann, a former colleague from Karamu House. With Tann, Smith cofounded the Eleven Associated Artists Gallery, the first Los Angeles gallery devoted specifically to African art. In 1952 Smith was hired to work as a blueprint draftsman at Lockheed Aircraft, beginning a long association with the corporation. In 1960 he cofounded Art West Associated, an African-American artists\u2019 advocacy organization in Los Angeles. In 1970 he published illustrations of subjects from African-American history for Cleveland\u2019s New Day Press. Smith\u2019 s works were displayed ins numerous group exhibitions in the Los Angeles area (1960s\u201380s).
Transformations in Cleveland Art. (CMA, 1996), p. 238",
   "birth_year": "1913",
   "death_year": "1997",
   "id": 7978,
   "artworks": [
    {
     "id": 117264,
     "accession_number": "1937.83",
     "title": "Mother and Baby",
     "tombstone": "Mother and Baby, c. 1936. William E. Smith (American, 1913-1997). Linoleum cut; The Cleveland Museum of Art, Gift of The Print Club of Cleveland 1937.83",
     "url": "https://clevelandart.org/art/1937.83"
    },
    {
     "id": 119964,
     "accession_number": "1940.76",
     "title": "Sharecropper",
     "tombstone": "Sharecropper, 1940. William E. Smith (American, 1913-1997). Linoleum cut; The Cleveland Museum of Art, Gift of The Print Club of Cleveland 1940.76",
     "url": "https://clevelandart.org/art/1940.76"
    },
    {
     "id": 120267,
     "accession_number": "1941.122",
     "title": "My Son!  My Son!",
     "tombstone": "My Son!  My Son!, 1941. William E. Smith (American, 1913-1997). Linoleum cut; The Cleveland Museum of Art, Gift of The Print Club of Cleveland 1941.122",
     "url": "https://clevelandart.org/art/1941.122"
    },
    {
     "id": 122977,
     "accession_number": "1943.244",
     "title": "Siesta",
     "tombstone": "Siesta, 1943. William E. Smith (American, 1913-1997). Linoleum cut; platemark: 22.8 x 20.4 cm (9 x 8 1/16 in.); sheet: 27.7 x 21.7 cm (10 7/8 x 8 9/16 in.). The Cleveland Museum of Art, Gift of The Print Club of Cleveland 1943.244",
     "url": "https://clevelandart.org/art/1943.244"
    }
   ]
  }
 ]
}
```

## Where this project is hosted?

-   This project it's hosted on `Netlify` using a `FREE PLAN` and linked to project repo on `GitHub`, so any new commit will reflect on the website. Project can be accessed by clicking here: [viewer-artwork.netlify.app](https://viewer-artwork.netlify.app/).
-   For more information about netlify click here: [Netlify documentation](https://docs.netlify.com/)

## Dependencies:

-   `@tanstack/react-query` - Hooks for managing, caching and syncing asynchronous and remote data in React [React Query](https://tanstack.com/query/latest)
-   `react-intersection-observer` - Monitor if a component is inside the viewport, using IntersectionObserver API [React Observer documentation](https://github.com/thebuilder/react-intersection-observer#readme)
-   `react-router-dom` - Declarative routing for React web applications [React Router Dom](https://github.com/remix-run/react-router#readme)
-   `react-spinners` - A collection of react loading spinners [React Spinners](https://www.davidhu.io/react-spinners/)

## Expanding the ESLint configuration:

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
