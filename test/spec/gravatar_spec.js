Screw.Unit(function() {

  describe('Gravatar', function() {

    // Setup
    var gravatar = null;
    var email    = null;
    var hash     = null;
    before(function() {
      email    = 'test@example.com';
      hash     = $.md5(email);
      gravatar = new Gravatar(email);
    });

    it('should have an email', function() {
      expect(gravatar.email).to(equal, email);
    });

    it('should have a hash', function() {
      expect(gravatar.hash).to(equal, hash);
    });

    it('should have a url', function() {
      pending('Needs a RegEx test.');
    });

  }); // Gravatar

}); // Screw.Unit()
