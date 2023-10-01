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

// Render komponen MyButton ke dalam elemen dengan ID "root".
ReactDOM.render(
    <MyButton message="Pesan yang akan di-alert">Teks Tombol</MyButton>,
    document.getElementById('root')
);