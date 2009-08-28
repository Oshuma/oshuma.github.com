Gravatar.base_url = 'http://gravatar.com/avatar';

Gravatar.defaults = {
  ext: 'png', // Image Format
  params: {   // URL Params
    r: 'g',   // Rating
    s: '80',  // Size
  },
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
  this.options = this.mergeOptions(options);
  this.hash = $.md5(email);
  this.url = this.buildURL();
} // Gravatar()


Gravatar.prototype.buildURL = function() {
  var imageLink = '';
  // Create the URL and add the email hash.
  imageLink += Gravatar.base_url + '/' + this.hash;
  // Tack on the image format.
  imageLink += '.' + this.options.ext;
  // Finally add the params (image options).
  imageLink += '?'; // separator
  imageLink += $.param({
    r: this.options.r,
    s: this.options.s,
  });

  return imageLink;
} // buildURL()


Gravatar.prototype.mergeOptions = function(options) {
  var merged = {};
  // for (key in options) {
  // }
  return merged;
} // mergeOptions()
