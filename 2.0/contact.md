# 联系人管理

[[toc]]

## 获取外部联系人标签列表

```php
$app->contact->labels($offset = 0, $size = 100);
```

## 获取外部联系人列表

```php
$app->contact->list($offset = 0, $size = 100);
```

## 获取企业外部联系人详情

```php
$app->contact->get($userId);
```

## 添加外部联系人

```php
$app->contact->create(array $params);
```

## 更新外部联系人

```php
$app->contact->update($userId, array $params);
```

## 删除外部联系人

```php
$app->contact->delete($userId);
```

## 获取通讯录权限范围

```php
$app->contact->scopes();
```
