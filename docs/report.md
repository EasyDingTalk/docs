# 日志管理

[[toc]]

## 获取用户日志数据

```php
$app->report->list($params);
```

## 获取用户可见的日志模板

```php
$app->report->templates($userId = null, $offset = 0, $size = 100);
```

## 获取用户日志未读数

```php
$app->report->unreadCount($userid);
```
