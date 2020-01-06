# 开始使用

[[toc]]

## 环境要求

-   PHP 7.1+
-   Composer

## 安装

EasyDingTalk 是一个标准包，你可以使用 `composer` 进行安装

```bash
composer require mingyoung/dingtalk:^2.0
```

## 更新

要更新 EasyDingTalk，你可以使用以下命令进行更新

```bash
composer update mingyoung/dingtalk
```

## 实例化

:::warning
文档中提及到的 `$app` 表示的是如下实例化后的 `EasyDingTalk\Application` 实例，就不在每个模块中描述了
:::

```php {4-23}
use EasyDingTalk\Application;

$config = [
    /*
    |-----------------------------------------------------------
    | 【必填】企业 corpId
    |-----------------------------------------------------------
    */
    'corp_id' => 'dingd3ir8195906jfo93',

    /*
    |-----------------------------------------------------------
    | 【必填】应用 AppKey
    |-----------------------------------------------------------
    */
    'app_key' => 'dingwu33fo1fjc0fszad',

    /*
    |-----------------------------------------------------------
    | 【必填】应用 AppSecret
    |-----------------------------------------------------------
    */
    'app_secret' => 'RsuMFgEIY3jg5UMidkvwpzEobWjf9Fcu3ogzULm54WcV7j9fi3fJlUshk',

    /*
    |-----------------------------------------------------------
    | 【选填】加解密
    |-----------------------------------------------------------
    | 此处的 `token` 和 `aes_key` 用于事件通知的加解密
    | 如果你用到事件回调功能，需要配置该两项
    */
    'token' => 'uhl3CZbtsmf93bFPanmMenhWwrqbSwPc',
    'aes_key' => 'qZEOmHU2qYYk6n6vqLfi3FAhcp9bGA2kgbfnsXDrGgN',

    /*
    |-----------------------------------------------------------
    | 【选填】后台免登配置信息
    |-----------------------------------------------------------
    | 如果你用到应用管理后台免登功能，需要配置该项
    */
    'sso_secret' => 'Fx9_i5dSW5tpGtjalksdf98JF8uj32xb4NJQR5G9-VSchasd98asfdMmLR',

    /*
    |-----------------------------------------------------------
    | 【选填】第三方网站 OAuth 授权
    |-----------------------------------------------------------
    | 如果你用到扫码登录、钉钉内免登和密码登录第三方网站，需要配置该项
    */
    'oauth' => [
        /*
        |-------------------------------------------
         | `app-01` 为你自定义的名称，不要重复即可
         |-------------------------------------------
         | 数组内需要配置 `client_id`, `client_secret`, `scope` 和 `redirect` 四项
         |
         | `client_id` 为钉钉登录应用的 `appId`
         | `client_secret` 为钉钉登录应用的 `appSecret`
         | `scope`:
         |     - 扫码登录第三方网站和密码登录第三方网站填写 `snsapi_login`
         |     - 钉钉内免登第三方网站填写 `snsapi_auth`
         | `redirect` 为回调地址
         */
        'app-01' => [
            'client_id' => 'dingoaxmia0afj234f7',
            'client_secret' => 'c4x4el0M6JqMC3VQP80-cFasdf98902jklFSUVdAOIfasdo98a2',
            'scope' => 'snsapi_login',
            'redirect' => 'https://easydingtalk.org/callback',
        ],
        /*
        |-------------------------------------------
         | 可配置多个 OAuth 应用，数组内内容同上
         |-------------------------------------------
         */
        'app-02' => [
            // ...
        ]
    ]
];

$app = new Application($config);
```

## 交流与反馈

:::tip
如果你发现 Bug 或对 SDK 有任何建议，欢迎通过以下方式反馈给我
请尊重开源，尊重他人，不喜勿用、勿加，谢谢！
:::

- QQ 群：1007278532
- [提交 Issue](https://github.com/mingyoung/dingtalk/issues)
