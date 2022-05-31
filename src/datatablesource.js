export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'user',
    headerName: 'User',
    width: 230,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img className='cellImg' src={params.row.img} alt='' />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 230,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 230,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: 'John',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    status: 'active',
    email: '1111@gmail.com',
    age: 35,
  },
  {
    id: 2,
    username: 'John',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '2222@gmail.com',
    status: 'passive',
    age: 42,
  },
  {
    id: 3,
    username: 'John',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '3333@gmail.com',
    status: 'pending',
    age: 45,
  },
  {
    id: 4,
    username: 'Jamie',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '4555@gmail.com',
    status: 'active',
    age: 16,
  },
  {
    id: 5,
    username: 'Jane',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '5555@gmail.com',
    status: 'passive',
    age: 22,
  },
  {
    id: 6,
    username: 'user5659',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '6545@gmail.com',
    status: 'active',
    age: 15,
  },
  {
    id: 7,
    username: 'user56',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '7s54w@gmail.com',
    status: 'passive',
    age: 44,
  },
  {
    id: 8,
    username: 'userrr1',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '864@gmail.com',
    status: 'active',
    age: 36,
  },
  {
    id: 9,
    username: 'user15',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '999@gmail.com',
    status: 'pending',
    age: 65,
  },
  {
    id: 10,
    username: 'user2',
    img: 'https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    email: '100@gmail.com',
    status: 'active',
    age: 65,
  },
];

export const productColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'product',
    headerName: 'Product',
    width: 230,
    renderCell: (params) => {
      return (
        <div className='cellWithImg'>
          <img className='cellImg' src={params.row.img} alt='' />
          {params.row.productname}
        </div>
      );
    },
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 230,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 230,
  },
  {
    field: 'stock',
    headerName: 'Stock',
    width: 230,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
export const productRows = [
  {
    id: 1,
    productname: 'Acer Nitro 5',
    img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
    price: '$756',
    status: 'in stock',
    amount: 35,
  },
  {
    id: 2,
    productname: 'Playstation 5',
    img: 'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
    price: '$1000',
    status: 'in stock',
    amount: 35,
  },
  {
    id: 3,
    productname: 'Redragon S101',
    img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
    price: '$1200',
    status: 'in stock',
    amount: 35,
  },
  {
    id: 4,
    productname: 'Razer Blade 15',
    img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
    price: '$756',
    status: 'in stock',
    amount: 35,
  },
  {
    id: 5,
    productname: 'ASUS ROG Strix',
    img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
    price: '$456',
    status: 'in stock',
    amount: 35,
  },
];
