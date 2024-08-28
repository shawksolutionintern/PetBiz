import React, { useState } from 'react';
import PdfViewModal from './PdfViewModal';
import './AllReport.css';

const AllReport = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPdfUrl, setCurrentPdfUrl] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const sections = [
    {
      title: "Sales",
      items: [
        { name: "Sales Totals", subtitle: "Total sales and sales tax", pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
        { name: "Sales by Employee Category", subtitle: "Sales totals grouped by employee category", pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
        { name: "Client Membership Cost/Revenue", subtitle: "Total membership payments for all clients with membership", pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }
      ]
    },
    {
      title: "Clients",
      items: [
        { name: "Client Loyalty Point Balance", subtitle: "Current loyalty point balance for all clients", pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
        { name: "Client Reviews", subtitle: "Clients' review on services and products", pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }
      ]
    },
    {
      title: "Products",
      items: [
        { name: "Product Sales", subtitle: "Total product sales", pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
        { name: "Inventory Status", subtitle: "Current inventory status", pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }
      ]
    }
  ];

  const handleItemClick = (item) => {
    setCurrentPdfUrl(item.pdfUrl);
    setModalTitle(item.name);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="allreport-container">
      {sections.map((section, index) => (
        <div key={index} className="allreport-section">
          <h2>{section.title}</h2>
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx} onClick={() => handleItemClick(item)}>
                <div>
                  <div className="allreport-item-title">{item.name}</div>
                  <div className="allreport-item-subtitle">{item.subtitle}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <PdfViewModal
        visible={isModalVisible}
        onClose={handleModalClose}
        pdfUrl={currentPdfUrl}
        title={modalTitle}
      />
    </div>
  );
};

export default AllReport;

