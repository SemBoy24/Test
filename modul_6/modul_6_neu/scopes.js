



function scopeTest() {
    let testScopeVar = "hello world";
    if(true){
        console.log(testScopeVar);
    }
}


// So geht es nicht

    function scopeTestOne() {
        let testScopeVar = "hello world";
        scopeTestOne(); // let geht nicht in die zweite function
    }

    function scopeTestTwo() {
        console.log(testScopeVar);
    }
// 