# recruit_test

// 假设本地机器⽆法做加减乘除法，需要通过远程请求让服务端来实现。

// 以加法为例，现有远程API的模拟实现

```javascript
const addRemote = async (a, b) => new Promise(resolve => {
 setTimeout(() => resolve(a + b), 1000)
});
```

// 请实现本地的add⽅法，调⽤addRemote，能最优的实现输⼊数字的加法。

```javascript
async function add(...args) {
 let count = 0;
    for (let i = 0; i < args.length; i++) {
        const item = args[i];
        count = await addRemote(count,item);
        
    }
    return count;
}
```
// 请⽤示例验证运⾏结果:
```javascript
(async function main() {
 console.log(await add(1, 2)); // 3
 console.log(await add(3, 5, 2)); // 10
})()
```
