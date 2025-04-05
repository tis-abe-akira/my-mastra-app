# プロジェクト登録処理

**セクション1: プロジェクト登録処理**

*   **概要:**
    *   `ProjectAction.java` の `save` メソッドでプロジェクトの登録処理を行う。
    *   `@POST` アノテーションにより、HTTP POSTリクエストを受け付ける。
    *   リクエストボディはJSON形式で、`ProjectForm` にマッピングされる。
    *   `@Valid` アノテーションにより、入力値のバリデーションが行われる。
*   **処理の流れ:**
    1.  `ProjectForm` の内容を `Project` エンティティにコピーする。
    2.  `UniversalDao.insert` メソッドを使用して、データベースに登録する。
    3.  HTTPステータスコード 201 (CREATED) を返す。
*   **関連クラス:**
    *   `ProjectAction.java`
    *   `ProjectForm.java`
    *   `Project.java`
    *   `UniversalDao.java`

# プロジェクト検索処理

**セクション2: プロジェクト検索処理**

*   **概要:**
    *   `ProjectAction.java` の `list` メソッドでプロジェクトの検索処理を行う。
    *   `@GET` アノテーションにより、HTTP GETリクエストを受け付ける。
    *   リクエストパラメータは `ProjectSearchForm` にマッピングされる。
    *   `@Valid` アノテーションにより、入力値のバリデーションが行われる。
*   **処理の流れ:**
    1.  `ProjectSearchForm` の内容を `ProjectSearchDto` にコピーする。
    2.  `UniversalDao.findAll` メソッドを使用して、データベースからプロジェクト情報を検索する。
    3.  検索結果を `ProjectResponseDto` のリストに変換する。
    4.  `ProjectResponseDto` のリストをJSON形式で返す。
*   **関連クラス:**
    *   `ProjectAction.java`
    *   `ProjectSearchForm.java`
    *   `ProjectSearchDto.java`
    *   `ProjectResponseDto.java`
    *   `Project.java`
    *   `UniversalDao.java`

# プロジェクト更新処理

**セクション3: プロジェクト更新処理**

*   **概要:**
    *   `ProjectAction.java` の `update` メソッドでプロジェクトの更新処理を行う。
    *   `@PUT` アノテーションにより、HTTP PUTリクエストを受け付ける。
    *   リクエストボディはJSON形式で、`ProjectUpdateForm` にマッピングされる。
    *   `@Valid` アノテーションにより、入力値のバリデーションが行われる。
*   **処理の流れ:**
    1.  `ProjectUpdateForm` の内容を `Project` エンティティにコピーする。
    2.  `UniversalDao.update` メソッドを使用して、データベースのプロジェクト情報を更新する。
    3.  HTTPステータスコード 200 (OK) を返す。
*   **関連クラス:**
    *   `ProjectAction.java`
    *   `ProjectUpdateForm.java`
    *   `Project.java`
    *   `UniversalDao.java`

*   **概要:**
    *   `ProjectAction.java` の `patch` メソッドでプロジェクト名のみ更新する。
    *   `@PATCH` アノテーションにより、HTTP PATCHリクエストを受け付ける。
    *   リクエストボディはJSON形式で、`ProjectRenameForm` にマッピングされる。
    *   `@Valid` アノテーションにより、入力値のバリデーションが行われる。
*   **処理の流れ:**
    1.  `ProjectRenameForm` からプロジェクトIDを取得し、`UniversalDao.findById` で該当する `Project` エンティティを取得する。
    2.  `ProjectRenameForm` のプロジェクト名で `Project` エンティティのプロジェクト名を更新する。
    3.  `UniversalDao.update` メソッドを使用して、データベースのプロジェクト情報を更新する。
    4.  HTTPステータスコード 204 (NO_CONTENT) を返す。（リソースの内容は返さない）
*   **関連クラス:**
    *   `ProjectAction.java`
    *   `ProjectRenameForm.java`
    *   `Project.java`
    *   `UniversalDao.java`

# REST API 設計

**セクション4: REST API 設計**

*   **エンドポイント:**
    *   `/projects`: プロジェクトに関する操作のエンドポイント
*   **HTTPメソッド:**
    *   `GET`: プロジェクトの検索
    *   `POST`: プロジェクトの登録
    *   `PUT`: プロジェクトの更新
    *   `PATCH`: プロジェクト名のみ更新
*   **MediaType:**
    *   `application/json`: リクエストとレスポンスのMediaType
*   **バリデーション:**
    *   `@Valid` アノテーションを使用して、リクエストパラメータのバリデーションを行う。
*   **HTTPステータスコード:**
    *   `200 OK`: 正常に処理が完了した場合
    *   `201 Created`: リソースが正常に作成された場合
    *   `204 No Content`: リクエストは正常に処理されたが、レスポンスボディは返さない場合
*   **その他:**
    *   NablarchのRESTful Web Service機能を使用している。
    *   DIコンテナの設定ファイルは `rest-boot.xml` で定義されている。
    *   ハンドラキュー構成は `rest-component-configuration.xml` で定義されている。

# データベースアクセス

**セクション5: データベースアクセス**

*   **概要:**
    *   `UniversalDao` を使用してデータベースアクセスを行う。
*   **データベース:**
    *   H2データベースを使用。
*   **設定ファイル:**
    *   `connection-factory-datasource.xml`: データベース接続情報を設定
    *   `db-statement-factory.xml`: SQL実行用オブジェクト生成コンポーネントの設定
*   **その他:**
    *   `Project.sql` にエンティティ定義SQLが記述されている。