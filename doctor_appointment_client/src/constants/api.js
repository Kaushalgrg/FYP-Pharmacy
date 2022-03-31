const server_url = 'http://localhost:4000';
const base_url = server_url + '/api/v1';

module.exports = {
  DOCTORS: base_url + '/doctors',
  ADMIN: base_url + '/admin',
  APPOINTMENT: base_url + '/appointment',
};
