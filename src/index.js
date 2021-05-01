import "./styles.css";

// 2. クリックイベントを作成
const onClickAdd = () => {
  // 3. input に入力された TODO タイトルを取得する
  const inputTaskTitle = document.getElementById("input-task-title").value;

  // 4. TODOタイトルが入力され追加ボタンが押されたら input 内を次のタスク入力のために初期化する
  document.getElementById("input-task-title").value = "";

  // 5. 未完了タスクに追加するタスクアイテム全体の要素を生成
  const taskItem = document.createElement("li");
  taskItem.className = "p-uncomplete-task-list__item";

  // 6. TODO タイトルを入れる要素を生成
  const taskItemTitle = document.createElement("span");

  // 7. `3.` で取得した TODO タイトルを `6.` で生成した要素に挿入する
  taskItemTitle.innerText = inputTaskTitle;

  /**
   * 完了ボタン
   */
  // 10. 完了ボタンの生成
  const completeButton = document.createElement("button");

  // 11. 完了ボタンに「完了」とテキストを挿入する
  completeButton.innerText = "完了";

  /**
   * 削除ボタン
   */
  // 12. 削除ボタンの生成
  const deleteButton = document.createElement("button");

  // 13. 削除ボタンに「削除」とテキストを挿入する
  deleteButton.innerText = "削除";

  // 8. `5.` で生成したタスクアイテム全体の中に `7.` で作成した TODO タイトルを追加する
  taskItem.appendChild(taskItemTitle);

  // 14. タスクアイテムに完了ボタンを追加する
  taskItem.appendChild(completeButton);

  // 9. タスクアイテムを未完了タスクに追加する
  document.getElementById("uncomplete-task-list").appendChild(taskItem);
};

// 2. 追加ボタンがクリックされたら発火するイベントを作成
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
