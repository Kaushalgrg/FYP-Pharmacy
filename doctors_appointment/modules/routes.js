const Doctor = require('./doctors/doctors.routes')
const Admin = require('./admin/admin.routes')
const Appointment = require('./appointment/appointment.routes')
const Customer = require('./customer/customer.routes')
const Product = require('./products/products.routers')
const Order = require('./order/order.routes')

module.exports={
    Doctor,
    Admin,
    Appointment,
    Customer,
    Product,
    Order
}