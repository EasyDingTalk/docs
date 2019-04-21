# 角色管理

[[toc]]

## 获取角色列表

```php
$app->role->list($offset = null, $size = null);
```

## 获取角色下的员工列表

```php
$app->role->getUsers($roleId, $offset = null, $size = null);
```

## 创建角色组

```php
$app->role->createGroup($name);
```

## 获取角色组

```php
$app->role->getGroups($groupId);
```

## 获取角色详情

```php
$app->role->get($roleId);
```

## 创建角色

```php
$app->role->create($groupId, $roleName);
```

## 更新角色

```php
$app->role->update($roleId, $roleName);
```

## 删除角色

```php
$app->role->delete($roleId);
```
