module.exports = {
    title: 'EasyDingTalk',
    description: 'EasyDingTalk 是一个易于使用，基于 MIT 协议开发的高质量开源钉钉第三方 PHP SDK。',

    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-132433251-1'
            }
        ]
    ],

    themeConfig: {
        nav: [
            { text: 'GitHub', link: 'https://github.com/mingyoung/dingtalk' }
        ],

        displayAllHeaders:true,

        sidebar: [
            '/start',
            '/auth',
            '/user', '/department', '/process', '/role', '/contact', '/calendar', '/attendance', '/checkin', '/report', '/blackboard', '/hr', '/microapp', '/health', '/callback',
            '/server',
            '/customize',
        ]
    }
}
