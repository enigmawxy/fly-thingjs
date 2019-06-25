const createContainer = function _createContainer(data) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${data} 集装箱创建成功`);
            resolve(data);
        }, 500);
    });
};

const asyncExec = async function _asyncExec(arr) {
    const ret = await Promise.all(arr.map(async item => await createContainer(item)));
    console.log(`完成:${ret}`);
};
const initData = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log('执行结束');
const exec1 = async function _exec1(arr) {
    console.log('start');
    const temp = [];
    const max = 2;
    for (const item of arr) {
        temp.push(item);
        if (temp.length == max) {
            await asyncExec(temp);
            temp.length = 0;
        }
    }
    console.log('end');
};
exec1(initData);
