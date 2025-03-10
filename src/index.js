import { createRoot } from "react-dom/client";

function App(){
    const path = window.location.pathname;
    console.log(path);

    if(path == "/"){
        root.render(<Home />)
    }
    else if (path == "/dashboard")
    {
        root.render(<Dashboard />)
    }
    else if (path == "/about"){
        root.render(<About />)
    }
    else if (path == "/contact"){
        root.render(<Contact />)
    }
    else{
        root.render(<h1>404 Page not found</h1>)
    }
}

const root = createRoot(document.getElementById("root"));
root.render(
    <>
    <App/>
    </>
);