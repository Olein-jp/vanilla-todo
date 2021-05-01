# JavaScript で TODO リストアプリを作成する

React の学習の一貫で、プレーンな JavaScript で TODO リストアプリを作成する。

以下、手順や必要なメソッドなどをメモしておくので、同じように学習したい方は参考にしてください。

## 制作の手順

1. HTML と CSS の雛形を作成する
2. タスクを追加ボタンに `#add-button` を付与して、ボタンを押した際の処理の雛形を作成する
3. input に入力された TODO タイトルを取得する
4. TODO タイトルが入力され追加ボタンが押されたら input 内を次のタスク入力のために初期化する
5. 未完了タスクに追加するタスクのアイテム全体の要素を生成する（ `.p-uncomplete-task-list__item` ）
6. TODO タイトルを入れる要素を生成（ `<span></span>` ）
7. `3.` で取得した TODO タイトルを `6.` で生成した要素に挿入する
8. `5.` で生成したタスクアイテム全体の中に `7.` で作成した TODO タイトルを追加する
9. タスクアイテムを未完了タスクに追加する
10. 完了ボタンの生成
11. 完了ボタンに「完了」とテキストを挿入する
12. 削除ボタンの生成
13. 削除ボタンに「削除」とテキストを挿入する
14. タスクアイテムに完了ボタンを追加する
15. タスクアイテムに削除ボタンを追加する
16. 完了ボタン・削除ボタンに CSS クラスを追加する
17. 完了ボタン・削除ボタンが押された際の処理の雛形を作成する
18. 削除ボタンを押した際にタスクアイテムの親要素を取得する
19. `18.` の親要素を使って削除ボタンを押してタスクアイテムを削除
20. 完了ボタンを押した際にタスクアイテムを削除（ `18.` `19.` と同様の処理）
21. 削除処理が重複しているので関数化
22. 完了タスクへ追加するタスクアイテムの親要素を取得する

## 必要なメソッドなど

-
