module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      url: env("MY_HEROKU_URL"),
    };
  }

  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    admin: {
      auth: {
        secret: env("ADMIN_JWT_SECRET", "2d50e136d85c1aeea3bbd767004a6407"),
      },
    },
  };
};
