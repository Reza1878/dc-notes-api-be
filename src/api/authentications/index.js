const AuthenticationsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'authentications',
  version: '1.0.0',
  register: async (server, options) => {
    const { authService, userService, tokenManager, validator } = options;
    const handler = new AuthenticationsHandler(
      authService,
      userService,
      tokenManager,
      validator,
    );
    server.route(routes(handler));
  },
};
