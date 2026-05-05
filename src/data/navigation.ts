import type { NavigationLink, MegaMenuCategory } from '@/types/navigation';

export const navigationLinks: NavigationLink[] = [
  { label: 'Be Inspired', path: '/' },
  { label: 'Places to Go', path: '/explore' },
  { label: 'Things to Do', path: '/things-to-do' },
  { label: 'Plan Your Trip', path: '/plan-trip' },
  { label: 'Explore', path: '/explore' }
];

export const megaMenuCategories: MegaMenuCategory[] = [
  {
    title: 'Cities',
    items: ['Tirana', 'Berat', 'Gjirokastër', 'Shkodër', 'Korçë', 'Vlorë', 'Durrës', 'Sarandë', 'Elbasan', 'Krujë']
  },
  {
    title: 'Regions',
    items: ['Albanian Riviera', 'Theth', 'Valbona', 'Llogara', 'Lake Ohrid', 'Prespa', 'Dibër', 'Përmet', 'Himarë', 'Ksamil']
  },
  {
    title: 'Beaches',
    items: ['Ksamil', 'Dhërmi', 'Jale', 'Gjipe', 'Borsh', 'Palasë', 'Himarë', 'Shëngjin', 'Velipojë', 'Livadhi']
  },
  {
    title: 'Mountains',
    items: ['Theth National Park', 'Valbona Valley', 'Llogara National Park', 'Tomorr Mountain', 'Korab Mountain', 'Osumi Canyon', 'Blue Eye', 'Bovilla Lake', 'Komani Lake', 'Divjakë-Karavasta']
  }
];
