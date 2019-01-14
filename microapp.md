# 应用

<a name="list"></a>
## 获取应用列表

```php


$app->microapp->list();
```

<a name="listByUserId"></a>
## 获取员工可见的应用列表

```php
$userId = 'ths6fmi27g';

$app->microapp->listByUserId($userId);
```

<a name="visibleScopes"></a>
## 获取应用的可见范围

```php
$agentId = 1647;

$app->microapp->visibleScopes($agentId);
```

<a name="setVisibleScopes"></a>
## 设置应用的可见范围

```php
$agentId = 1366;

$isHidden = false;

$userIds = undefined;

$departmentIds = undefined;

$app->microapp->setVisibleScopes($agentId, $isHidden, $userIds, $departmentIds);
```

