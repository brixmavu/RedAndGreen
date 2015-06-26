TestMyCode.run("testing helloWorld function", function(assert){
    var result = helloWorld();
    // is the result as we expected?
    assert.equals("hello world!", result);
});


TestMyCode.run("testing File function", function(assert){
    var result = File();
    // is the result as we expected?
    assert.equals("File!", result);
});


TestMyCode.run("testing file2 function", function(assert){
    var result = file2();
    // is the result as we expected?
    assert.equals("file2!", result);
});
