module.exports = {
    title: 'Website title',
    description: 'Website desription',
    themeConfig: {
        smoothScroll: true,
        nav: [
            { text: 'Home', link: '/' },
        ],
        sidebar: [
            {
              title: 'Group 1',   // required
              // path: '/info/infotest1.md',      // optional, link of the title, which should be an absolute path and must exist
              collapsable: true, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
              children: [
                '/info/infotest1.md',
                '/info/infotest2.md'
              ]
            }
          ]
    }
}