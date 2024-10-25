var age = 25; // 聲明不可改變的常數 age，並賦值為 25
var userName = "Alice"; // 使用 userName 來避免與全域變數 name 衝突
// 嘗試更改 age 的值
// age = 30; // 這行會引發錯誤，因為 age 是 const，無法更改其值
// 更改 userName 的值
userName = "Bob"; // 不需要重新宣告，直接賦新值即可
console.log("Age:", age); // 輸出 Age: 25
console.log("Name:", userName); // 輸出 Name: Bob
