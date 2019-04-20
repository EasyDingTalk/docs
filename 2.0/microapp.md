# 应用管理

[[toc]]

## 获取应用列表

```php
$app->microapp->list();
```

## 获取员工可见的应用列表

```php
$app->microapp->listByUserId($userId);
```

## 获取应用的可见范围

```php
$app->microapp->getVisibility($agentId);
```

## 设置应用的可见范围

```php
$params = [
    'agentId' => 16691682,
    'isHidden' => false,
    'deptVisibleScopes' => [1, 2],
    'userVisibleScopes' => ['userId1', 'userId2'],
];

$app->microapp->setVisibility($params);
```
