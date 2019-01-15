# 外部联系人管理

<a name="getGroups"></a>
## 获取外部联系人标签列表

```php
$offset = 1172;

$size = 20;

$app->contact->getGroups($offset, $size);
```

<a name="list"></a>
## 获取外部联系人列表

```php
$offset = 1219;

$size = 20;

$app->contact->list($offset, $size);
```

<a name="get"></a>
## 获取企业外部联系人详情

```php
$userId = 'r33p2k1mb0n';

$app->contact->get($userId);
```

<a name="create"></a>
## 添加外部联系人

```php
$contact = [];

$app->contact->create($contact);
```

<a name="update"></a>
## 更新外部联系人

```php
$userId = 'kea76xxq2';

$contact = [];

$app->contact->update($userId, $contact);
```

<a name="delete"></a>
## 删除外部联系人

```php
$userId = 'iqonu4jcw2c';

$app->contact->delete($userId);
```

