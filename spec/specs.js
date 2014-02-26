describe("PhoneNumber", function() {
  describe("create", function() {
    it("creates a PhoneNumber object instance", function() {
      var testPhoneNumber = PhoneNumber.create("5039999999");
      PhoneNumber.isPrototypeOf(testPhoneNumber).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("gives the PhoneNumber object instance property of number", function() {
      var testPhoneNumber = Object.create(PhoneNumber);
      testPhoneNumber.initialize('5039999999');
      testPhoneNumber.number.should.equal("5039999999");
    });
  });   
  describe("valid", function() {
    it("returns true if the phone number is 10 characters long", function() {
      var testNumber = PhoneNumber.create('1234567890');
      testNumber.valid().should.equal(true);
    });
    it("returns false if the phone number is not 10 characters long", function() {
      var testNumber = PhoneNumber.create('123456789');
      testNumber.valid().should.equal(false);
    });
    it("returns false if the phone number contains non-number characters", function() {
      var testNumber = PhoneNumber.create('123456789p');
      testNumber.valid().should.equal(false);
    });
  });
});   
describe("Address", function() {
  describe("create", function() {
    it("creates an Address object instance", function() {
      var testAddress = Address.create();
      Address.isPrototypeOf(testAddress).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("gives the Address object instance properties of street, city, state, and zipCode", function() {
      var testAddress = Object.create(Address);
      testAddress.initialize("3 B st.", "Portland", "OR", "97217");
      testAddress.street.should.equal("3 B st.");
      testAddress.city.should.equal("Portland");
      testAddress.state.should.equal("OR");
      testAddress.zipCode.should.equal("97217");
    });
  });      
  describe("valid", function() {
    it("returns true if the zip code is 5 characters long", function() {
      var testAddress = Object.create(Address);
      testAddress.zipCode = "12345";
      testAddress.street = " ";
      testAddress.city = "Portland";
      testAddress.state = "OR";
      testAddress.valid().should.equal(true);
    });
  });
});     
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
  Contact.addresses = [];
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
  describe("createPhoneNumber", function() {
    it("creates a PhoneNumber object", function() {
      var testContact = Contact.create();
      var testPhoneNumber = testContact.createPhoneNumber();
      PhoneNumber.isPrototypeOf(testPhoneNumber).should.equal(true);
    });

    it("adds the phone number to the phoneNumbers property of the contact", function() {
      var testContact = Contact.create();
      var testPhoneNumber = testContact.createPhoneNumber();
      testContact.phoneNumbers.should.eql([testPhoneNumber]);
    });
  });
});
