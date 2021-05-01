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

  // 16. 完了ボタン・削除ボタンにCSSクラスを追加する
  completeButton.className = "c-button c-button_complete";

  // 11. 完了ボタンに「完了」とテキストを挿入する
  completeButton.innerText = "完了";

  // 17. 完了ボタン・削除ボタンが押された際の処理の雛形を作成する
  completeButton.addEventListener("click", () => {
    // 21. 削除処理が重複しているので関数化
    deleteFromUncompleteList(completeButton.parentNode);

    // 22. 完了タスクへ追加するタスクアイテムの親要素を取得する
    const MoveToCompleteListTarget = completeButton.parentNode;

    // 20. 完了ボタンを押した際にタスクアイテムを削除（ `18.` `19.` と同様の処理）
    // const completeTarget = completeButton.parentNode;
    // document.getElementById("uncomplete-task-list").removeChild(completeTarget);
  });

  /**
   * 削除ボタン
   */
  // 12. 削除ボタンの生成
  const deleteButton = document.createElement("button");

  // 16. 完了ボタン・削除ボタンにCSSクラスを追加する
  deleteButton.className = "c-button c-button_delete";

  // 13. 削除ボタンに「削除」とテキストを挿入する
  deleteButton.innerText = "削除";

  // 17. 完了ボタン・削除ボタンが押された際の処理の雛形を作成する
  deleteButton.addEventListener("click", () => {
    // 21. 削除処理が重複しているので関数化
    deleteFromUncompleteList(deleteButton.parentNode);

    // 18. 削除ボタンを押した際にタスクアイテムの親要素を取得する
    // const deleteTarget = deleteButton.parentNode;

    // 19. `18.` の親要素を使って削除ボタンを押してタスクアイテムを削除
    // document.getElementById("uncomplete-task-list").removeChild(deleteTarget);
  });

  // 8. `5.` で生成したタスクアイテム全体の中に `7.` で作成した TODO タイトルを追加する
  taskItem.appendChild(taskItemTitle);

  // 14. タスクアイテムに完了ボタンを追加する
  taskItem.appendChild(completeButton);

  // 15. タスクアイテムに削除ボタンを追加する
  taskItem.appendChild(deleteButton);

  // 9. タスクアイテムを未完了タスクに追加する
  document.getElementById("uncomplete-task-list").appendChild(taskItem);
};

// 21. 削除処理が重複しているので関数化
const deleteFromUncompleteList = (target) => {
  document.getElementById("uncomplete-task-list").removeChild(target);
};

// 2. 追加ボタンがクリックされたら発火するイベントを作成
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
