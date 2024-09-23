import NewsLetterForm from '@/components/newsletter-form';
import { Category } from '@/app/layout';
import Link from 'next/link';
import Container from '@/components/container';
import InstagramIcon from '@/icons/instagram';
import FacebookIcon from '@/icons/facebook-icon';
import SkypeIcon from '@/icons/skype-icon';
import PinterestIcon from '@/icons/pinterest-icon';
import TwitterIcon from '@/icons/twitter-icon';
import LinkedInIcon from '@/icons/linkedin-icon';

interface FooterProps {
  categories: Category[];
}

const menuList = [
  {
    name: 'New Arrivals',
    url: '/category/new-arrivals',
  },
  {
    name: 'Best Sellers',
    url: '/category/best-sellers',
  },
  {
    name: 'Recently viewed',
    url: '/recently-viewed',
  },
  {
    name: 'Popular this week',
    url: '/popular',
  },
  {
    name: 'All Products',
    url: '/products',
  },
];

const ourCompanyList = [
  {
    name: 'About us',
    url: '/about-us',
  },
  {
    name: 'Vacancies',
    url: '/vacancies',
  },
  {
    name: 'Contact us',
    url: '/contact-us',
  },
  {
    name: 'Privacy',
    url: '/privacy',
  },
  {
    name: 'Returns policy',
    url: '/returns-policy',
  },
];

const socialMedia = [
  {
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com',
  },
  {
    icon: <InstagramIcon />,
    url: 'https://www.instagram.com',
  },
  {
    icon: <FacebookIcon />,
    url: 'https://www.facebook.com',
  },
  {
    icon: <SkypeIcon />,
    url: 'https://www.skype.com',
  },
  {
    icon: <TwitterIcon />,
    url: 'https://www.twitter.com',
  },
  {
    icon: <PinterestIcon />,
    url: 'https://www.pinterest.com',
  },
];

export default function Footer({ categories }: FooterProps) {
  return (
    <Container className='bg-dark-primary'>
      <footer className='flex flex-col px-6 pt-10 lg:grid lg:grid-cols-2'>
        <div className='flex flex-wrap justify-between gap-y-10 pb-8 lg:basis-1/2 lg:flex-nowrap lg:gap-x-4'>
          <div className='basis-1/2'>
            <span className='font-clash text-base'>Categories</span>
            <ul className='mt-3 space-y-3 font-satoshi text-sm'>
              {categories.slice(0, 6).map((category) => (
                <li key={category.slug}>
                  <Link href={`/category/${category.slug}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='basis-1/2'>
            <span className='font-clash text-base'>Menu</span>
            <ul className='mt-3 space-y-3 font-satoshi text-sm'>
              {menuList.map((menu) => (
                <li key={menu.name}>
                  <Link href={menu.url}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='basis-1/2'>
            <span className='font-clash text-base'>Our company</span>
            <ul className='mt-3 space-y-3 font-satoshi text-sm'>
              {ourCompanyList.map((company) => (
                <li key={company.name}>
                  <Link href={company.url}>{company.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='mt-10 space-y-4 lg:mt-0'>
          <span className='font-clash text-base'>Join our waiting list</span>
          <NewsLetterForm variant='secondary' />
        </div>
        <div className='mt-4 flex justify-center border-t border-primary py-4 lg:col-span-2 lg:justify-between'>
          <p className='font-satoshi text-sm text-white'>
            Copyright {new Date().getFullYear()} Avion LTD
          </p>
          <div className='hidden items-center gap-x-6 lg:flex'>
            {socialMedia.map((social) => (
              <SocialMediaLink
                key={social.url}
                href={social.url}
                icon={social.icon}
              />
            ))}
          </div>
        </div>
      </footer>
    </Container>
  );
}

function SocialMediaLink({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a href={href} target='_blank' className='ml-4 text-white'>
      {icon}
    </a>
  );
}
