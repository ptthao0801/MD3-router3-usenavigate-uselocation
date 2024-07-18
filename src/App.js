import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Category from '../../router3/src/components/Category';
import Product from '../../router3/src/components/Product';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Category />} />
                <Route path='/product' element={<Product />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
