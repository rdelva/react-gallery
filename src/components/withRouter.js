// MyComponent.js



import Nav from './Nav'
render(<MyComponent.WrappedComponent location={{Nav}} />)

// MyComponent.test.js
// import MyComponent from './MyComponent'
// render(<MyComponent.WrappedComponent location={{...}} ... />)

export default withRouter(Nav);