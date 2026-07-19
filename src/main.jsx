
//  1. Базові залежності React 
// (React Core Dependencies)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; 
// 2. Зовнішні залежності та сторонні бібліотеки 
// (Third-party Dependencies / Libraries)
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast"; 
// 3. Локальні модулі (компоненти, сховище)
import { store } from "./redux/store";
import App from "./App"; 

// 4. Глобальні стилі 
import "modern-normalize";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
<BrowserRouter>
      <Toaster position="top-right" />
      <App />
    </BrowserRouter>
    </Provider>    
  </StrictMode>,
);

