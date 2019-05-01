# 考勤管理

[[toc]]

::: warning
SDK 版本 2.0.1+
:::

## 企业考勤排班详情

```php
$app->attendance->schedules($date, $offset = null, $size = null);
```

## 企业考勤组详情

```php
$app->attendance->groups($offset = null, $size = null);
```

## 获取用户考勤组

```php
$app->attendance->userGroup($userId);
```

## 获取打卡详情

```php
$params = [
    'userIds' => ['001', '002'],
    'checkDateFrom' => '2019-05-01 00:00:00',
    'checkDateTo' => '2019-05-10 00:00:00',
    'isI18n' => false
];

$app->attendance->records($params);
```

## 获取打卡结果

```php
$params = [
   'workDateFrom' => 'yyyy-MM-dd HH:mm:ss',
    'workDateTo' => 'yyyy-MM-dd HH:mm:ss',
    'userIdList' => ['员工UserId列表'],    // 必填，与offset和limit配合使用
    'offset' => 0,    // 必填，第一次传0，如果还有多余数据，下次传之前的offset加上limit的值
    'limit' => 1,     // 必填，表示数据条数，最大不能超过50条
];

$app->attendance->results($params);
```

## 获取请假时长

```php
$app->attendance->duration($userId, $from, $to);
```

## 查询请假状态

```php
$app->attendance->status($params);
```
