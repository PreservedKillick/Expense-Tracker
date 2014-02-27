describe('Purchase', function(){
  describe('initialize',function(description,amount){
    it('will add the description and amount properties to the Purchase object instance', function(){
      var testPurchase = Object.create(Purchase);
      testPurchase.initialize("blah", "$5");
      testPurchase.description.should.equal("blah");
      testPurchase.amount.should.equal("$5");
    });
  });
});
