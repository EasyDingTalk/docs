# 审批

[[toc]]

::: warning
SDK 版本 2.0.4+
:::

## 发起审批实例

```php
$app->process->create($params);
```

## 批量获取审批实例 ID

```php
$app->process->getIds($params);
```

## 获取单个审批实例

```php
$app->process->get($id);
```

## 获取用户待审批数量

```php
$app->process->count($userId);
```

## 获取用户可见的审批模板

```php
$app->process->listByUserId($userId = null, $offset = 0, $size = 100);
```
