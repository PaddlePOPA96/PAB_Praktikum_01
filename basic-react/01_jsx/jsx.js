// Inisialisasi myElement sebagai string
let myElement = "Hello World";

// Membuat elemen JSX dan merendernya
const element = <h3>{myElement}</h3>;

ReactDOM.render(
  element,
  document.getElementById("root")
);

// Basic Rules: Menginisialisasi myElement sebagai elemen JSX
myElement = <h3>Hello React</h3>;

// Statement in JSX: Menginisialisasi myText dan myElement sebagai elemen JSX yang lebih kompleks
let myText = "Learn React";
myElement = (
  <div>
    <h3>{myText}</h3>
  </div>
);

// Basic Rules: Menginisialisasi myElement sebagai elemen JSX dengan elemen p
myElement = (
  <div>
    <p>Learn Javascript</p>
    <p>Learn React</p>
  </div>
);

// Array Processing: Menginisialisasi items dan myElement sebagai elemen JSX berdasarkan array
let items = ["Table", "Handphone", "Computer"];
myElement = (
  <ul>
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);

const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);
