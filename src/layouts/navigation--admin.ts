/*
 * @Author: Shen Shu
 * @Date: 2022-05-26 13:57:44
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-31 23:00:18
 * @FilePath: /uwcssa_ca/src/layouts/navigation--admin.ts
 * @Description:
 *
 */

const pages = [
  {
    groupTitle: 'Getting Started',
    id: 'getting-started',
    pages: [
      {
        title: 'Dashboard',
        href: '/admin',
      },
    ],
  },
  {
    groupTitle: '用户',
    id: 'UserProfile',
    pages: [
      {
        title: '用户管理',
        href: '/admin/users',
      },
    ],
  },
  {
    groupTitle: '新闻 & 文章管理',
    id: 'Article',
    pages: [
      {
        title: '发布文章',
        href: '/admin/article-publish',
      },
      {
        title: '编辑文章',
        href: '/admin/article-edit',
      },
    ],
  },
  {
    groupTitle: '活动管理',
    id: 'Activity',
    pages: [
      {
        title: '发起活动',
        href: '/admin/activity-create',
      },
    ],
  },
  {
    groupTitle: 'UWCSSA Department',
    id: 'uwcssa-department',
    pages: [
      {
        title: 'Department',
        href: '/admin/uwcssa-department',
      },
    ],
  },
  {
    groupTitle: 'UWCSSA Research & Development',
    id: 'uwcssa-research-development',
    pages: [
      {
        title: 'Research & Development',
        href: '/admin/uwcssa-research-development',
      },
    ],
  },
];

export default pages;
