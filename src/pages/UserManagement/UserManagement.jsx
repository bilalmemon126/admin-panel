import { useState } from 'react'
import './UserManagement.css'

function UserManagement() {
    const [blockBtn, setBlockBtn] = useState({btn1: "Block", btn2: "Block", btn3: "Block"})
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
                            <button className={`actionBtn ${blockBtn.btn1}`} onClick={() => setBlockBtn(prev => ({...prev, btn1: blockBtn.btn1 === "Block" ? "UnBlock" : "Block"}))}>{blockBtn.btn1}</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bilal</td>
                        <td>bilalm3m9n@gmail.com</td>
                        <td id='action'>
                            <button className={`actionBtn ${blockBtn.btn2}`} onClick={() => setBlockBtn(prev => ({...prev, btn2: blockBtn.btn2==="Block" ? "UnBlock" : "Block"}))}>{blockBtn.btn2}</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bilal</td>
                        <td>bilalm3m9n@gmail.com</td>
                        <td id='action'>
                            <button className={`actionBtn ${blockBtn.btn3}`} onClick={() => setBlockBtn(prev => ({...prev, btn3: blockBtn.btn3==="Block" ? "UnBlock" : "Block"}))}>{blockBtn.btn3}</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserManagement