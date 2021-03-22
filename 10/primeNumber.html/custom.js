// let isPrime = true;
// for (let dividend = 2; dividend <= 10; dividend++) {
//     for (let divisor = 2; divisor < dividend; divisor++) {
//         if (dividend % divisor == 0) {
//             isPrime = false;
//         }
//     }
//     if (isPrime != true) {
//         console.log(`${dividend} 不是 質數 `);
//         isPrime = true;
//要改繼續相信 為ture  繼續執行
//     } else {
//         console.log(`${dividend}是 質數`);
//     }
// }


// for (let i = 2; i <= 4; i++) {
//     let isPrime = true; //再重新相信為true
//     // j < i分子小於分母時 都會執行
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//             //i % j == 0  相除餘數為0  //整除
//             isPrime = false; //則為false
//         }
//     }
//     if (isPrime == false) {
//         // 可整除 不是質數
//         console.log(`${i} != 質數 `);      
//     } else {
//         // 不可整除 是質數
//         console.log(`${i} == 質數`);
//     }
// }


for (let dividend = 2; dividend <= 10; dividend++) {
    let isPrime = true; //再重新相信為true
    // divisor < dividend分子小於分母時 都會執行
    for (let divisor = 2; divisor < dividend; divisor++) {
        if (dividend % divisor == 0) {
            //dividend % divisor == 0  相除餘數為0  //整除
            isPrime = false; //則為false
        }
    }
    if (isPrime == false) {
        // 可整除 不是質數
        console.log(`${dividend} 不是 質數 `);      
    } else {
        // 不可整除 是質數
        console.log(`${dividend}是 質數`);
    }
}