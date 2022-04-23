const server_url = 'http://localhost:4000';
const base_url = server_url + '/api/v1';

module.exports = {
  DOCTORS: base_url + '/doctors',
  ADMIN: base_url + '/admin',
  CUSTOMER: base_url + '/customer',
  APPOINTMENT: base_url + '/appointment',
  PRODUCTS: base_url + '/products',
  ORDERS: base_url + '/order',
  MEDICINES: base_url + "/medicines",
};
