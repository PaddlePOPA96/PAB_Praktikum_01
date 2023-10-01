// Class Component
class Practice1 extends React.Component {
    render() {
        return <h3>Practice: ReactJS</h3>;
    }
}

//let myElement = <Practice1 />;
// Props in Class Component
// Komponen React
class Practice2 extends React.Component {
    render() {
        return <h3>Practice: {this.props.topic}</h3>;
    }
}

// Buat elemen React dengan komponen Practice2 dan prop topic="ReactJS"
const myRElement = <Practice2 topic="ReactJS"/>;

// Merender elemen React ke dalam elemen dengan id "tampilan2"
ReactDOM.render(myRElement, document.getElementById('tampilan2'));


// Props Children in Class Component
class Practice3 extends React.Component {
    render() {
        return <h3 id={this.props.module}>Practice: {this.props.children}</h3>;
    }
}

// Buat elemen React dengan komponen Practice3 dan prop children="ReactJS"
const myElement = <Practice3 module="01">ReactJS</Practice3>;

// Merender elemen React ke dalam elemen dengan id "root"
ReactDOM.createRoot(document.getElementById('root')).render(myElement);
