import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import Orders from './pages/orders/Orders';
import Products from './pages/products/Products';
import Kanban from './pages/kanban/Kanban';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { userInputs } from './formSource';
import { productInputs } from './formSource';
import './style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import './App.css';
import Calendar from './pages/calendar/Calendar';
import Linechart from './pages/line/Line';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />}></Route>
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route
                path='new'
                element={<New inputs={userInputs} title='Add New User' />}
              />
            </Route>
            <Route path='/products'>
              <Route index element={<Products />} />
              <Route path=':productId' element={<Single />} />
              <Route
                path='new'
                element={<New inputs={productInputs} title='Add New Product' />}
              />
            </Route>
          </Route>
          <Route path='/orders' element={<Orders />} />
          <Route path='/kanban' element={<Kanban />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/line' element={<Linechart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
