//取得亂數
function getRandom(x) {
    return Math.floor(Math.random() * x) + 1;
}

let arr = [];
let n = 0;

function getPowerNum() {
    for (i = 1; i <= 6; i++) {
        let num = getRandom(38);

        if (arr.indexOf(num) > -1) {
            i--;
            continue;
        } else {
            arr.push(num);
        }
    }

    arr.sort(function (a, b) {
        return a - b;        
    });
    //console.log(arr);
    
    n = getRandom(8);
    // .join在陣列中加入
    return `第一區號碼為:${arr.join(",")}，第二區號碼為:${n}`;
}

alert(getPowerNum());