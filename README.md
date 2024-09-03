# Food Ordering app built using react

# structure

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - Cards Container
- - Restuarant cards
- footer
- - links
- - copyright

// dont forget functional components start with a capital letter always

// always use keys dont use indexes as keys/ always prefer unique keys use shortid to generate keys

Two types of exports and imports

# Default Export/Import

export default component;
import component from "path";

# Named Export/import

export const component
import {component} from path;

# React Hooks

(normal js functions for utility)

- useState() - used to generate state variables in react
- useEffect()
- useContext()- for global context variables

# 2 Types of Routing in web apps

- Client side routing
- Server Side Routing

# Alias of Lazy Loading

- Chunking
- Code Splitting
- Dyanamic Bundling
- lazy Loading
- On demand Loading

# State Lifting

- Allows the parent component to control the child component by passing in the set function to child as props.

# React Context(Global scope to avoid prop drilling)

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build our Store
- Connect our Store
- Slice (cartSlice)
- dispatch(action)
- Selector
