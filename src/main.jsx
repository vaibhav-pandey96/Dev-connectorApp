import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router";
import App from './App.jsx';
import { SourceProvider } from './context/SourceContext.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <SourceProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </SourceProvider>
);