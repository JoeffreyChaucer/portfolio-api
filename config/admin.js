module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '498d52e657d1d410f73f63be0c546c45'),
  },
});
