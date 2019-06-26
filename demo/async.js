const createContainer = function _createContainer(data) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${data} 集装箱创建成功`);
            resolve(data);
        }, 500);
    });
};

const asyncExec = async function _asyncExec(arr) {
    const ret = await Promise.all(arr.map(item => createContainer(item)));
    console.log(`完成:${ret}`);
};
const initData = [1, 2, 3, 4, 5, 6, 7, 8];

const client = async function _client(arr) {
    console.log('create container start');
    const temp = [];
    const max = 2;
    for (const item of arr) {
        temp.push(item);
        if (temp.length == max) {
            await asyncExec(temp);
            temp.length = 0;
        }
    }
    console.log('create container end');
};
client(initData);
