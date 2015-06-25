TestMyCode.run("testing helloWorld function", function(assert){
    var result = helloWorld();
    // is the result as we expected?
    assert.equals("hello world!", result);
});