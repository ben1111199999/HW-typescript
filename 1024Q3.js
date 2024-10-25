// 定義函數 printMultiplicationTable，用來輸出 1 到 9 的九九乘法表
function printMultiplicationTable() {
    // 外層迴圈：控制第一個數字 i，從 1 到 9
    for (var i = 1; i <= 9; i++) {
        // 內層迴圈：控制第二個數字 j，從 1 到 9
        for (var j = 1; j <= 9; j++) {
            // 輸出格式：i x j = (i * j)
            console.log("".concat(i, " x ").concat(j, " = ").concat(i * j));
        }
        // 每一層完成後換行，便於區分每一行
        console.log("");
    }
}
// 呼叫函數來列印完整的乘法表
printMultiplicationTable();
