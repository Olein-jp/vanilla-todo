import "./styles.css";

// 2. クリックイベントを作成
const onClickAdd = () => {
  // 3. input に入力された TODO タイトルを取得する
  const inputTaskTitle = document.getElementById("input-task-title").value;
  // 4. TODOタイトルが入力され追加ボタンが押されたら input 内を次のタスク入力のために初期化する
  document.getElementById("input-task-title").value = "";
};

// 2. 追加ボタンがクリックされたら発火するイベントを作成
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
