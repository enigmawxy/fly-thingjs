$.mockjax({
    url: '/fly/alarm',
    contentType: 'application/json',
    responseText: Mock.mock({
        'data|10': [
            {
                name: '测试创建摄像头',
                'color|1': [
                    'red',
                    'yellow',
                    'green',
                    '#FF34B3',
                    '#F0F8FF',
                    '#ADFF2F',
                    '#9400D3',
                    '#1A1A1A',
                    '#008B8B',
                    '#00FF00'
                ]
            }
        ],
        code: 200
    })
});
