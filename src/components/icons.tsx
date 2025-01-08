import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  ChevronLeftSquare,
  DatabaseBackup,
  FolderSync,
  Info,
  LogOut,
  type LucideProps,
  Minus,
  Moon,
  Play,
  Plus,
  Search,
  Sun,
  Tv,
  X
} from 'lucide-react'

import { cn } from '@/lib/utils'

const IconBrandGoogle = ({ className, ...props }: LucideProps) => (
  <svg
    width="1em"
    height="1em"
    className={cn('fill-foreground', className)}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M17.6 8.5h-7.5v3h4.4c-.4 2.1-2.3 3.5-4.4 3.4c-2.6-.1-4.6-2.1-4.7-4.7c-.1-2.7 2-5 4.7-5.1c1.1 0 2.2.4 3.1 1.2l2.3-2.2C14.1 2.7 12.1 2 10.2 2c-4.4 0-8 3.6-8 8s3.6 8 8 8c4.6 0 7.7-3.2 7.7-7.8c-.1-.6-.1-1.1-.3-1.7z"
      clipRule="evenodd"
    />
  </svg>
)

const IconBrandDiscord = ({ className, ...props }: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 24 24"
    className={cn('fill-foreground', className)}
    data-slot="icon"
    aria-hidden="true"
    {...props}
  >
    <path
      fill="currentColor"
      d="M19.636 5.023a18.1 18.1 0 0 0-4.539-1.404q-.321.579-.581 1.188a16.8 16.8 0 0 0-5.037 0 13 13 0 0 0-.582-1.188 18.3 18.3 0 0 0-4.542 1.407C1.483 9.3.705 13.465 1.093 17.572A18.3 18.3 0 0 0 6.66 20.38q.677-.916 1.192-1.933a12 12 0 0 1-1.877-.9c.157-.115.311-.234.46-.348a13.02 13.02 0 0 0 11.13 0q.225.186.46.347-.902.535-1.88.903.513 1.017 1.191 1.931a18.2 18.2 0 0 0 5.57-2.808c.457-4.762-.78-8.89-3.27-12.55ZM8.346 15.046c-1.086 0-1.982-.99-1.982-2.207 0-1.218.865-2.217 1.978-2.217s2.002.999 1.983 2.216c-.02 1.218-.874 2.208-1.98 2.208Zm7.309 0c-1.087 0-1.98-.99-1.98-2.207 0-1.218.865-2.217 1.98-2.217s1.996.999 1.977 2.216-.872 2.208-1.978 2.208Z"
    ></path>
  </svg>
)

export const Icons = {
  logo: ChevronLeftSquare,
  close: X,
  moon: Moon,
  sun: Sun,
  play: Play,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  tv: Tv,
  info: Info,
  logout: LogOut,
  search: Search,
  bookmark: Bookmark,
  discord: IconBrandDiscord,
  google: IconBrandGoogle,
  plus: Plus,
  minus: Minus,
  backup: DatabaseBackup,
  sync: FolderSync
}
