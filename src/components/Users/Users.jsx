import "./Users.css"
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 33 },
  { field: 'email', headerName: 'Email', width: 430 },
  { field: 'username', headerName: 'Username', width: 430 }, 
];

const rows = [
  { id: 1, email: 'Snow', username: 'Jon', age: 35 },
  { id: 2, email: 'Lannister', username: 'Cersei', age: 42 },
  { id: 3, email: 'Lannister', username: 'Jaime', age: 45 },
  { id: 4, email: 'Stark', username: 'Arya', age: 16 },
  { id: 5, email: 'Targaryen', username: 'Daenerys', age: null },
  { id: 6, email: 'Melisandre', username: null, age: 150 },
  { id: 7, email: 'Clifford', username: 'Ferrara', age: 44 },
  { id: 8, email: 'Frances', username: 'Rossini', age: 36 },
  { id: 9, email: 'Roxie', username: 'Harvey', age: 65 },
];

const Users = () => {
  return (
    <div className="users-section" style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Users