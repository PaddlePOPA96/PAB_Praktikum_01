// Functional Component
const ReactTitle = () => {
    return <h3>Currently learning ReactJS</h3>
}
const JavascriptTitle = () => {
    return <h3>Currently learning Javascript</h3>
}
const MyComponent = () => {
    return (
        <div>
            <ReactTitle />
            <hr />
            <JavascriptTitle/>
        </div>
    );
}
let myElement = <MyComponent />
ReactDOM.render(<MyComponent />, document.getElementById('root'));


