const { Doctor } = require("./doctors/doctors.controllers");
const { Admin } = require("./admin/admin.controllers");
const { Appointment } = require("./appointment/appointment.controllers");
const { Customer } = require("./customer/customer.controllers");

module.exports = {
  Doctor,
  Admin,
  Appointment,
  Customer,
};
