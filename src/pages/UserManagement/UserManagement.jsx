import './UserManagement.css'

function UserManagement() {
    return (
        <div id="userManagementContainer">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>Bilal</td>
                        <td>bilalm3m9n@gmail.com</td>
                        <td id='action'>
                            <button id='unblockBtn' className='actionBtn'>UnBlock</button>
                            <button id='blockBtn' className='actionBtn'>Block</button>
                        </td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>Bilal</td>
                        <td>bilalm3m9n@gmail.com</td>
                        <td id='action'>
                            <button id='unblockBtn' className='actionBtn'>UnBlock</button>
                            <button id='blockBtn' className='actionBtn'>Block</button>
                        </td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>Bilal</td>
                        <td>bilalm3m9n@gmail.com</td>
                        <td id='action'>
                            <button id='unblockBtn' className='actionBtn'>UnBlock</button>
                            <button id='blockBtn' className='actionBtn'>Block</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserManagement