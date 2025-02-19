import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/chatsel-docs/blog',
    component: ComponentCreator('/chatsel-docs/blog', '557'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/aboutus',
    component: ComponentCreator('/chatsel-docs/blog/aboutus', '495'),
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
    path: '/chatsel-docs/blog/authors/edmund',
    component: ComponentCreator('/chatsel-docs/blog/authors/edmund', 'bf1'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/authors/linus',
    component: ComponentCreator('/chatsel-docs/blog/authors/linus', 'dfe'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/authors/zezhen',
    component: ComponentCreator('/chatsel-docs/blog/authors/zezhen', '5a1'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/tags',
    component: ComponentCreator('/chatsel-docs/blog/tags', 'a59'),
    exact: true
  },
  {
    path: '/chatsel-docs/blog/tags/introduction',
    component: ComponentCreator('/chatsel-docs/blog/tags/introduction', '0c3'),
    exact: true
  },
  {
    path: '/chatsel-docs/markdown-page',
    component: ComponentCreator('/chatsel-docs/markdown-page', '41f'),
    exact: true
  },
  {
    path: '/chatsel-docs/docs',
    component: ComponentCreator('/chatsel-docs/docs', '808'),
    routes: [
      {
        path: '/chatsel-docs/docs',
        component: ComponentCreator('/chatsel-docs/docs', '7a5'),
        routes: [
          {
            path: '/chatsel-docs/docs',
            component: ComponentCreator('/chatsel-docs/docs', 'ba8'),
            routes: [
              {
                path: '/chatsel-docs/docs/category/behind-the-build',
                component: ComponentCreator('/chatsel-docs/docs/category/behind-the-build', '898'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/category/genai-playbooks-tbd',
                component: ComponentCreator('/chatsel-docs/docs/category/genai-playbooks-tbd', '810'),
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
                path: '/chatsel-docs/docs/t2-behind-the-build/Learning Engineering/p4-evaluation',
                component: ComponentCreator('/chatsel-docs/docs/t2-behind-the-build/Learning Engineering/p4-evaluation', '824'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t3-behavioral-science/p1-user-funnel',
                component: ComponentCreator('/chatsel-docs/docs/t3-behavioral-science/p1-user-funnel', 'd9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t3-behavioral-science/p2-user-research',
                component: ComponentCreator('/chatsel-docs/docs/t3-behavioral-science/p2-user-research', 'b1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t3-behavioral-science/p3-intervention-design',
                component: ComponentCreator('/chatsel-docs/docs/t3-behavioral-science/p3-intervention-design', 'cb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t3-behavioral-science/p4-measurement-evaluation',
                component: ComponentCreator('/chatsel-docs/docs/t3-behavioral-science/p4-measurement-evaluation', '669'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/chatsel-docs/docs/t3-behavioral-science/p5-experiment-design',
                component: ComponentCreator('/chatsel-docs/docs/t3-behavioral-science/p5-experiment-design', 'bd2'),
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
