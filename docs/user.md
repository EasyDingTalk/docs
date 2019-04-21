# 用户管理

[[toc]]

## 获取用户详情

```php
$app->user->get($userId, $lang = null);
```

## 获取部门用户 Userid 列表

```php
$app->user->getUserIds($departmentId);
```

## 获取部门用户

```php
$app->user->getUsers($departmentId, $offset, $size, $order = null, $lang = null);
```

## 获取部门用户详情

```php
$app->user->getDetailedUsers($departmentId, $offset, $size, $order = null, $lang = null);
```

## 获取管理员列表

```php
$app->user->administrators();
```

## 获取管理员权限范围

```php
$app->user->administratorScope();
```

## 根据 Unionid 获取 Userid

```php
$app->user->getUseridByUnionid($unionid);
```

## 创建用户

```php
$params = [
     'userid' => 'zhangsan',
     'name' => '张三',
     'orderInDepts' => '{1:10, 2:20}', // 此处为 Json
     'department' => [1, 2],
     'position' => '产品经理',
     'mobile' => '15913215421',
     'tel' => '010-123333',
     'workPlace' => '',
     'remark' => '',
     'email' => 'zhangsan@gzdev.com',
     'orgEmail' => 'qiye@gzdev.com',
     'jobnumber' => '111111',
     'isHide' => false,
     'isSenior' => false,
     'extattr' => [
       '爱好' => '旅游',
       '年龄' => '24',
     ],
];

$app->user->create($params);
```

## 更新用户

```php
$userId = 'zhangsan';

$params = [
     'name' => '张三',
     'department' => [1, 2],
     'orderInDepts' => '{1:10}', // 此处为 Json
     'position' => '产品经理',
     'mobile' => '15913215421',
     'tel' => '010-123333',
     'workPlace' => '',
     'remark' => '',
     'email' => 'zhangsan@gzdev.com',
     'orgEmail' => 'qiye@gzdev.com',
     'jobnumber' => '111111',
     'isHide' => false,
     'isSenior' => false,
     'extattr' => [
        '爱好' => '旅游',
        '年龄' => '24',
     ],
   ];

$app->user->update($userId, $params);
```

## 删除用户

```php
$app->user->delete($userid);
```

## 企业内部应用免登获取用户 Userid

```php
$app->user->getUserByCode($code);
```

## 批量增加员工角色

```php
$users = ['zhangsan', 'lisi'];
$roles = [123, 456];

$app->user->addRoles($users, $roles);
```

## 批量删除员工角色

```php
$users = ['zhangsan', 'lisi'];
$roles = [123, 456];

$app->user->removeRoles($users, $roles);
```

## 获取企业员工人数

```php
// 包含未激活钉钉的人员数量
$app->user->getCount();

// 获取企业已激活的员工人数
$app->user->getActivatedCount();
```
