import React from 'react';
import Sidebar from '../../sidebar';
import AppHeader from '../../Components/AppHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopFarmersBarChart from './TopFarmersBarChart';
import SalesLineGraph from './SalesLineGraph';

import { faUsers, faTractor, faBoxes, faShoppingCart, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const data = {
    users: {
      value: 277,
      increase: 95,
    },
    farmers: {
      value: 150,
      increase: null,
      lastMonth: null
    },
    inventory: {
      value: 800,
      increase: null,
      lastMonth: null
    },
    products: {
      value: 557,
      increase: null,
      lastMonth: null
    },
    orders: {
      value: 338,
      increase: 30,
      lastMonth: null
    },
    sales: {
      value: 'Rs 40,000.00',
      increase: 40.63,
    }
  };
  const salesData = [
    // Sample sales data for the line graph
    { month: 'January', sales: 5000 },
    { month: 'February', sales: 4500 },
    { month: 'March', sales: 4000 },
    // Add more months as needed
  ];
  const topFarmersData = [
    { name: 'Samman Shrestha', sales: 4500 },
    { name: 'Rabindra Thakur', sales: 5000 },
    { name: 'Keshav Pangey', sales: 4000 },
    { name: 'Hari Lal Shrestha', sales: 4300 },
    { name: 'Govinda Ghimire', sales: 4000 },
    // Add more farmers as needed
  ];

  const DashboardBox = ({ title, value, increase, lastMonth, icon }) => {
    return (
      <div style={{
        borderRadius: '15px',
        padding: '20px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid #e9ecef'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(to bottom, #77dd77, #3ac162)', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '15px' }}>
              <FontAwesomeIcon icon={icon} style={{ fontSize: '20px', color: '#ffffff' }} />
            </div>
            <h3 style={{ marginTop: 0, marginBottom: '0', color: '#343a40', fontSize: '12px' }}>{title}</h3>
          </div>
          <div style={{ fontSize: '20px', color: '#4CAF50', fontWeight: 'bold' }}>{value}</div>
        </div>
        <p style={{ marginBottom: '10px', color: '#6c757d', fontSize: '9px', lineHeight: '1.5' }}>
          {increase !== null && `+${increase}% from last month`}
          {lastMonth && <span>, Last month: {lastMonth}</span>}
        </p>
        <div style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, #77dd77, #3ac162)', borderRadius: '0 0 15px 15px' }}></div>
      </div>
    );
  };
  
  const DashboardTable = () => {
    const tableData = [
      { product: 'Product A', category: 'Category 1', farmer: 'Farmer X', price: '$100', order: 50, sales: '$5,000' },
      { product: 'Product B', category: 'Category 2', farmer: 'Farmer Y', price: '$150', order: 30, sales: '$4,500' },
      { product: 'Product C', category: 'Category 3', farmer: 'Farmer Z', price: '$200', order: 20, sales: '$4,000' },
    ];

    return (
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', borderRadius: '10px', overflow: 'hidden' }}>
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: '#fff' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '10px 10px 0 0' }}>Product</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '10px 10px 0 0' }}>Category</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '10px 10px 0 0' }}>Farmer</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '10px 10px 0 0' }}>Price</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '10px 10px 0 0' }}>Order</th>
            <th style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '10px 10px 0 0' }}>Sales</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} style={{ backgroundColor: '#f8f9fa', color: '#212529' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '0 0 0 10px' }}>{row.product}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.category}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.farmer}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.price}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{row.order}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '0 0 10px 0' }}>{row.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <AppHeader />
      <div style={{ display: 'flex', marginTop: '20px' }}>
        {/* Sidebar component */}
        <div style={{ flex: '0 0 20%', marginRight: '20px' }}>
          <Sidebar />
        </div>

        {/* Dashboard content */}
        <div style={{ flex: '1' }}>
          <h2 style={{ color: '#4CAF50' }}>Dashboard</h2>
          {/* Grid layout for DashboardBox components */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', width: '90%', margin: '0 30px 0 0 ', marginTop: '20px', justifyContent: 'center', backgroundColor: '#fff', borderRadius: '20px', padding: '20px' }}>
            <DashboardBox
              title="Total Users"
              value={data.users.value}
              increase={data.users.increase}
              lastMonth={data.users.lastMonth}
              icon={faUsers}
            />
            <DashboardBox
              title="Total Farmers"
              value={data.farmers.value}
              increase={data.farmers.increase}
              lastMonth={data.farmers.lastMonth}
              icon={faTractor}
            />
            <DashboardBox
              title="Total Inventory"
              value={data.inventory.value}
              increase={data.inventory.increase}
              lastMonth={data.inventory.lastMonth}
              icon={faBoxes}
            />
            <DashboardBox
              title="Total Products"
              value={data.products.value}
              increase={data.products.increase}
              lastMonth={data.products.lastMonth}
              icon={faShoppingCart}
            />
            <DashboardBox
              title="Total Orders"
              value={data.orders.value}
              increase={data.orders.increase}
              lastMonth={data.orders.lastMonth}
              icon={faShoppingCart}
            />
            <DashboardBox
              title="Total Sales"
              value={data.sales.value}
              increase={data.sales.increase}
              lastMonth={data.sales.lastMonth}
              icon={faDollarSign}
            />
          </div>
          {/* TopFarmersBarChart component */}
          <div style={{ display: 'flex', marginTop: '40px', justifyContent: 'center', marginRight:'100px' }}>
            <div style={{ height: '300px', flex: '1', marginRight: '20px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: 'black', marginBottom: '20px', textAlign: 'center', fontSize:'14px'}}>Top 5 Farmers (Sales)</h2>
              <TopFarmersBarChart data={topFarmersData} />
            </div>
            <div style={{ height: '300px', flex: '1', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h2 style={{ color: 'black', marginBottom: '20px', textAlign: 'center' , fontSize:'14px'}}>Sales</h2>
              <SalesLineGraph data={salesData} />
            </div>
          </div>

          {/* DashboardTable component */}
          <div style={{ marginRight:'10px', maxWidth: '1160px' }}>
            <DashboardTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;