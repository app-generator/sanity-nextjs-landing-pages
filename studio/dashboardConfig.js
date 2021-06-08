export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60bf1b854a28a2ebec39caf9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6oshh8sk',
                  apiId: 'b953bf7e-fcf9-407a-b473-d0f40c8ac3e6'
                },
                {
                  buildHookId: '60bf1b8572f6e9fa97c56b21',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tiye4pjz',
                  apiId: 'f4af771b-2a4e-4d3c-91d6-ed24f0c1465d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/app-generator/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tiye4pjz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
