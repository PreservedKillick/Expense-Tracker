describe("Contact", function() {
  describe('initialize', function(){
    it("gives the contact object firstName and lastName properties", function(){
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.firstName.should.equal("Mary");
      testContact.lastName.should.equal("Jane");
    });
    it("gives the contact object an array called addresses", function(){
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.addresses.should.eql([]);
    });
  });
  beforeEach(function() {
  Contact.all = [];
  });
  describe("create", function() {
    it("creates a Contact object instance", function() {
      var testContact = Contact.create();
      Contact.isPrototypeOf(testContact).should.equal(true);
    });
    it("initializes the new instance of Contact", function(){
      var testContact = Contact.create();
      testContact.addresses.should.eql([]);
    });
    it("adds the contact to the .all property", function() {
      var testContact = Contact.create();
      Contact.all.should.eql([testContact]);
    });
  });
  describe("createAddress", function() {
    it("creates an address object", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      Address.isPrototypeOf(testAddress).should.equal(true);
    });

    it("adds the address to the addresses property of the contact", function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      testContact.addresses.should.eql([testAddress]);
    });
  });
});
