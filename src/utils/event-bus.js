/*
 * @Author: 张攀钦
 * @Date: 2019-06-14 09:50:34
 * @Last Modified by: 张攀钦
 * @Last Modified time: 2019-06-14 10:17:25
 * @description: 封装异步事件通知
 */

var uino = uino || {};
const vue = new Vue();
const eventBus = {};
uino.eventBus = eventBus;
// 开始封装工具
eventBus.on = function _onEvent(eventType, callback) {
    vue.$on(eventType, callback);
};

eventBus.emit = function _onEvent(eventType, data) {
    vue.$emit(eventType, data);
};
