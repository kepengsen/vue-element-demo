const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
Mock.mock('/user', 'post', {
    "user|10-20": [{
        'id|+1': 1000,
        'name': '@cname', //中文名称
        'age|1-100': 100, //100以内随机整数
        'birthday': '@date("yyyy-MM-dd")', //日期
        'city': '@city(true)' //中国城市
    }]
})
// Mock.toJSONSchema()
Mock.mock('/news', 'post', {
    "data|15-30": [{
        'id|+1': 1000,
        'title': '@ctitle(5,20)',
        'content': '@cparagraph(5,20)',
        'pic': "@dataImage('100x100','图片')",
        'author_name': '@cname',
        'date': '@now()',
    }]
})

Mock.mock('/login','post',{
    user:{
        'userName':'@cname',
        'token':"@string(30)"
    },
    ret:'success',
    msg:'成功'
})