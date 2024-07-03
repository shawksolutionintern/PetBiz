import React, { useState } from "react";
import "./Clients.css";
import ClientDetailModal from "./ClientDetailModal";
import AddClientModal from "./AddClientModal";

const Clients = () => {
  const [selectedTab, setSelectedTab] = useState("Clients");
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [clients, setClients] = useState([
    { id: 1, name: "Client Name 1", loyaltyId: "Loyalty ID 1", tel: "Tel 1", email: "Email 1" },
    { id: 2, name: "Client Name 2", loyaltyId: "Loyalty ID 2", tel: "Tel 2", email: "Email 2" },
    { id: 3, name: "Client Name 3", loyaltyId: "Loyalty ID 3", tel: "Tel 3", email: "Email 3" },
    { id: 4, name: "Client Name 4", loyaltyId: "Loyalty ID 4", tel: "Tel 4", email: "Email 4" },
  ]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleClientClick = (client) => {
    setSelectedClient(client);
    setIsClientModalOpen(true);
  };

  const handleCloseClientModal = () => {
    setIsClientModalOpen(false);
    setSelectedClient(null);
  };

  const handleSaveClient = (updatedClient) => {
    setClients(clients.map(client => client.id === updatedClient.id ? updatedClient : client));
  };

  const handleDeleteClient = (clientId) => {
    setClients(clients.filter(client => client.id !== clientId));
    handleCloseClientModal();
  };

  const handleAddButtonClick = () => {
    setIsAddClientModalOpen(true);
  };

  const handleAddClient = (newClient) => {
    setClients([...clients, newClient]);
  };

  const handleCloseAddClientModal = () => {
    setIsAddClientModalOpen(false);
  };

  return (
    <div className="clients-page">
      <div className="clients-navbar">
        <div className="tabs">
          <div
            className={`tab ${selectedTab === "Clients" ? "active" : ""}`}
            onClick={() => handleTabChange("Clients")}
          >
            Clients
          </div>
          <div
            className={`tab ${selectedTab === "Pets" ? "active" : ""}`}
            onClick={() => handleTabChange("Pets")}
          >
            Pets
          </div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-icons">
          <span className="icon" onClick={handleAddButtonClick}>＋</span>
        </div>
      </div>
      <div className="clients-list">
        {clients.map((client) => (
          <div
            key={client.id}
            className="client-item"
            onClick={() => handleClientClick(client)}
          >
            <div className="client-info">
              <div className="client-name">{client.name}</div>
              <div className="client-loyalty">{client.loyaltyId}</div>
            </div>
            <div className="client-details">
              <div className="client-tel">{client.tel}</div>
              <div className="client-email">{client.email}</div>
            </div>
          </div>
        ))}
      </div>
      {isClientModalOpen && selectedClient && (
        <ClientDetailModal
          client={selectedClient}
          onClose={handleCloseClientModal}
          onSave={handleSaveClient}
          onDelete={handleDeleteClient}
        />
      )}
      {isAddClientModalOpen && (
        <AddClientModal
          onClose={handleCloseAddClientModal}
          onSave={handleAddClient}
        />
      )}
    </div>
  );
};

export default Clients;

