# Namaste React by Akshay Saini

# Package.json

- npm config file
- Holds project details
- Dependencies list with versions
- Can use caret (^) for minor version upgrades for the library or dependencies installed before the version "^3.0.0"
- Can use tilda (~) for majour version upgrades for the library or dependencies installed before the version "~3.0.0"
- Can also install dev dependencies by adding -D after npm install -D Library name
- In scripts in Package.json file we ca add scripts and then execute those scripts by running npm run then script name

# Package-lock.json

- Keeps and maintain the track of exact library or dependency version installed in our project

# Parcel

- Development build
- Local server
- HMR = Hot Module Reload
- Caching = Faster build / parcel is caching the data to give faster builds
- Image Optimization
- Minify files
- Bundling
- Compressiong
- Consistet Hashing
- Code Splitting
- Differential Bundking - Browser wise created bundle
- Diagnostic
- Error Handking
- HTTPs
- Tree shaking - remove unused code like functions or variables
- Different Dev and Production bundles

# JSX

- JSX is not HTML inside Javascript its HTML or XML like syntax
- JSX is nothing but a React Eelement at the end of the day.
- JSX prevents the melicious data form any api to get injected in our code as it purifies it before injecting.

# Components

- Components are simple Javascript functions which returs JSX.
- As Components are functions so we can also write Javascript inside it and then return the JSX React Eelement.
- Component composition meanst that combining two or more components together.
- Component name must starts with a capital letter so react is able to identify it as a component.
