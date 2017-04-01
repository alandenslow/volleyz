describe('starter.js test suite',function(){
  
    var URL = "";
    

    beforeEach(function(){
   
    });

    it("should have starter.js defined", function(){
      var starter = new Starter();
      expect(starter).toBeDefined();
      expect(starter.doStuff).toBeDefined();
      expect(starter.doStuff()).toBe(true);
    });
});