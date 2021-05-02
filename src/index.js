import "./styles.css";

// 2. クリックイベントを作成
const onClickAdd = () => {
  // 3. input に入力された TODO タイトルを取得する
  const inputTaskTitle = document.getElementById("input-task-title").value;

  // 4. TODOタイトルが入力され追加ボタンが押されたら input 内を次のタスク入力のために初期化する
  document.getElementById("input-task-title").value = "";

  // 37. 未完了タスクへタスクを追加する処理を関数化する
  moveToCompleteList(inputTaskTitle);
};

// 21. 削除処理が重複しているので関数化
const deleteFromUncompleteList = (target) => {
  document.getElementById("uncomplete-task-list").removeChild(target);
};

// 37. 未完了タスクへタスクを追加する処理を関数化する
const moveToCompleteList = (text) => {
  // 5. 未完了タスクに追加するタスクアイテム全体の要素を生成
  const taskItem = document.createElement("li");
  taskItem.className = "p-uncomplete-task-list__item";

  // 6. TODO タイトルを入れる要素を生成
  const taskItemTitle = document.createElement("span");

  // 7. `3.` で取得した TODO タイトルを `6.` で生成した要素に挿入する
  taskItemTitle.innerText = text;

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

    // 23. タスクアイテムの TODO タイトルを変数へ抜き出す
    const MoveToCompleteListTargetTitle =
      MoveToCompleteListTarget.firstElementChild.innerText;

    // 24. タスクアイテムの内容を初期化する
    MoveToCompleteListTarget.textContent = null;

    // 25. 完了タスクへ追加する TODO タイトルを入れる要素を生成する（ `<span></span>` ）
    const taskItemTitle = document.createElement("span");

    // 26. 完了タスクへ追加するタスクアイテムに TODO タイトルを挿入する
    taskItemTitle.innerText = MoveToCompleteListTargetTitle;

    // 27. TODO タイトルをタスクアイテムに挿入する
    MoveToCompleteListTarget.appendChild(taskItemTitle);

    // 28. 戻すボタンの生成
    const returnButton = document.createElement("button");

    // 31. 戻すボタンに CSS クラスを追加する
    returnButton.className = "c-button c-button_return";

    // 29. 戻すボタンに「戻る」とテキストを挿入する
    returnButton.innerText = "戻す";

    // 33. 戻すボタンが押された際の処理の雛形を作成する
    returnButton.addEventListener("click", () => {
      // 34. 完了タスクから（戻すために）削除するタスクを変数に入れる
      const MoveToUncompleteListTarget = returnButton.parentNode;

      // 35. 完了タスクから削除する
      document
        .getElementById("complete-task-list")
        .removeChild(MoveToUncompleteListTarget);

      // 36. 戻すタスク名を取得する
      const taskItemTitle = returnButton.parentNode.firstElementChild.innerText;

      // 37. 未完了タスクへタスクを追加する処理を関数化する
      moveToCompleteList(taskItemTitle);
    });

    // 30. 戻すボタンをタスクアイテムに挿入する
    MoveToCompleteListTarget.appendChild(returnButton);

    // 32. 完了タスクに TODO アイテムを追加する
    document
      .getElementById("complete-task-list")
      .appendChild(MoveToCompleteListTarget);

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

// 2. 追加ボタンがクリックされたら発火するイベントを作成
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
