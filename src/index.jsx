import * as ReactDomClient from 'react-dom/client';
import { PrivateRoutesApp } from './PrivateRoutesApp';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = ReactDomClient.createRoot(rootElement);

root.render(<PrivateRoutesApp />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
