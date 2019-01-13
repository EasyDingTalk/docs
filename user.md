# 用户管理

<a name="get"></a>
## 获取用户详情

```php
$userId = 'mingyoung';

$app->user->get($userId);
```

<a name="users"></a>
## 获取部门用户 UserId 列表

```php
$departmentId = '123';

$app->user->getUsers($departmentId);
```
