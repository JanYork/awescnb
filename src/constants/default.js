const defaultOptions = {
    // 基本配置
    theme: {
        name: 'reacg',
        color: '#FFB3CC',
        title: '',
        contentSize: 'mid',
        headerBackground: '',
        avatar: 'https://guangzan.gitee.io/imagehost/awescnb/logo.png',
        favicon: 'https://guangzan.gitee.io/imagehost/awescnb/favicon.png',
    },
    // 代码高亮
    highLight: {
        type: 'atomOneDark',
        inDarkMode: 'atomOneDark',
    },
    // 代码行号
    lineNumbers: {
        enable: true,
    },
    // github图标
    github: {
        enable: true,
        color: '#ffb3cc',
        url: 'https://github.com/guangzan/awescnb',
    },
    // 码云图标
    gitee: {
        enable: true,
        color: '#C71D23',
        url: 'https://gitee.com/guangzan/awescnb',
    },
    // 图片灯箱
    imagebox: {
        enable: true,
    },
    // 文章目录
    catalog: {
        enable: true,
        position: 'left',
    },
    // 返回顶部按钮
    back2top: {
        enable: true,
        type: 'complex',
    },
    // 右下角按钮列表
    tools: {
        enable: true,
        initialOpen: true,
        draggable: false,
    },
    // live2d模型
    live2d: {
        enable: true,
        page: 'all',
        agent: 'pc',
        model: 'haru-01',
        width: 150,
        height: 200,
        position: 'left',
        gap: 'default', // 边距
    },
    // 点击特效
    click: {
        enable: true,
        auto: false,
        colors: ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'],
        size: 30,
        maxCount: 50,
    },
    // 评论输入框表情
    emoji: {
        enable: true,
        showRecents: true,
        recentsCount: 20,
        showPreview: true,
        showSearch: true,
    },
    // 暗色模式
    darkMode: {
        enable: true,
        autoDark: false,
        autoLight: false,
    },
    // 音乐播放器
    musicPlayer: {
        enable: true,
        page: 'all',
        agent: 'pc',
        autoplay: false,
        volume: 0.4,
        lrc: {
            enable: false, // 启用歌词
            type: 1, // 1 -> 字符串歌词 3 -> url 歌词
            color: '', // 颜色
        },
        audio: [
            {
                name: '404 not found',
                artist: 'REOL',
                url:
                    'http://music.163.com/song/media/outer/url?id=436016480.mp3',
                cover:
                    'http://p2.music.126.net/cu1sEIDxXOJm5huZ3Wjs0Q==/18833534672880379.jpg?param=300x300',
                lrc: ``,
            },
        ],
    },
    // 随笔头图
    postTopimage: {
        enable: true,
        position: 'top',
        fixed: false,
        imgs: [],
    },
    // 个性签名
    signature: {
        enable: false,
        contents: [],
    },
    // 二维码
    qrcode: {
        enable: false,
        img: '',
        desc: '',
    },
    // 弹出公告
    notice: {
        enable: false,
        text: [],
    },
    // 首页列表图
    indexListImg: {
        enable: false,
        imgs: [],
    },
    // 顶部加载进度条
    topProgress: {
        enable: false,
        page: 'all',
        agent: 'pc',
        background: '#FFB3CC',
        height: '5px',
    },
    // 随笔页尾部签名
    postSignature: {
        enable: false,
        content: [],
        licenseLink: '',
    },
    // 背景图片或颜色
    bodyBackground: {
        enable: false,
        type: 'color',
        value: '',
        opacity: 1,
        repeat: false,
    },
    // 弹幕
    barrage: {
        enable: false,
        opacity: 0.6,
        colors: [
            '#FE0302',
            '#FF7204',
            '#FFAA02',
            '#FFD302',
            '#FFFF00',
            '#A0EE00',
            '#00CD00',
            '#019899',
            '#4266BE',
            '#89D5FF',
            '#CC0273',
            '#CC0273',
        ],
        barrages: [],
        indexBarrages: [],
        postPageBarrages: [],
    },
    // 图表
    charts: {
        enable: false,
        pie: {
            title: 'My skills',
            data: {
                labels: ['JavaScript', 'css', 'Vue', 'React', 'wechat'],
                values: [40, 30, 20, 10, 20],
            },
        },
    },
    // 锁屏
    lock: {
        enable: false,
        background: '',
        strings: [
            '<i>Powered by</i> webpack.',
            '&amp; Theme in awescnb',
            '快去自定义你的个性签名吧~',
        ],
    },
    // footer链接
    links: [
        {
            name: 'awescnb',
            link: 'https://gitee.com/guangzan/awescnb',
        },
    ],
}

export default defaultOptions
