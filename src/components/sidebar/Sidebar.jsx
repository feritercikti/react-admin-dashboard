import React, { useContext } from 'react';
import './sidebar.scss';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListAltIcon from '@mui/icons-material/ListAlt';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>admin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <GridViewIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <PersonIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/products' style={{ textDecoration: 'none' }}>
            <li>
              <ProductionQuantityLimitsIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>
          <Link to='/orders' style={{ textDecoration: 'none' }}>
            <li>
              <CreditCardIcon className='icon' />
              <span>Orders</span>
            </li>
          </Link>
          <p className='title'>APPS</p>
          <Link to='/calendar' style={{ textDecoration: 'none' }}>
            <li>
              <CalendarMonthIcon className='icon' />
              <span>Calendar</span>
            </li>
          </Link>
          <Link to='/kanban' style={{ textDecoration: 'none' }}>
            <li>
              <ListAltIcon className='icon' />
              <span>Kanban</span>
            </li>
          </Link>
          <p className='title'>CHARTS</p>
          <Link to='/line' style={{ textDecoration: 'none' }}>
            <li>
              <StackedLineChartIcon className='icon' />
              <span>Line</span>
            </li>
          </Link>

          <li>
            <BarChartIcon className='icon' />
            <span>Bar</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountBoxIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className='colorOptions'
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className='colorOptions'
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
