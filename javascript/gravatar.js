Gravatar.base_url = 'http://gravatar.com/avatar';

Gravatar.defaults = {
  ext: 'png',  // Image Format
  rating: 'g', // Rating
  size: '512', // Size
}; // Gravatar.defaults


/**
 * Gravatar Javascript class.
 *
 * @constructor
 * @param {String} email The person's email address.
 * @return A Gravatar object.
 * @type Gravatar
 */
function Gravatar(email, options) {
  this.email = email;
  this.options = options;
  this.hash = $.md5(email);
  this.url = this.buildURL();
} // Gravatar()


Gravatar.prototype.buildURL = function() {
  var imageLink = '';
  // Create the URL and add the email hash.
  imageLink += Gravatar.base_url + '/' + this.hash;

  // Tack on the image format.
  imageLink += '.' + Gravatar.defaults.ext;

  // Finally add the params (image options).
  imageLink += '?'; // separator
  imageLink += $.param({
    r: Gravatar.defaults.rating,
    s: Gravatar.defaults.size,
  });

  return imageLink;
} // buildURL()
