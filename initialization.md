# 实例化

每一个钉钉应用（E 应用、H5 应用等）均使用下面实例化方法

<a name="instance"></a>
## 实例化

```php
use EasyDingTalk\Application;

$app = new Application([
    // 以下为必传配置项
    'agent_id' => '12345678',
    'app_key' => 'your-app-key',
    'app_secret' => 'your-app-secret',

    // 以下为非必须传入配置，请根据实际情况传入
    'http' => [
        'response_type' => 'array'
    ]
]);
```

> {info} 文档中所有提及到的 `$app` 都是表示由上述代码实例化得到的 `EasyDingTalk\Application` 对象，恕不作另外描述。

<a name="params"></a>
## 参数说明

| 参数名称 | 是否必传 | 说明 |
| -: | -: | : |
| app_key | ✅ | 钉钉应用的 App Key |
| app_secret | ✅ | 钉钉应用的 App Secret |
| http | | |
| http.response_type | | 接口请求返回值类型，详细见[返回值类型](/{{version}}/initialization#response-type)说明 |

<a name="response-type"></a>
## 返回值类型

设置 `http['response_type']` 可指定接口请求返回值的类型 (默认 array)

可设置 `array` `object` `collection` `raw` 或 `自定义类`
