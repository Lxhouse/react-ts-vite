import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


// const ReactDom111 = () => <div>啦啦啦啦啦这是ReactDom111</div>;
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// <React.StrictMode>
//   <BrowserRouter>
//     {/* <App /> */}
//     <Routes>
//       <Route path="/" element={<App />}></Route>
//       <Route path="/ReactDom111" element={<ReactDom111 />}></Route>
//     </Routes>
//   </BrowserRouter>
// </React.StrictMode>,
