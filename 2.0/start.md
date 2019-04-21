# 开始使用

[[toc]]

## 环境要求

-   PHP 7.1+
-   Composer

## 安装

EasyDingTalk 是一个标准包，你可以使用 `composer` 进行安装

:::warning 备注

目前 2.0 版本尚未发布，以下安装命令暂时不可用
:::

```bash
composer require mingyoung/dingtalk:^2.0
```

## 更新

要更新 EasyDingTalk，你可以使用以下命令进行更新

```bash
composer update
```

## 实例化

```php
use EasyDingTalk\Application;

$config = [
    //
];

$app = new Application($config);
```

## 交流群

QQ 群：1007278532
