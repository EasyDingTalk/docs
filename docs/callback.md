# 回调管理

[[toc]]

## 注册业务事件回调

::: tip
token 和 aes_key 无需传入，SDK 会在配置中读取
:::

```php
$params = [
    'call_back_tag' => ['user_add_org', 'user_modify_org', 'user_leave_org'],
    'url' => 'http://test001.vaiwan.com/eventreceive',
];

$app->callback->register($params);
```

## 查询事件回调

```php
$app->callback->list();
```

## 更新事件回调

::: tip
token 和 aes_key 无需传入，SDK 会在配置中读取
:::

```php
$params = [
    'call_back_tag' => ['user_add_org', 'user_modify_org', 'user_leave_org'],
    'url' => 'http://test001.vaiwan.com/eventreceive',
];

$app->callback->update($params);
```

## 删除事件回调

```php
$app->callback->delete();
```

## 获取回调失败结果

```php
$app->callback->failed();
```

## 接收回调消息

具体示例在[服务器事件](../server.md)中讲述
