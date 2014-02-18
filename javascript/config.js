var Config = Config || {};
Config.env = 'production';

Config.emails = [
  'oshuma@gmail.com',
  'c.dale.campbell@gmail.com',
];

// Set the app email.
switch(Config.env) {
  case 'production':
    Config.email = Config.emails[1];
    break;
  case 'development':
    Config.email = Config.emails[0];
    break;
  default:
    Config.email = 'test@example.com';
}

// Return an random email.
Config.randomEmail = function() {
  return Config.emails[Math.floor(Math.random() * Config.emails.length)];
}

// Root URL.
Config.root = 'content/code.html';
