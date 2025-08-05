import { FaBoxOpen, FaUser } from 'react-icons/fa'
import './Dashboard.css'
import { FaCartShopping } from 'react-icons/fa6'
import { MdCategory } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

function Dashboard() {
  return (
    <div id="dashboardContainer">
      <NavLink to={"/usermanagement"} className="navLinks">
        <div className="dashboardBox">
          <FaUser className='totalIcons' />
          <div className="totalText">
            <p>Total Users</p>
            <h1>1201</h1>
          </div>
        </div>
      </NavLink>

      <NavLink to={"/ordermanagement"} className="navLinks">
        <div className="dashboardBox">
          <FaCartShopping className='totalIcons' />
          <div className="totalText">
            <p>Total Orders</p>
            <h1>518</h1>
          </div>
        </div>
      </NavLink>

      <NavLink to={"/productManagement"} className="navLinks">
        <div className="dashboardBox">
          <FaBoxOpen className='totalIcons' />
          <div className="totalText">
            <p>Total Products</p>
            <h1>150</h1>
          </div>
        </div>
      </NavLink>

      <NavLink to={"/category"} className="navLinks">
        <div className="dashboardBox">
          <MdCategory className='totalIcons' />
          <div className="totalText">
            <p>Total Category</p>
            <h1>10</h1>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default Dashboard