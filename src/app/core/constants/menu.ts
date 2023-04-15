import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Apps',
      separator: true,
      items: [
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Project',
          route: '/dashboard',
          children: [
            { label: 'Dashboard', route: '' },
            { label: 'Project list', route: '' },
            { label: 'Team', route: '' },
            { label: 'Kanban board', route: '' },
            { label: 'Swimlane board', route: '' },
            { label: 'Tasks', route: '' },
            { label: 'Task detail', route: '' },
            { label: 'Users', route: '' },
            { label: 'Project create', route: '' },
          ],
        },
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Ecommerce',
          route: '/ecommerce',
          children: [
            { label: 'Dashboard', route: '' },
            { label: 'Product list', route: '' },
            { label: 'Create Product', route: '' },
            { label: 'Orders', route: '' },
            { label: 'Order details', route: '' },
            { label: 'Customers', route: '' },
            { label: 'Cart', route: '' },
            { label: 'Checkout', route: '' },
            { label: 'Sellers', route: '' },
          ],
        },
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'CRM',
          route: '/crm',
          expanded:false,
          children: [
            { label: 'Dashboard', route: '' },
            { label: 'Calendar', route: '' },
            { label: 'Customers', route: '' },
            { label: 'Customer detail', route: '' },
            { label: 'Mail', route: '' },
          ],
        },
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Sales',
          route: '/crm',
          expanded:false,
          children: [
            { label: 'Dashboard', route: '' },
            { label: 'Calendar', route: '' },
            { label: 'Customers', route: '' },
            { label: 'Customer detail', route: '' },
            { label: 'Mail', route: '' },
          ],
        },
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Blog',
          route: '/crm',
          expanded:false,
          children: [
            { label: 'Dashboard', route: '' },
            { label: 'Blog list', route: '' },
            { label: 'Blog grid', route: '' },
            { label: 'Post detail', route: '' },
            { label: 'Edit post', route: '' },
          ],
        },
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Account',
          route: '/account',
          expanded:false,
          children: [
            { label: 'Settings', route: '' },
            { label: 'Invoice', route: '' },
            { label: 'Activity log', route: '' },
            { label: 'KYC form', route: '' },
          ],
        },
        {
          icon: 'assets/icons/outline/lock-closed.svg',
          label: 'Auth',
          route: '/auth',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },

      ],
    },
    {
      group: 'UI Components',
      separator: true,
      items: [
        {
          icon: 'assets/icons/outline/download.svg',
          label: 'Download',
          route: '/download',
        },
        {
          icon: 'assets/icons/outline/gift.svg',
          label: 'Gift Card',
          route: '/gift',
        },
        {
          icon: 'assets/icons/outline/users.svg',
          label: 'Users',
          route: '/users',
        },
      ],
    },
    {
      group: 'Guide',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/cog.svg',
          label: 'Documentation',
          route: '/settings',
        },
        {
          icon: 'assets/icons/outline/bell.svg',
          label: 'Utilities',
          route: '/gift',
        }
      ],
    },
  ];
}
