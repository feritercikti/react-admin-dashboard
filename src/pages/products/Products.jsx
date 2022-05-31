import './products.scss';
import { DataGrid } from '@mui/x-data-grid';
import { productColumns, productRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Products = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to='/users/test' style={{ textDecoration: 'none' }}>
              <div className='viewButton'>View</div>
            </Link>
            <div
              className='deleteButton'
              onClick={() => handleDelete(params.row.id)}
            >
              Delete{' '}
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        <div className='datatable'>
          <div className='dataTableTitle'>
            Add New Product
            <Link to='/products/new' className='link'>
              Add New
            </Link>
          </div>
          <DataGrid
            className='datagrid'
            rows={data}
            columns={productColumns.concat(actionColumn)}
            pageSize={8}
            rowsPerPageOptions={[8]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
