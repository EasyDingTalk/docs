# 服务器事件

[[toc]]

## 接收回调消息

::: tip
SDK 目前提供三种方法以方便你监听钉钉服务器的事件推送

你无需关心回调消息的加解密问题，直接使用如下实例即可

当然你可以多次调用 `push` 方法，实现多个消息处理器
:::

### Closure 闭包

```php {4-16}
// 获取 server 实例
$server = $app->server;

$server->push(function ($payload) {
    // 此处 $payload 为钉钉推送事件解密后的内容，为数组形式
    /**
     * 比如测试回调 URL 事件，$payload 内容为：
     *
     * $payload = [
     *     "EventType" => "check_url",
     * ]
     */
    $type = $payload['EventType'];
    // ...
    // 可根据内容处理你对应的业务逻辑
});

return $server->serve(); // 如 Laravel 框架中使用该语法

$server->serve()->send(); // ThinkPHP 等框架使用
```

### 自定义类

::: warning
自定义类中需要包含 `__invoke` 方法
:::

> DingTalkHandler.php

```php {11-19}
class DingTalkHandler
{
    /**
     * @param \EasyDingTalk\Application $app
     */
    public function __construct($app)
    {
        // SDK 会注入当前 $app 实例到你自定义类的构造方法中，你可以根据业务情况使用
    }

    /**
     * @param  array $payload
     *
     * @return void
     */
    public function __invoke($payload)
    {
        // 在此处处理你的业务逻辑
    }
}
```

```php {4}
// 获取 server 实例
$server = $app->server;

$server->push(DingTalkHandler::class);

return $server->serve(); // 如 Laravel 框架中使用该语法

$server->serve()->send(); // ThinkPHP 等框架使用
```

### 传入已实例化对象

::: warning
自定义类中需要包含 `__invoke` 方法
:::

> DingTalkHandler.php

```php {3-11}
class DingTalkHandler
{
    /**
     * @param  array $payload
     *
     * @return void
     */
    public function __invoke($payload)
    {
        // 在此处处理你的业务逻辑
    }
}
```

```php {4}
// 获取 server 实例
$server = $app->server;

$server->push(new DingTalkHandler('foo'));

return $server->serve(); // 如 Laravel 框架中使用该语法

$server->serve()->send(); // ThinkPHP 等框架使用
```

## 响应钉钉服务器

::: warning
当调用 `$server->serve()` 方法时（如上述示例）

SDK 会向钉钉服务器返回 `success` 的 JSON 数据，无需手动拼接返回数据 :)
:::
