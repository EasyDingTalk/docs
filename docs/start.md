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

```php
use EasyDingTalk\Application;

$config = [
    // 企业 corpId
    'corp_id' => 'dingd3ir8195906jfo93',

    // 应用 AppKey 和 AppSecret
    'app_key' => 'dingwu33fo1fjc0fszad',
    'app_secret' => 'RsuMFgEIY3jg5UMidkvwpzEobWjf9Fcu3oLqLyCUIgzULm54WcV7j9fi3fJlUshk',

    // 加解密 token 和 AesKey
    'token' => 'uhl3CZbtsmf93bFPanmMenhWwrqbSwPc',
    'aes_key' => 'qZEOmHU2qYYk6n6vqLfi3FAhcp9bGA2kgbfnsXDrGgN',
];

$app = new Application($config);
```

## 交流与反馈

:::tip
如果你发现 Bug 或对 SDK 有任何建议，欢迎通过以下方式反馈给我
:::

- QQ 群：1007278532
- [提交 Issue](https://github.com/mingyoung/dingtalk/issues)
