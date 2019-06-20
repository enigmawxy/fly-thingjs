/*
 * @Author: 张攀钦
 * @Date: 2019-06-14 09:56:03
 * @Last Modified by: 张攀钦
 * @Last Modified time: 2019-06-20 11:16:00
 * 异步事件类型常量池
 */
var uino = uino || {};
uino.constant = uino.constant || {};
uino.constant.eventBus = uino.constant.eventBus || {};
const eventType = {};
uino.constant.eventBus.eventType = eventType;
// 以下封装常量

// 用于监听场景加载
eventType.loadScene = 'loadScene';
