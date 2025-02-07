import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/chatsel-docs/__docusaurus/debug',
    component: ComponentCreator('/chatsel-docs/__docusaurus/debug', '5cd'),
    exact: true
  },
  {
    path: '/chatsel-docs/__docusaurus/debug/config',
    component: ComponentCreator('/chatsel-docs/__docusaurus/debug/config', 'f61'),
    exact: true
  },
  {
    path: '/chatsel-docs/__docusaurus/debug/content',
    component: ComponentCreator('/chatsel-docs/__docusaurus/debug/content', '85f'),
    exact: true
  },
  {
    path: '/chatsel-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/chatsel-docs/__docusaurus/debug/globalData', '563'),
    exact: true
  },
  {
    path: '/chatsel-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/chatsel-docs/__docusaurus/debug/metadata', '703'),
    exact: true
  },
  {
    path: '/chatsel-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/chatsel-docs/__docusaurus/debug/registry', '227'),
    exact: true
  },
  {
    path: '/chatsel-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/chatsel-docs/__docusaurus/debug/routes', '8a9'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog',
    component: ComponentCreator('/chatsel-docs/blog', '1dd'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/archive',
    component: ComponentCreator('/chatsel-docs/blog/archive', 'ac5'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/authors',
    component: ComponentCreator('/chatsel-docs/blog/authors', '184'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/chatsel-docs/blog/authors/all-sebastien-lorber-articles', 'e67'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/authors/yangshun',
    component: ComponentCreator('/chatsel-docs/blog/authors/yangshun', 'b1a'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/first-blog-post',
    component: ComponentCreator('/chatsel-docs/blog/first-blog-post', '901'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/long-blog-post',
    component: ComponentCreator('/chatsel-docs/blog/long-blog-post', '955'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/mdx-blog-post',
    component: ComponentCreator('/chatsel-docs/blog/mdx-blog-post', '3d4'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/tags',
    component: ComponentCreator('/chatsel-docs/blog/tags', 'a59'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/tags/docusaurus',
    component: ComponentCreator('/chatsel-docs/blog/tags/docusaurus', '390'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/tags/facebook',
    component: ComponentCreator('/chatsel-docs/blog/tags/facebook', '6a3'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/tags/hello',
    component: ComponentCreator('/chatsel-docs/blog/tags/hello', '914'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/tags/hola',
    component: ComponentCreator('/chatsel-docs/blog/tags/hola', '2ac'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/welcome',
    component: ComponentCreator('/chatsel-docs/blog/welcome', '5e5'),
    exact: true
  },
  {
    path: '/chatsel-docs/markdown-page',
    component: ComponentCreator('/chatsel-docs/markdown-page', '41f'),
    exact: true
  },
  {
    path: '/chatsel-docs/docs',
    component: ComponentCreator('/chatsel-docs/docs', '867'),
    routes: [
      {
        path: '/chatsel-docs/docs',
        component: ComponentCreator('/chatsel-docs/docs', '16f'),
        routes: [
          {
            path: '/chatsel-docs/docs',
            component: ComponentCreator('/chatsel-docs/docs', 'e9d'),
            routes: [
              {
                path: '/chatsel-docs/docs/category/behind-the-build',
                component: ComponentCreator('/chatsel-docs/docs/category/behind-the-build', '898'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/category/guidelines',
                component: ComponentCreator('/chatsel-docs/docs/category/guidelines', 'b38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t1-intro',
                component: ComponentCreator('/chatsel-docs/docs/t1-intro', 'c34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t2-behind-the-build/Chatbot Design/p1-system-prompt',
                component: ComponentCreator('/chatsel-docs/docs/t2-behind-the-build/Chatbot Design/p1-system-prompt', 'b8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t2-behind-the-build/Chatbot Design/p2-knowledge-base',
                component: ComponentCreator('/chatsel-docs/docs/t2-behind-the-build/Chatbot Design/p2-knowledge-base', 'f58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t2-behind-the-build/Chatbot Design/p3-chatbot-evaluation',
                component: ComponentCreator('/chatsel-docs/docs/t2-behind-the-build/Chatbot Design/p3-chatbot-evaluation', '2ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t2-behind-the-build/Chatbot Design/p4-no-code-demo',
                component: ComponentCreator('/chatsel-docs/docs/t2-behind-the-build/Chatbot Design/p4-no-code-demo', '73c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t2-behind-the-build/getting-started',
                component: ComponentCreator('/chatsel-docs/docs/t2-behind-the-build/getting-started', '5b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t2-behind-the-build/Learning Engineering/p1-learning-engineering',
                component: ComponentCreator('/chatsel-docs/docs/t2-behind-the-build/Learning Engineering/p1-learning-engineering', '633'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t2-behind-the-build/Learning Engineering/p2-user-funnel-chatsel',
                component: ComponentCreator('/chatsel-docs/docs/t2-behind-the-build/Learning Engineering/p2-user-funnel-chatsel', 'd9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t2-behind-the-build/Learning Engineering/p3-ux-research-chatsel',
                component: ComponentCreator('/chatsel-docs/docs/t2-behind-the-build/Learning Engineering/p3-ux-research-chatsel', '50c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t3-behavioral-science/experiment-design',
                component: ComponentCreator('/chatsel-docs/docs/t3-behavioral-science/experiment-design', 'b74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t3-behavioral-science/intervention-design',
                component: ComponentCreator('/chatsel-docs/docs/t3-behavioral-science/intervention-design', '9ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t3-behavioral-science/manage-docs-versions',
                component: ComponentCreator('/chatsel-docs/docs/t3-behavioral-science/manage-docs-versions', '599'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t3-behavioral-science/measurement',
                component: ComponentCreator('/chatsel-docs/docs/t3-behavioral-science/measurement', '29b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t3-behavioral-science/translate-your-site',
                component: ComponentCreator('/chatsel-docs/docs/t3-behavioral-science/translate-your-site', '674'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t3-behavioral-science/user-funnel',
                component: ComponentCreator('/chatsel-docs/docs/t3-behavioral-science/user-funnel', 'e54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t3-behavioral-science/ux-research',
                component: ComponentCreator('/chatsel-docs/docs/t3-behavioral-science/ux-research', '2c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/chatsel-docs/',
    component: ComponentCreator('/chatsel-docs/', '4d6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
