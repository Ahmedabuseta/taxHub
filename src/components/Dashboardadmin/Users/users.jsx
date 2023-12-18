import './users.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
function Users(){

    return(
        <div className="users">
            <div className="row p-0 m-0 p-4">
                <h3 className="col-6 m-0">All users</h3>
                <div className="col-sm-12 col-md-6 d-flex justify-content-between p-0 m-0">
                    <input placeholder="&#xf0dc; Sort by" className='col-4' style={{"font-family":"FontAwesome"}}></input>
                    <input placeholder="&#xf002; Search list.." className='col-7' style={{"font-family":"FontAwesome"}}></input>
                </div>
            </div>
            <div className=''>
                <Table border="1" frame="void" rules="rows">
                    <Thead>
                    <Tr className='thead'>
                        <Th>#</Th>
                        <Th>username</Th>
                        <Th>email</Th>
                        <Th>company</Th>
                        <Th>date</Th>
                        <Th>Actions</Th>
                        <Th></Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>03</Td>
                        <Td>lorem ipsum</Td>
                        <Td>someone@gmail.com</Td>
                        <Td>taxes</Td>
                        <Td>12-12-2024</Td>
                        <Td>edit</Td>
                        <Td className='red'>Delete</Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>lorem ipsum</Td>
                        <Td>someone@gmail.com</Td>
                        <Td>taxes</Td>
                        <Td>12-12-2024</Td>
                        <Td>edit</Td>
                        <Td className='red'>Delete</Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>lorem ipsum</Td>
                        <Td>someone@gmail.com</Td>
                        <Td>taxes</Td>
                        <Td>12-12-2024</Td>
                        <Td>edit</Td>
                        <Td className='red'>Delete</Td>
                    </Tr>
                    <Tr>
                        <Td>03</Td>
                        <Td>lorem ipsum</Td>
                        <Td>someone@gmail.com</Td>
                        <Td>taxes</Td>
                        <Td>12-12-2024</Td>
                        <Td>edit</Td>
                        <Td className='red'>Delete</Td>
                    </Tr>
                    </Tbody>
                </Table>
                <div>
                </div>
            </div>
        </div>
    )
}
export default Users;