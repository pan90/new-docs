

# 签名测试


## 请求

`POST` `https://paper-card.cn/api/test/sign`

请求体为一个JSON对象：

```json5
{
    "ts": 0, // 秒级时间戳，为客户端的当前时间
    "client_id": "字符串", // 客户端ID，由PaperCard分配

    // params字段也可能没有，有的话是一个JSON对象
    "params": {
        // 请求参数
    },
    "sign": "签名",
}
```

## 签名算法

使用客户端`secret`、秒级时间戳`ts`和其它参数（`params`）拼接成一个字符串。

然后再将这个字符串使用**SHA256**算法进行哈希，最后将哈希结果转换为**16进制字符串**。

注意：`params`中的参数名必须按照**字母顺序**升序排列，再转为JSON字符串参与拼接。

```ts
const toSign = `${secret}${ts}${params}`;
const sign = createHash('sha256').update(signStr).digest("hex");    
return sign;
```

## 响应

正确响应为`HTTP` `200`状态码，其它状态码表示错误。

响应JSON：
```json5
{
    "ec": "", // 字符串类型，错误代码，机器可读
    "em": "", // 字符串类型，错误信息，人类可读

    // 响应数据，JSON对象，也可能没有
    "data": {
        // 响应数据
    }, 
}
```

### ec: ok
签名测试通过

### ec: sign_not_match
如果签名测试未通过，`ec`为`sign_not_match`

### ec: not_json
不是JSON请求
```json
{
    "ec": "not_json",
    "em": "SyntaxError: Unexpected end of JSON input"
}
```

### ec: invalid_ts
`ts`参数错误，一般为时间戳过期，具体看`em`

### ec: invalid_client_id
`client_id`参数错误，大概率是没有注册，具体看`em`

### ec: invalid_params
`params`参数错误

### ec: invalid_sign
`sign`参数错误，与`sign_not_match`不同

### ec: unknown
未知的服务器错误