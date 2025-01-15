import React, { useState } from "react";
import "./Clients.css";
import ClientDetailModal from "./ClientDetailModal";
import AddClientModal from "./AddClientModal";
import PetDetailModal from "./PetDetailModal"; 
import AddPetModal from "./AddPetModal"; 
import { IoSearchOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";

const Clients = () => {
  const [selectedTab, setSelectedTab] = useState("Clients");
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);
  const [isPetModalOpen, setIsPetModalOpen] = useState(false);
  const [isAddPetModalOpen, setIsAddPetModalOpen] = useState(false); 
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null);
  const [clients, setClients] = useState([
    // clients data
    {
      id: 1,
      name: "Client Name",
      loyaltyId: "Loyalty ID Number",
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
      ],
      upcomingAppointments: [
        { date: "2024-07-20", purpose: "Yearly Checkup" },
        { date: "2024-10-15", purpose: "Vaccination" }
      ],
      signedContract: true
    },
    {
      id: 2,
      name: "Client Name",
      loyaltyId: "Loyalty ID Number",
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
      name: "Client Name",
      loyaltyId: "Loyalty ID Number",
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
      name: "Client Name",
      loyaltyId: "Loyalty ID Number",
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

  const [pets, setPets] = useState([
    // pets data
    {
      id: 1,
      name: "Judy",
      type: "Dog",
      breed: "Golden Retriever",
      age: 3,
      owner: "Client Name ",
      avatarUrl: "/pets/dog.jpg",
      weight: "30 lbs",
      gender: "Female",
      dob: "2021-04-01",
      notes: "Loves to play fetch",
      active: false,
      visitHistory: [
        { date: '2023-01-05', purpose: 'Grooming', appointmentTime: '10 AM', duration: '60 min', employee: 'Emily', price: '$50' },
        { date: '2023-03-10', purpose: 'Vaccination', appointmentTime: '11 AM', duration: '20 min', employee: 'Dr. Smith', price: '$30' },
        { date: '2023-05-01', purpose: 'Grooming', appointmentTime: '1 PM', duration: '30 min', employee: 'Miranda', price: '$60' },
        { date: '2023-06-01', purpose: 'Training', appointmentTime: '2 PM', duration: '45 min', employee: 'John', price: '$40' },
        
      ],
      vaccinationRecord: [
        { date: '2023-01-05', vaccine: 'Rabies', vet: 'Dr. Smith' },
        { date: '2023-03-10', vaccine: 'Distemper', vet: 'Dr. Johnson' },
      ]
    },
    {
      id: 2,
      name: "Max",
      type: "Cat",
      breed: "Siamese",
      age: 5,
      owner: "Client Name ",
      avatarUrl: "/pets/cat.jpg",
      weight: "12 lbs",
      gender: "Male",
      dob: "2019-02-14",
      notes: "Prefers quiet environments",
      active: false,
      visitHistory: [
        { date: '2023-02-15', purpose: 'Check-up', appointmentTime: '1 PM', duration: '30 min', employee: 'Dr. Lee', price: '$40' },
        { date: '2023-04-20', purpose: 'Grooming', appointmentTime: '2 PM', duration: '45 min', employee: 'Anna', price: '$60' },
      ],
      vaccinationRecord: [
        { date: '2023-02-15', vaccine: 'FVRCP', vet: 'Dr. Lee' },
        { date: '2023-04-20', vaccine: 'Rabies', vet: 'Dr. Johnson' },
      ]
    },
    {
      id: 3,
      name: "Buddy",
      type: "Dog",
      breed: "Bulldog",
      age: 4,
      owner: "Client Name ",
      avatarUrl: "/pets/dog.jpg",
      weight: "40 lbs",
      gender: "Male",
      dob: "2018-08-25",
      notes: "Has a sensitive stomach",
      active: false,
      visitHistory: [
        { date: '2023-05-05', purpose: 'Check-up', appointmentTime: '9 AM', duration: '30 min', employee: 'Dr. Brown', price: '$40' },
        { date: '2023-07-10', purpose: 'Vaccination', appointmentTime: '10 AM', duration: '15 min', employee: 'Dr. Green', price: '$25' },
      ],
      vaccinationRecord: [
        { date: '2023-05-05', vaccine: 'Bordetella', vet: 'Dr. Brown' },
        { date: '2023-07-10', vaccine: 'Canine Influenza', vet: 'Dr. Green' },
      ]
    },
    {
      id: 4,
      name: "Bella",
      type: "Dog",
      breed: "Poodle",
      age: 2,
      owner: "Client Name",
      avatarUrl: "/pets/dog.jpg",
      weight: "15 lbs",
      gender: "Female",
      dob: "2020-11-11",
      notes: "Very friendly and playful",
      active: false,
      visitHistory: [
        { date: '2023-06-10', purpose: 'Grooming', appointmentTime: '3 PM', duration: '50 min', employee: 'Sara', price: '$55' },
        { date: '2023-08-20', purpose: 'Check-up', appointmentTime: '11 AM', duration: '25 min', employee: 'Dr. White', price: '$35' },
      ],
      vaccinationRecord: [
        { date: '2023-06-10', vaccine: 'DHPP', vet: 'Dr. White' },
        { date: '2023-08-20', vaccine: 'Leptospirosis', vet: 'Dr. Black' },
      ]
    }
  ]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const handleClientClick = (client) => {
    setSelectedClient(client);
    setIsClientModalOpen(true);
  };

  const handlePetClick = (pet) => {
    setSelectedPet(pet);
    setIsPetModalOpen(true);
  };

  const handleCloseClientModal = () => {
    setIsClientModalOpen(false);
    setSelectedClient(null);
  };

  const handleClosePetModal = () => {
    setIsPetModalOpen(false);
    setSelectedPet(null);
  };

  const handleSaveClient = (updatedClient) => {
    setClients(clients.map(client => client.id === updatedClient.id ? updatedClient : client));
  };

  const handleSavePet = (updatedPet) => {
    setPets(pets.map(pet => pet.id === updatedPet.id ? updatedPet : pet));
  };

  const handleDeleteClient = (clientId) => {
    setClients(clients.filter(client => client.id !== clientId));
    handleCloseClientModal();
  };

  const handleDeletePet = (petId) => {
    setPets(pets.filter(pet => pet.id !== petId));
    handleClosePetModal();
  };

  const handleAddButtonClick = () => {
    if (selectedTab === "Clients") {
      setIsAddClientModalOpen(true);
    } else {
      setIsAddPetModalOpen(true);
    }
  };

  const handleAddClient = (newClient) => {
    setClients([...clients, newClient]);
  };

  const handleAddPet = (newPet) => {
    setPets([...pets, newPet]);
  };

  const handleCloseAddClientModal = () => {
    setIsAddClientModalOpen(false);
  };

  const handleCloseAddPetModal = () => {
    setIsAddPetModalOpen(false);
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
        <div className="search-bar-wrapper">
          <IoSearchOutline className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-icons">
          <CiCirclePlus className="icon" onClick={handleAddButtonClick} style={{ fontSize: '24px' }}/>
        </div>
      </div>
      <div className="clients-list">
        {selectedTab === "Clients" && clients.map((client) => (
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
        {selectedTab === "Pets" && pets.map((pet) => (
          <div key={pet.id} className="client-item" onClick={() => handlePetClick(pet)}>
            <img src={pet.avatarUrl} alt={`${pet.name} Avatar`} className="client-avatar" />
            <div className="client-info">
              <div className="client-name">{pet.name}</div>
              <div className="client-loyalty">{pet.type} - {pet.breed}</div>
            </div>
            <div className="client-details">
              <div className="client-tel">{pet.age} years old</div>
              <div className="client-email">Owner: {pet.owner}</div>
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
      {isPetModalOpen && selectedPet && (
        <PetDetailModal
          pet={selectedPet}
          onClose={handleClosePetModal}
          onSave={handleSavePet}
          onDelete={handleDeletePet}
        />
      )}
      {isAddClientModalOpen && (
        <AddClientModal
          onClose={handleCloseAddClientModal}
          onSave={handleAddClient}
        />
      )}
      {isAddPetModalOpen && (
        <AddPetModal
          onClose={handleCloseAddPetModal}
          onSave={handleAddPet}
        />
      )}
    </div>
  );
};

export default Clients;
