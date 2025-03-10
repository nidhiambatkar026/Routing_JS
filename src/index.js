import { createRoot } from "react-dom/client";

function App(){
    const path = window.location.pathname;
    console.log(path);
}

const root = createRoot(document.getElementById("root"));
root.render(
    <>
    <App/>
    </>
);