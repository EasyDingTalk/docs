# 角色管理

<a name="list"></a>
## 获取角色列表

```php
$offset = 1205;

$size = 20;

$app->role->list($offset, $size);
```

<a name="getUsers"></a>
## 获取角色下的员工列表

```php
$roleId = 1257;

$offset = 1063;

$size = 20;

$app->role->getUsers($roleId, $offset, $size);
```

<a name="getGroups"></a>
## 获取角色组

```php
$groupId = 1213;

$app->role->getGroups($groupId);
```

<a name="get"></a>
## 获取角色详情

```php
$roleId = 1088;

$app->role->get($roleId);
```

<a name="create"></a>
## 创建角色

```php
$groupId = 1499;

$roleName = 'ed8zm4f5br';

$app->role->create($groupId, $roleName);
```

<a name="update"></a>
## 更新角色

```php
$roleId = 1206;

$roleName = 'f5ph6zwq1r6';

$app->role->update($roleId, $roleName);
```

<a name="delete"></a>
## 删除角色

```php
$roleId = 1085;

$app->role->delete($roleId);
```

<a name="createGroup"></a>
## 创建角色组

```php
$name = '1l00g4wr0wu';

$app->role->createGroup($name);
```

<a name="addUserRoles"></a>
## 批量增加员工角色

```php
$roleIds = 'utt2unkg3kr';

$userIds = '9vp212hx56';

$app->role->addUserRoles($roleIds, $userIds);
```

<a name="deleteUserRoles"></a>
## 批量删除员工角色

```php
$roleIds = '0gbykl62jtrp';

$userIds = 'j8tpdo6zk4j';

$app->role->deleteUserRoles($roleIds, $userIds);
```

