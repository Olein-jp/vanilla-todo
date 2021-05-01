import "./styles.css";

// 2. クリックイベントを作成
const onClickAdd = () => {
  alert("追加ボタンをクリック");
};

// 2. 追加ボタンがクリックされたら発火するイベントを作成
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
