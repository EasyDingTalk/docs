# 自定义

[[toc]]

## 自定义 Service Provider

:::tip
SDK 基于 Pimple，你可以从查看 [Pimple 官方文档](https://pimple.symfony.com/) 获得更多帮助
:::

> Hello.php

```php
namespace Acme;

class Hello
{
    /**
     * @param \EasyDingTalk\Application $app
     */
    public function __construct($app)
    {
        //
    }

    /**
     * 自定义方法
     *
     * @return mixed
     */
    public function foobar()
    {
        // 自定义业务逻辑
    }
}
```

> HelloServiceProvider.php

```php
namespace Acme;

use Pimple\Container;
use Pimple\ServiceProviderInterface;

class HelloServiceProvider implements ServiceProviderInterface
{
    public function register(Container $pimple)
    {
        $pimple['hello'] = function ($app) {
            return new Hello($app);
        };
    }
}
```

### 注册 Service Provider

```php
$app->register(new HelloServiceProvider());

// 然后你就可以通过以下方式访问到你自定义类了：
$app->hello->foobar();
```
