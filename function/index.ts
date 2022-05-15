// 1. 写一个函数，该函数用于判断某个数是不是奇数
function isOdd(num: number) {
    if(typeof num !=="number") return;
    return num % 2 === 0;
}

// 2. 写一个函数，该函数用于判断某个数是不是素数
function isPrime(num: number) {
    if(typeof num !== 'number' || num % 1 !== 0 || num < 2) return;
    for(let i = 2; i < num; i++){
        if(num % i === 0) {
            return false
        }
    }
    return true;
}

// 写一个函数，该函数用于对数组求和
function sumOfArray(arr: number[]) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

// 写一个函数，该函数用于得到数组中的最大值
function getMaxOfArray(arr: number[]) {
    const arrLength = arr.length;
    for(let i = 0; i < arrLength; i++) {
        for(let j = 0; j<arrLength - i; j++) {
            if(arr[j] > arr[j+1]) {
                let a = 0;
                a = arr[j];
                arr[j+1] = arr[j];
                arr[j] = a;
            }
        }
    }
    return arr[arrLength-1];
}

// 5. 写一个函数，该函数用于得到数组中的最小值
function getMinOfArray(arr: number[]) {
    const arrLength = arr.length;
    for(let i = 0; i < arrLength; i++) {
        for(let j = 0; j<arrLength - i; j++) {
            if(arr[j] > arr[j+1]) {
                let a = 0;
                a = arr[j];
                arr[j+1] = arr[j];
                arr[j] = a;
            }
        }
    }
    return arr[0];
}

// 6. 写一个函数，该函数用于判断数组是否是稀松数组
function hasEmptyInArray(arr: number[]) {
    // 稀松数组的特点：下标连续
    for (var i = 0; i < arr.length; i++) {
        if (!(i in arr)) {
            return true;
        }
    }
    return false;
}

// 写一个函数，判断该某年是否是闰年
function isLeap(num) {
    if(typeof num !=="number" || num % 1 !== 0 || num < 0 ) return;
    return (num % 400 === 0) || (num % 100 !== 0 && num % 4 == 0);
}

// 写一个函数，得到某年某月的天数
/**
 * 得到某年某月的天数
 * @param {*} year 
 * @param {*} month 
 */
// 月份小于8且为奇数月或者偶数月月份大于8，每月为31天
// 其他的为30天
function getDays(year, month) {
    if (month === 2) {
        return isLeap(year) ? 29 : 28;
    }
    else if (month < 8 && isOdd(month) || month >= 8 && !isOdd(month)) {
        return 31;
    }
    else {
        return 30;
    }
}

// 得到数组中出现频率最高的数字和频率
function getTopFreqInArray(arr: number[]) {
    var record = {};
    for(let i = 0; i<arr.length; i++) {
        let n = arr[i];
        if(record[n]) {
            record[n] ++;
        } else {
            record[n] = 1;
        }
    }
    var keys = Object.keys(record);
    var values: any = Object.values(record);
    var maxIndex = values.findIndex((item) => item === getMaxOfArray(values));
    return {
        key: keys[maxIndex],
        value: values[maxIndex]
    }
}

// # 函数使用

// 1. 利用上面的某些函数，实现哥德巴赫猜想

// 任一大于2的偶数都可写成两个质数之和，比如：8 = 3 + 5

// 让用户输入一个大于2的整数，输出其等于哪两个素数相加

// 2. 让用户输入一个年份，输出该年每个月的天数