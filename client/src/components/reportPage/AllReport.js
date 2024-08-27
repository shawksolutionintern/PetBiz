import React from 'react';
import { List, Typography } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './AllReport.css';

const { Title } = Typography;

const AllReport = () => {
  const reportData = [
    {
      category: 'Sales',
      items: [
        { title: 'Sales Totals', description: 'Total sales and sales tax', pdf: 'path_to_sales_totals_pdf' },
        { title: 'Sales by Employee Category', description: 'Sales totals grouped by employee category', pdf: 'path_to_employee_sales_pdf' },
        { title: 'Client Membership Cost/Revenue', description: 'Total membership payments for all clients with membership', pdf: 'path_to_client_membership_pdf' },
        { title: 'Sales Totals', description: 'Total sales and sales tax', pdf: 'path_to_sales_totals_pdf' }
      ]
    },
    {
      category: 'Clients',
      items: [
        { title: 'Client Loyalty Point Balance', description: 'Current loyalty point balance for all clients', pdf: 'path_to_loyalty_point_pdf' },
        { title: 'Client reviews', description: 'Clients\' review on services and products', pdf: 'path_to_client_reviews_pdf' }
      ]
    },
    {
      category: 'Products',
      items: [
        { title: 'Product Sales Report', description: 'Detailed report on product sales', pdf: 'path_to_product_sales_pdf' }
      ]
    }
  ];

  const handleItemClick = (pdf) => {
    console.log(`PDF to open: ${pdf}`);
  };

  return (
    <div className="all-reports-container">
      <div className="all-reports-content">
        {reportData.map((section, index) => (
          <div key={index} className="report-section">
            <Title level={4} className="section-title">{section.category}</Title>
            <List
              itemLayout="horizontal"
              dataSource={section.items}
              renderItem={item => (
                <List.Item onClick={() => handleItemClick(item.pdf)} className="report-item">
                  <List.Item.Meta
                    title={item.title}
                    description={item.description}
                  />
                  <RightOutlined className="right-outlined-icon" />
                </List.Item>
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReport;

