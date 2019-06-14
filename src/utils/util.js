var uino = uino || {};
const util = {};
uino.util = util;
util.uuid = function _uuid() {
    const uniqueId = _.uniqueId();
    const timestamp = new Date().getTime();
    return `uuid_${uniqueId}_${timestamp}`;
};
