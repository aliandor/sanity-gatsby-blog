export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4860cd645e934797b1e73d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-bnx3ir3v',
                  apiId: 'aa1ce6f2-2e8b-4c2e-b518-57faab93e579'
                },
                {
                  buildHookId: '5e4860cd0d32deb139bc08fd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-oqj59g5q',
                  apiId: '39011d5c-1d17-44c3-8de5-66a404c74734'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aliandor/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-oqj59g5q.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
