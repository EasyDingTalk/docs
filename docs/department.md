# 部门管理

[[toc]]

## 获取子部门 ID 列表

```php
$app->department->getSubDepartmentIds($id);
```

## 获取部门列表

```php
$app->department->list($id = null, $isFetchChild = false, $lang = null);
```

## 获取部门详情

```php
$app->department->get($id, $lang = null);
```

## 查询部门的所有上级父部门路径

```php
$app->department->getParentsById($id);
```

## 查询指定用户的所有上级父部门路径

```php
$app->department->getParentsByUserId($userId);
```

## 创建部门

```php
$app->department->create($params);
```

## 更新部门

```php
$app->department->update($id, array $params);
```

## 删除部门

```php
$app->department->delete($id);
```
