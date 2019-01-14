# 钉钉运动

<a name="status"></a>
## 获取用户钉钉运动开启状态

```php
$userId = 'yvnctljx1bd';

$app->health->status($userId);
```

<a name="user"></a>
## 获取个人钉钉运动数据

```php
$id = '33uxv0jtvrc';

$dates = '41g606pa7h4';

$app->health->user($id, $dates);
```

<a name="department"></a>
## 获取部门钉钉运动数据

```php
$id = 'fs369qr2krf';

$dates = 'u5pjb95fsqn';

$app->health->department($id, $dates);
```

<a name="list"></a>
## 批量获取钉钉运动数据

```php
$userIds = undefined;

$date = 'vck3d5oz2hc';

$app->health->list($userIds, $date);
```

