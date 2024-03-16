// Console.log Sortcut
function log(a) {
    console.log(a);
}
// ---------------------------------------------------------
{


// Main Array
    let A = [50,107, 'jack', 83, 'killer', 'son', true];

    // 1. String =======================
    let x1 = A.filter(func2);
    log(x1);

    function func2(value) {
        return typeof value  === "string";
    }


// 2. Number ============= 
    let x = A.filter(func1);

    x.sort((a, b) => {return a- b});

    function func1(value) {
        return typeof value === "number";
    }
    
    log(x);


    // 3. Make the string array reverse
    let revers = x1.reverse();
    log(revers);


    //  4. Concat Number and String===
    let additaion = x.concat(x1);
    
    log(additaion);

    // 5. Delete items form addation array===
    let del = additaion.splice(3);

    log(del);

    // 6. which are less than 100?======
    let les = A.filter(func3);
    
    function func3(value){
        return value > 100;
    }

    log(les);

    // 7. add word 'str' before each of them
    let pp = x1.pop();
    let str = x1.push("str");
    log(x1);

    
}