
// Button Component
const MyButton = (props) => {
    const handleButtonClick = () => {
        alert(props.message);
    }

    return (
        <button onClick={handleButtonClick} style={{ margin: "10px" }}>
            {props.children}
        </button>
    );
}

// App Component
const MyApp = () => {
    return (
        <div>
            <h1>Learn React</h1>
            <MyButton message="Learn React">React</MyButton>
            <MyButton message="Learn JavaScript">JavaScript</MyButton>
        </div>
    );
}

const root = document.getElementById('root');

// Membuat root React dengan createRoot
const rootInstance = ReactDOM.createRoot(root);

// Merender MyApp component ke dalam rootInstance
rootInstance.render(<MyApp />);