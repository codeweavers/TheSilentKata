describe("Program", function() {
  var program;

  beforeEach(function() {
    program = new Program();
  });

  it("should fail", function() {
    expect(program.hello()).toEqual(false);
  });

});
