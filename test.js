const addRemote = async (a, b) => new Promise(resolve => {
    setTimeout(() => resolve(a + b), 1000)
});

async function add(...args) {
    // 你的实现
    let lastRes = 0
    for (let i = 0; args.length > 0; i++) {
        if (i === 0) {
            await addRemote(args[0], args[1]).then((res) => {
                lastRes = res
                args.splice(0, 2)
            })
        } else {
            await addRemote(lastRes, args[0]).then((res) => {
                lastRes = res
                args.splice(0, 1)
            })
        }
    }
    return lastRes
}

//实现
(async function main() {
    console.log(await add(1, 2)); // 3
    console.log(await add(3, 5, 2)); // 10
})()