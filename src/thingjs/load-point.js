/**
 * @author: 张攀钦
 * @description: 根据数据类型获取当前type 对应的url
 */
const getModelUrlByType = function _getModelUrlByType(type) {
    if (type && typeof type === 'string') {
        return `${uino.pointModelUrl}public/point/${type}`;
    }
    return null;
};
/**
 * @author: 张攀钦
 * @description: 根据id 获取 thingjs 中的对象
 */
const getObjectById = function _getObjectById(key) {
    if (key && typeof key === 'string') {
        const temp = uino.app.query(key);
        if (temp) {
            return temp[0];
        }
    }
    return null;
};
/**
 * @author: 张攀钦
 * @description: 遍历数据创建信息点
 */
// 先过滤下数据
const data = uino.constant.pointData.filter(item => item && item.position && item.type);
data.forEach(item => {
    const thing = uino.app.create({
        type: 'Point',
        url: getModelUrlByType(item.type),
        name: item.name,
        id: '12412412',
        angles: [0, 0, 0],
        parent: getObjectById(`#${item.pid}`),
        localPosition: [-2.845834679896876, 0.01, 2.366265293656448]
    });
    thing.scale = [10, 10, 10];
    console.log(thing);
});
