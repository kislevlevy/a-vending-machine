import { Link, useLocation, useNavigate } from 'react-router-dom';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

import { slugify } from '@/utils/slugify';
import config from '@/utils/config';
import { getAssetUrl } from '@/utils/paths';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <nav className="sticky top-0 flex bg-white/30 backdrop-blur-sm justify-between bg-blue-100 p-3 items-center z-10">
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList dir="rtl" className="gap-x-2">
          {config.pages.map((page, i) => (
            <MenuItem page={page} key={'menu-item-' + i} />
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Sheet>
        <SheetTrigger className="md:hidden" asChild>
          <Button variant="outline">
            <Icon path={mdiMenu} size={1} />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-52">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <NavigationMenu>
            <NavigationMenuList dir="rtl" className="flex-col mt-2 space-y-2">
              {config.pages.map((page, i) => (
                <MenuItem
                  page={page}
                  classNames="w-44"
                  key={'menu-item-mobile-' + i}
                />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>

      <Link to="/">
        <img src={getAssetUrl('mainLogo.png')} className="h-20" alt={config.name} />
      </Link>
    </nav>
  );
}

interface MenuItemProps {
  page: string;
  classNames?: string;
}
function MenuItem({ page, classNames = '' }: MenuItemProps) {
  const { pathname: location } = useLocation();
  const navigete = useNavigate();
  const slug = '/' + slugify(page);
  const isActive = decodeURIComponent(location) === slug;

  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        onClick={() => navigete(slug)}
        className={`${navigationMenuTriggerStyle()} cursor-pointer ${
          isActive ? 'bg-blue-300 hover:bg-blue-300 text-white hover:text-white' : ''
        } ${classNames}`}
      >
        {page}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
