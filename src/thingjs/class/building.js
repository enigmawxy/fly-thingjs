/**
 * @author: 张攀钦
 * @description: 建筑类
 */
class Building extends THING.Building {
    /**
     * @author: 张攀钦
     * @description: 给建筑描边
     */
    changOutLineColor() {
        this.style.color = '#00ff00';
    }
    enterBuilding() {
        this.app.level.change(this);
    }
    enterFloorFromBuilding(floorNum) {
        this.app.level.change(this.getFloor(floorNum));
    }
    getFloor(floorNum) {
        return this.floors[floorNum];
    }
}
THING.factory.registerClass('Building', Building);
