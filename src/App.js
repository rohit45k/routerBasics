import { Navigate, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/Layout/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Navigate replace to='/welcome' />} />
          <Route path='/welcome/*' element={<Welcome />}>
            <Route path='new-user' element={<p>Welcome New User!</p>} />
          </Route>
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
