const today = new Date();

// JSTの年を取得
const year = today.getFullYear();  
 // JSTの月を取得。getMonth()は0から11までを返すので、+1を追加
const month = today.getMonth() + 1;  
// JSTの日を取得
const date = today.getDate();  
// "年/月/日"形式でコンソールに出力
console.log(`${year}年${month}月${date}日`);  