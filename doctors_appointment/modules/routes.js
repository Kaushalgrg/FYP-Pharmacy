const Doctor = require('./doctors/doctors.routes')
const Admin = require('./admin/admin.routes')
const Appointment = require('./appointment/appointment.routes')
const Customer = require('./customer/customer.routes')

module.exports={
    Doctor,
    Admin,
    Appointment,
    Customer
}