import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

const user = "Arie Akbar"

function Welcome(props){
    return (
        <h1>"Selamat Datang {props.nama}"</h1>
    )
}

function App() {
    if (user === null) {
        return <button>Login</button>
    }
    else {
        return <Welcome nama= {user}/>
    }
}

root.render(
    <App />
)
