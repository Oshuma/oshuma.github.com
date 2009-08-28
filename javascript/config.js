var Config = Config || {};

/* Config.env = 'production'; */
Config.env = 'development';

switch(Config.env) {
  case 'production':
    Config.email = 'dale.campbell@wavesandbox.com';
    break;
  case 'development':
    Config.email = 'oshuma@gmail.com';
    break;
  default:
    Config.email = 'test@example.com';
}

Config.root = 'content/me.html';
