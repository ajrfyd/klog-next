export const headerData = {
  logo: 'klog',
  nav: [
    {
      url: '/',
      title: 'Blog',
    },
    {
      url: '/profile',
      title: 'Profile',
    },
  ],
  socialMediaLinks: [
    {
      url: process.env.NEXT_PUBLIC_GITHUB_REPO,
      bootstrapIcon: 'bi bi-github',
    },
    {
      url: '/login',
      bootstrapIcon: 'fa fa-user',
    },
    // {
    //   url: '#',
    //   bootstrapIcon: 'bi bi-twitter-x',
    // },
    // {
    //   url: '#',
    //   bootstrapIcon: 'bi bi-instagram',
    // },
  ],
};
