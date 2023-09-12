import mongoose from "mongoose";

const models = {};
main();
async function main() {
  await mongoose.connect(
    "mongodb+srv://intern2shawksolution:DB0Fgr9VpNGtWUTR@cluster0.pt5lkzs.mongodb.net/?retryWrites=true&w=majority"
  );

  console.log("successfully connected to mongodb!");
  const GroomerSchema = new mongoose.Schema({
    name: String,
  });
  models.groomer = mongoose.model("Groomer", GroomerSchema);

  const ServiceSchema = new mongoose.Schema({
    service_name: String,
    price: Number,
    Groomer: { type: mongoose.Schema.Types.ObjectId, ref: "Feature" },
  });
  models.service = mongoose.model("Service", ServiceSchema);

  const PetSchema = new mongoose.Schema({
    name: String,
    type: String,
    breed: String,
    birthday: Date,
    gender: String,
    weight: Number,
    Note: String,
  });
  models.pet = mongoose.model("Pet", PetSchema);

  const ClientSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    pet: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet" }],
  });

  models.client = mongoose.model("Client", ClientSchema);

  const AppointmentSchema = new mongoose.Schema({
    client_id: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
    pet_id: { type: mongoose.Schema.Types.ObjectId, ref: "Pet" },
    service_id: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
    groomer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Groomer" },
    start_date: Date,
    start_time: Date,
    end_date: Date,
    end_time: Date,
    status: Number,
    checkIn: Boolean,
  });

  models.appt = mongoose.model("Appointment", AppointmentSchema);
}

export default models;
