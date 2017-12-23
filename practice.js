function FirstNotRepeatingChar(str)
{
    // write code here
    let len = str.length;
    let count = {}
    let index = -1
    for (let i = 0; i < len; i ++){
        let ch = str.charAt(i);
        if(count[ch]){
            count[ch] ++;
        } else {
            count[ch] = 1;
        }
    }
    for (let i = 0; i < len; i ++){
        let ch = str.charAt(i);
        console.log(ch, i)
        if(count[ch] === 1){
            index = ch + i;
        }
    }
    console.log(index)
}
function GetNumberOfK(data, k)
{
    let len = data.length;
    let times = 0;
    let begin = 0;
    let end = 0;
    let p = 0, q = len - 1, mid = Math.floor((q - p) / 2);
    while (p < q){
        mid = Math.floor((q + p) / 2);
        if(data[mid] > k){
            q = mid - 1;
        } else if (data[mid] < k){
            p = mid + 1;
        } else{
            if(data[mid - 1] !== k){
                begin = mid - 1;
                break;
            } else {
                q = mid - 1;
            }
        }
    }
    p = 0, q = len - 1;
    while (p < q){
        mid = Math.floor((q + p) / 2);
        if(data[mid] > k){
            q = mid - 1;
        } else if (data[mid] < k){
            p = mid + 1;
        } else{
            if(data[mid + 1] !== k){
                end = mid + 1;
                break;
            } else {
                p = mid + 1;
            }
        }
    }
    console.log( end - begin - 1)
}
// GetNumberOfK([1,2,3, 4 , 5 , 6 ,7,8,9,9,9,9, 9 ,9,10,10,11,12,13,14,15,15,16,17,18,19],9)
// GetNumberOfK([1,3,3,3,3,4,5],2)
function duplicate(numbers, duplication)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let result = -1;
    let flag = false;
    let len = numbers.length;
    let temp = 0;
    if(len > 0){
        for(let i = 0; i < len && !flag;  i ++){
            temp = numbers.unshift();
            if(numbers.indexOf(temp) !== -1){
                flag = true;
                duplication[0] = temp;
                break;
            }
        }
    }
    console.log(flag, duplication)
    return flag;
}
// duplicate([2, 1, 3, 1, 4], [])
//扑克总共是54 + 2张
//13张+2*2个大王
//0*2*2加上1-13
function IsContinuous(numbers) {
    let len = numbers.length;
    let flag = true;
    if(len <= 0){
        flag = false;
    }
    let count = new Array(13)
    let max = -1;
    let min = 14;
    let temp;
    for(let i = 0; i < 13; i ++){
        count[i] = 0;
    }
    for (let i = 0; i < len && flag; i ++){
        temp = numbers[i];
        if(temp === 0){
            continue;
        }
        if(++count[temp] > 1){
            flag = false
        }
        if(max < temp){
            max = temp;
        }
        if(min > temp){
            min = temp;
        }
    }
    if(max - min >= 5){
        flag = false;
    }
    return flag;
}
// IsContinuous([1,3,2,5,4])

function GetNumberOfK (data, k){
    let len = data.length;
    if(len <= 0){
        return 0;
    }
    let p = 0, q = len - 1, mid;
    let begin = end = -1;
    //找开头
    while(p <= q){
        mid = Math.ceil((p + q) / 2)
        if(data[mid] > k){
            q = mid - 1
        } else if (data[mid] < k){
            p = mid + 1
        } else {
            if(mid === 0){
                begin = 0;
                break;
            } else if( data[mid - 1] !== k){
                begin = mid;
                break;
            } else {
                q = mid - 1;
            }
        }
    }
    p = 0;
    q = len - 1;
    //找结尾
    while(p <= q){
        mid = Math.ceil((p + q) / 2)
        if(data[mid] > k){
            q = mid - 1;
        } else if(data[mid] < k){
            p = mid + 1
        } else {
            if(mid === len){
                end = len + 1;
                break;
            } else if (data[mid + 1] !== k){
                end = mid + 1;
                break;
            } else {
                p = mid + 1
            }
        }
    }
    if(begin === -1){
        return 0;
    }
    return (end - begin);
}
// GetNumberOfK([1,2,3,3,3,3,4,5],3)
const getJSON = function (url) {
    const promise = new Promise(function(resolve, reject){
        const handler = function () {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(this.response);
            }
        }
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url)
        xhr.onreadystatechange = handler;
        xhr.send()
    })
    return promise
}

const promise = function(something){
    new Promise(function (resolve, reject) {
        //success
        if(1){
            resolve()
        } else {
            reject()
        }
    })
}
// promise('12121212121212121').then(resovle(), reject())

function Convert(pRootOfTree){
    if(pRootOfTree == null){
        return null;
    }
    walking(pRootOfTree, null)
    let result = pRootOfTree
    while(result.left){
        result = result.left
    }
    return result
}
function walking (cur, pre){
    if(cur == null){
        return ;
    }
    walking(cur.left, pre)
    cur.left = pre;
    if(pre){
        pre.right = cur
    }
    arguments.callee(cur.right, cur)
}
