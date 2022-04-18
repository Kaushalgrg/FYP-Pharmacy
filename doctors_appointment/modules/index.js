const { Doctor } = require("./doctors/doctors.controllers");
const { Admin } = require("./admin/admin.controllers");
const { Appointment } = require("./appointment/appointment.controllers");
const { Customer } = require("./customer/customer.controllers");
const {Product} = require("./products/products.controllers");
const {Order} = require("./order/order.controllers")

module.exports = {
  Doctor,
  Admin,
  Appointment,
  Customer,
  Product,
  Order
};
