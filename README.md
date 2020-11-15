# api-solo-project

## これは何？

スキー板やスキー板メーカーの操作APIです。  
<br>
<br>




## スキー板関連API一覧

### スキー板一覧参照API
GET http://localhost:3000/skis/

スキー板一覧が取得できます。
以下のようにid指定で取得することも可能です。
```
GET http://localhost:3000/skis/:id
```

### スキー板追加API

POST http://localhost:3000/skis/

スキー板に情報を追加できます。
あなたのおすすめの板を追加してください。

以下のようにJSON形式をBODYに載せてPOSTします。
※makerIdは、メーカー一覧参照APIで取得してください。

```
{
    "Name":"あなたのスキー板",
    "Detail":"のりごこちを書いてください",
    "makerId":2
}
```

### スキー板削除API

DELETE http://localhost:3000/skis/:id

スキー板の情報を削除できます。
不要な板を削除してください。

※:Idは、スキー板一覧参照APIで取得してください。


## スキーメーカー関連API一覧

<br>
<br>

### スキーメーカー一覧参照API
GET http://localhost:3000/makers/

スキーメーカー一覧が取得できます。
以下のようにid指定で取得することも可能です。
```
GET http://localhost:3000/makers/:id
```

### スキー板追加API

POST http://localhost:3000/makers/

スキーメーカーに情報を追加できます。
あなたのおすすめのメーカーを追加してください。

以下のようにJSON形式をBODYに載せてPOSTします。
※makerIdは、メーカー一覧参照APIで取得してください。

```
{
    "MakerName":"あなたの好きなメーカー",
    "Detail":"どんなメーカーですか？",
}
```

### メーカー削除API

DELETE http://localhost:3000/makers/:id

メーカーの情報を削除できます。
嫌いなメーカーを削除してください。

※:Idは、メーカー板一覧参照APIで取得してください。

