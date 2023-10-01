// Functional Component dengan props

const Practice = (props) => <h3>Practice: {props.course}</h3>;

// Mendeklarasikan myElement sebagai variabel dengan const atau let
const myElement = (
    <div>
        <Practice course="Javascript"/>
        <Practice course="ReactJS"/>
        <Practice course="React Native"/>
    </div>
);

// Render myElement ke dalam DOM
ReactDOM.createRoot(document.getElementById('root')).render(myElement);

