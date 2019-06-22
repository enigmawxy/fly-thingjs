## 场景

### Scene.json文件介绍
```json
{
    "id": "1444",
    "userid": "Cabinet_01",
    "type": "Cabinet",
    "name": "Cab",
    "properties": {
        "Group": "Inside01"
    },
    "model": 17,
    "position": [-5.087, 0.01, 9.347],
    "rotation": [0.0, 0.707, 0.0, 0.707],
    "scale": [0.998, 1.0, 0.999]
}
```

> id 对应 thingjs 对象 uuid 属性。

> userid 对应搭建时候填写的 [自定义 ID]。对应 thingjs 物体对象 id 属性。

> name 对应搭建时填写的 [名称]。对应 thingjs 物体对象 name 属性。

> model 为查找当前物体所用模型，对应 scene.json 中 models 中的索引。

> properties 为自定义的属性

> type 为自定义属性添加TYPE(TYPE两边有_)。THING.factory.registerClass('Cabinet', Cabinet); app.query('.Cabinet');可以查到这个物体。

## ThingJs

- OOP 定义类。有局限性。

```js
// 加载场景
const app = new THING.App({ 
    "url": "models/comproom/",
    "skyBox" :"BlueSky"
});
class Cabinet extends THING.Thing{
    test(){
        console.log('test');
    }
}
// 场景 json 有物体 type 为 Cabinet ,才能生效。
THING.factory.registerClass('Cabinet', Cabinet);
app.query('.Cabinet')[0].test();
```

