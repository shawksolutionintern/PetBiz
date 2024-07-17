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
    {
      id: 1,
      name: "Client Name 1",
      loyaltyId: "Loyalty ID 1",
      tel: "Tel 1",
      email: "Email 1",
      avatarUrl: "/avatars/avatar1.jpg",
      address: "123 Main St, Townsville",
      notes: "Very interested in new products.",
      loyaltyPoints: 100,
      balance: 0,
      totalVisits: 4,
      visitHistory: [
        { date: "2022-01-01", purpose: "Consultation", petName: "Judy", appointmentTime:"1PM", duration:"30 min", employee: "Miranda", price: "$60" },
        { date: "2022-02-18", purpose: "Grooming", petName: "Judy", appointmentTime:"9AM", duration:"60 min", employee: "Cindy", price: "$90" },
        { date: "2023-09-21", purpose: "Training", petName: "Judy", appointmentTime:"2PM", duration:"90 min", employee: "David", price: "$200" },
        { date: "2024-03-02", purpose: "Groming", petName: "Judy", appointmentTime:"3PM", duration:"60 min", employee: "Cindy", price: "$80" },
      ],
      purchaseHistory: [
        { date: "2022-01-01", purpose: "In-store", item: "Product A", amount: 29.99 },
        { date: "2022-11-10", purpose: "In-store", item: "Product B", amount: 59.50 },
        { date: "2022-02-18", purpose: "In-store", item: "Product C", amount: 59.50 },
        { date: "2022-03-22", purpose: "Online", item: "Product B", amount: 59.50 },
        { date: "2022-09-15", purpose: "Online", item: "Product D", amount: 59.50 },
        { date: "2023-03-09", purpose: "Online", item: "Product E", amount: 59.50 },
        { date: "2023-09-21", purpose: "In-store", item: "Product B", amount: 59.50 },
        { date: "2023-11-28", purpose: "In-store", item: "Product A", amount: 59.50 },
        { date: "2023-12-03", purpose: "Online", item: "Product B", amount: 59.50 },
        { date: "2024-03-02", purpose: "In-store", item: "Product B", amount: 59.50 },

      ],
      upcomingAppointments: [
        { date: "2024-07-20", purpose: "Yearly Checkup" },
        { date: "2024-10-15", purpose: "Vaccination" }
      ],
      signedContract: true
    },
    {
      id: 2,
      name: "Client Name 2",
      loyaltyId: "Loyalty ID 2",
      tel: "Tel 2",
      email: "Email 2",
      avatarUrl: "/avatars/avatar2.jpg",
      address: "456 Side St, Villagetown",
      notes: "Prefers email contact.",
      loyaltyPoints: 120,
      balance: 80.00,
      totalVisits: 8,
      visitHistory: [
        { date: "2022-03-05", purpose: "Initial Setup" }
      ],
      purchaseHistory: [
        { date: "2022-06-15", purpose:"Online", item: "Product C", amount: 19.20 }
      ],
      upcomingAppointments: [
        { date: "2023-06-25", purpose: "Routine Maintenance" }
      ],
      signedContract: false
    },
    {
      id: 3,
      name: "Client Name 3",
      loyaltyId: "Loyalty ID 3",
      tel: "Tel 3",
      email: "Email 3",
      avatarUrl: "/avatars/avatar3.jpg",
      address: "123 S Central Ln, El Monte",
      notes: "None",
      loyaltyPoints: 20,
      balance: 100.00,
      totalVisits: 1,
      visitHistory: [
        { date: "2024-01-01", purpose: "Grooming" }
      ],
      purchaseHistory: [
        { date: "2024-01-01", purpose:"Online", item: "Product D", amount: 19 }
      ],
      upcomingAppointments: [
        { date: "2024-08-25", purpose: "Grooming" }
      ],
      signedContract: false
    },
    {
      id: 4,
      name: "Client Name 4",
      loyaltyId: "Loyalty ID 4",
      tel: "Tel 4",
      email: "Email 4",
      avatarUrl: "/avatars/avatar4.jpg",
      address: "330 13th St, San Diego",
      notes: "My dog do not like dryer.",
      loyaltyPoints: 200,
      balance: 500,
      totalVisits: 4,
      visitHistory: [
        { date: "2022-01-05", purpose: "Initial Setup" },
        { date: "2022-03-20", purpose: "Grooming" },
        { date: "2022-09-17", purpose: "Training" },
        { date: "2023-10-23", purpose: "Grooming" }
      ],
      purchaseHistory: [
        { date: "2022-03-20", purpose:"Online", item: "Product A", amount: 21.20 },
        { date: "2023-08-11", purpose:"In-store", item: "Product B", amount: 41 }
      ],
      upcomingAppointments: [
        { date: "2024-07-25", purpose: "Boarding" }
      ],
      signedContract: true
    }
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
            <div key={client.id} className="client-item" onClick={() => handleClientClick(client)}>
              <img src={client.avatarUrl} alt={`${client.name} Avatar`} className="client-avatar" />
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


