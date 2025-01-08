import type { SiteConfig } from '@/types/site'

export const siteConfig: SiteConfig = {
  name: 'StudyMe',
  description: '',
  url: 'https://studyme.app',
  authors: [
    {
      name: 'Vo Thanh Luan',
      url: 'https://luanvothanh.com'
    }
  ],
  links: {
    twitter: 'https://x.com/luanv_othanh',
    github: 'https://github.com/s3822042'
  },
  mainNav: [
    {
      title: 'home',
      href: '/'
    },
    {
      title: 'quizzes',
      href: '/quizzes'
    }
  ]
}
