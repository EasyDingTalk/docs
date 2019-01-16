# 待办事项

<a name="create"></a>
## 发起待办

```php
$params = [];

$app->schedule->create($params);
```

<a name="update"></a>
## 更新待办

```php
$userId = 'veltpawgcye';

$recordId = 'y4n27nebs6';

$app->schedule->update($userId, $recordId);
```

<a name="listByUserId"></a>
## 获取用户待办事项

```php
$userId = 'tqvoksgoqc';

$status = 1564;

$offset = 1402;

$limit = 1264;

$app->schedule->listByUserId($userId, $status, $offset, $limit);
```

