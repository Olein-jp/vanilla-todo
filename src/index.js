import "./styles.css";

// 2. クリックイベントを作成
const onClickAdd = () => {
  // 3. input に入力された TODO タイトルを取得する
  const inputTaskTitle = document.getElementById("input-task-title").value;

  // 4. TODOタイトルが入力され追加ボタンが押されたら input 内を次のタスク入力のために初期化する
  document.getElementById("input-task-title").value = "";

  // 5. 未完了タスクに追加するタスクアイテム全体の要素を生成
  const taskItem = document.createElement("li");
  taskItem.classname = "p-uncomplete-task-list__item";

  // 6. TODO タイトルを入れる要素を生成
  const taskItemTitle = document.createElement("span");

  // 7. `3.` で取得した TODO タイトルを `6.` で生成した要素に挿入する
  taskItemTitle.innerText = inputTaskTitle;
};

// 2. 追加ボタンがクリックされたら発火するイベントを作成
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
