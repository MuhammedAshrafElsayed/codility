module.exports = function solution(A) {
    let max_profit = 0;
    let min_buy = A[0];
    let max_sell = A[1];
    // [10,10,10,2,2,1]
    for (let i = 0; i < A.length; i++) {
        min_buy = min(A[i], min_buy);
        if (A[i] < min_buy && (A[i+1] - A[i]) > max_profit) {
            
        }
        max_sell = max(A[i+1], max_sell);
        max_profit = max(max_profit, max_sell - min_buy);
        console.log('alexa',max_sell, min_buy,max_profit, max_sell - min_buy);
        
    }
    return max_profit;
 };

function max(x,y) {
    if (x>y) {
        return x;
    } else return y;
}

function min(x,y) {
    if (x<y) {
        return x;
    } else return y;
}

function maxSlice(A) {
    let max_profit = 0;
    for (let i = 0; i < A.length; i++) {
        const p = A[i];
        for (let j = i + 1; j < A.length; j++) {
            const s = A[j];
            max_profit = max(max_profit, s-p);
        }
    }
    return max_profit;
 };
 