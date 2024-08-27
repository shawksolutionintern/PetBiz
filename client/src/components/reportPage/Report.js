import React, { useState } from 'react';
import { DatePicker, Dropdown, Menu } from 'antd';
import { Line, Pie, Bar } from '@ant-design/charts';
import moment from 'moment';
import AllReport from './AllReport';  // Import the AllReport component
import './Report.css';

const Report = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [activeTab, setActiveTab] = useState('dashboard');  // State to track the active tab

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">Last week</Menu.Item>
      <Menu.Item key="2">Last month</Menu.Item>
      <Menu.Item key="3">Last 6 months</Menu.Item>
      <Menu.Item key="4">Last one year</Menu.Item>
    </Menu>
  );

  const lineConfig = {
    data: [
      { month: 'Jan', value: 30 },
      { month: 'Feb', value: 60 },
      { month: 'Mar', value: 45 },
      { month: 'Apr', value: 80 },
      { month: 'May', value: 70 },
      { month: 'Jun', value: 50 }
    ],
    xField: 'month',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  const pieConfig = {
    data: [
      { type: 'A', value: 27 },
      { type: 'B', value: 25 },
      { type: 'C', value: 18 },
      { type: 'D', value: 15 },
      { type: 'E', value: 10 },
      { type: 'F', value: 5 },
    ],
    angleField: 'value',
    colorField: 'type',
  };

  const barConfig = {
    data: [
      { type: 'Category 1', value: 38 },
      { type: 'Category 2', value: 52 },
      { type: 'Category 3', value: 61 },
      { type: 'Category 4', value: 145 },
      { type: 'Category 5', value: 48 },
    ],
    xField: 'value',
    yField: 'type',
    seriesField: 'type',
    legend: { position: 'top-left' },
  };

  return (
    <div className="report-container">
      <div className="report-top-bar">
        <div className="report-tabs">
          <span 
            className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`} 
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </span>
          <span 
            className={`tab ${activeTab === 'allReports' ? 'active' : ''}`} 
            onClick={() => setActiveTab('allReports')}
          >
            All Reports
          </span>
        </div>
        {activeTab === 'dashboard' && (
          <div className="report-date-display">
            <DatePicker 
              value={selectedDate}
              onChange={handleDateChange}
              format="MMMM Do, YYYY"
              bordered={false}
              className="custom-date-picker"
            />
          </div>
        )}
      </div>

      <div className="report-content">
        {activeTab === 'dashboard' ? (
          <>
            <div className="report-charts">
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Sales</h3>
                  <Dropdown overlay={menu}>
                    <span className="dropdown-label">Last month ▼</span>
                  </Dropdown>
                </div>
                <div className="chart-placeholder">
                  <Line {...lineConfig} />
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-header">
                  <h3>Productivity</h3>
                  <Dropdown overlay={menu}>
                    <span className="dropdown-label">Last month ▼</span>
                  </Dropdown>
                </div>
                <div className="chart-placeholder">
                  <Pie {...pieConfig} />
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-header">
                  <h3>Products Sales</h3>
                  <Dropdown overlay={menu}>
                    <span className="dropdown-label">Last month ▼</span>
                  </Dropdown>
                </div>
                <div className="chart-placeholder">
                  <Line {...lineConfig} />
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-header">
                  <h3>Services Sales</h3>
                  <Dropdown overlay={menu}>
                    <span className="dropdown-label">Last month ▼</span>
                  </Dropdown>
                </div>
                <div className="chart-placeholder">
                  <Line {...lineConfig} />
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-header">
                  <h3>Profit and Loss</h3>
                  <Dropdown overlay={menu}>
                    <span className="dropdown-label">Last month ▼</span>
                  </Dropdown>
                </div>
                <div className="chart-placeholder">
                  <Bar {...barConfig} />
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-header">
                  <h3>Income and Expense</h3>
                  <Dropdown overlay={menu}>
                    <span className="dropdown-label">Last month ▼</span>
                  </Dropdown>
                </div>
                <div className="chart-placeholder">
                  <Bar {...barConfig} />
                </div>
              </div>
            </div>

            <div className="report-metrics">
              <div className="metric-card">
                <h3>Number of Appointments</h3>
                <div className="metric-value">
                  <span>8</span>
                  <span className="metric-change positive">+3</span>
                </div>
              </div>
              <div className="metric-card">
                <h3>Prebooked Clients Percentage</h3>
                <div className="metric-value">
                  <span>70%</span>
                  <span className="metric-change positive">+30%</span>
                </div>
              </div>
              <div className="metric-card">
                <h3>Average Product Sale</h3>
                <div className="metric-value">
                  <span>$200.00</span>
                  <span className="metric-change negative">-33%</span>
                </div>
              </div>
              <div className="metric-card">
                <h3>Average Service Sale</h3>
                <div className="metric-value">
                  <span>$480.00</span>
                  <span className="metric-change positive">+60%</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <AllReport />
        )}
      </div>
    </div>
  );
};

export default Report;


