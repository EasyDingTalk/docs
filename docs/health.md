# 钉钉运动

[[toc]]

## 获取用户钉钉运动开启状态

```php
$app->health->status($userId);
```

## 获取个人钉钉运动数据

```php
$id = 'zhangsan';
$dates = '20180101,20180102';

$app->health->byUser($id, $dates);
```

## 获取部门钉钉运动数据

```php
$id = 'zhangsan';
$dates = '20180101,20180102';

$app->health->byDepartment($id, $dates);
```

## 批量获取钉钉运动数据

```php
$userIds = ['manager1', 'manager2'];
$date = '20180101';

$app->health->byUsers($userIds, $date);
```
