# Learus Typescript Material CRA Template

This project is a boilerplate to easily create a front-end project structure using:

* Typescript
* Material UI
* Axios
* React Router

Out of the box it provides (among basic CRA features):

* Customizable Dark - Light Theming with Material UI
* Methods for React-friendly Responsive Sizing (see `src/styles/Theme.tsx`)
* Easy Component Creation with custom script `component.sh`
* Client-side Routing
* Docker Deployment

## Installation

```bash
npx create-react-app your-project --template learus-typescript-material
```

## App Usage

* To start the application use `npm start` or `npm run dev`. The `dev` script sets `NODE_ENV=development` in case you need different logic based on development or production enviroment.

* To build use `npm run build`.

* To create a new component use `./component.sh` and specify the name of the component.

* Deploy using Docker and `docker-compose up`
