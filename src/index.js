import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));

const AnalyticsApp = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <>
          <App />
        </>
      </ThemeProvider>
    </React.StrictMode>
  );
};

root.render(<AnalyticsApp />);

reportWebVitals();
