import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.jsx';
import './index.css';

// Tìm thẻ <div id="root"> trong index.html và "vẽ" ứng dụng React vào đó
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter bọc ngoài cùng để cả ứng dụng dùng được tính năng chuyển trang */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);