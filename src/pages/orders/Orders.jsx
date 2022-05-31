import './orders.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Table from '../../components/table/Table';

const Orders = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        <div className='ordersTitle'>Orders</div>
        <Table />
      </div>
    </div>
  );
};

export default Orders;
