# 身份验证

[[toc]]

::: warning
SDK 版本 2.0.2+
:::

## 企业内部应用免登

```php
$app->user->getUserByCode($code);
```

## 应用管理后台免登

:::warning
**应用管理后台免登需要先配置 `sso_secret` ，配置详情请在`实例化`章节中查看**
:::

```php {4}
// 在你的应用后台地址页面，钉钉会把 code 参数追加到你填写的后台地址中
// 你不需要关心 `code` 的具体内容，SDK 会从 URL 中自动获取
// 你只需通过以下方法即可获取当前用户信息
$app->sso->user();

/**
 * 【示例】下面以 Laravel 框架为例
 * 伪代码，仅供参考，请以你的实际业务逻辑为准
 */
Route::get('dingtalk/login', function () {
    $response = $app->sso->user();
    $userId = $response['user_info']['userid'];
    // 登录用户逻辑
    $this->login($userId);

    // 跳到管理后台主页
    return redirect('home');
});
```

## 登录第三方网站

:::warning

**使用 OAuth 授权需要先配置 `oauth` ，配置详情请在 `实例化` 章节中查看**

---

- 下文提到的 `$response` 均为一个 `Symfony\Component\HttpFoundation\RedirectResponse` 对象，你可以使用该对象内的方法；
- 例如获取授权页面 URL：`$response->getTargetUrl()`；
- Laravel 等框架中可以直接 `return $response` ，框架会帮你重定向到钉钉授权页面。

---

下文的 `app-01` 表示实例化配置 `oauth` 中的数组 key，详细解释可在 `实例化` 章节中查看
:::

```php
// 扫码登录第三方网站
$response = $app->oauth->use('app-01')->withQrConnect()->redirect();

// 钉钉内免登第三方网站、密码登录第三方网站均同样使用如下方法跳转：
$response = $app->oauth->use('app-01')->redirect();
```

```php
// 回调页面统一使用如下方法来获取用户信息：
$user = $app->oauth->use('app-01')->user();
```
