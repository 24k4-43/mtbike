import { Product, FeatureCard } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nomad X0 AXS RSV',
    category: 'Carbon CC',
    description: 'Full SRAM X0 T-TYPE electronic drivetrain, top spec suspension and SRAM Maven Silver Stealth brakes.',
    price: 9749,
    image: '/img/MY25_Nomad_CC_X0_AXS_RSV_GlossLightTeal_45607b92-c723-43f3-be65-4f6854c303d6 (1).png',
    tag: 'new',
    colors: ['#3E2B2E', '#A0D1CA']
  },
  {
    id: '2',
    name: 'Bronson GX AXS',
    category: 'Carbon C',
    description: 'The high-performance all-rounder. Full SRAM GX Eagle electronic Transmission and Fox Elite suspension.',
    price: 7249,
    image: '/img/MY26_Bronson_C_GX_AXS_GlossCarbon_87ab7eca-f466-40d1-9819-c2ba2234f0d7 (1).png',
    tag: 'popular',
    colors: ['#425445', '#1f1f1f']
  },
  {
    id: '3',
    name: 'Blur XX AXS FA RSV',
    category: 'Carbon CC',
    description: 'Rockshox Flight Attendant electronically controlled suspension, the lightest CC carbon frame.',
    price: 13449,
    image: '/img/MY25_Blur_CC_XX_FA_AXS_RSV_GlossDarkTeal (1).png',
    tag: 'elite',
    colors: ['#003B4B', '#3D3935']
  },
  {
    id: '4',
    name: 'Bullit 90',
    category: 'Carbon C',
    description: 'Reserve AL wheels, SRAM Maven brakes, and OneUp dropper. FOX Float Performance suspension.',
    price: 9099,
    image: '/img/MY26_Bullit_C_90_GlossBlack_7736743a-51e8-45c0-aa63-0bf02cabe92e (1).png',
    tag: 'ebike',
    colors: ['#000000', '#21a3bf']
  },
  {
    id: '5',
    name: 'Heckler SL',
    category: 'Carbon CC',
    description: 'The lightest electric mountain bike in our fleet, offering natural ride feel and power.',
    price: 11299,
    image: '/img/MY25_Vala_CC_X0_AXS_RSV_GlossGrey_307f3bae-9bec-46a1-b1bf-f98443189034 (1).png',
    tag: 'new',
    colors: ['#636e72', '#2d3436']
  }
];

export const CATEGORY_BIKES: FeatureCard[] = [
  {
    label: 'CHEFCHAAUEN',
    title: 'Long Travel Enduro Beast',
    description: 'Long travel enduro beast.',
    image: '/img/HI-Adventures-Mountain-Bike-Tour-Ecuador-High-Res-374-1024x1024.jpg'
  },
  {
    label: 'IMSFRANE & BIN EL OUIDANE',
    title: 'Power Through Any Terrain',
    description: 'Power through any terrain.',
    image: '/img/HI-ADVENTURES_TOUR_BHUTAN_2024_MTB_KRISTINA-VAKOVA_145-scaled-e1739204039628.jpg.webp'
  },
  {
    label: 'TOBKAL',
    title: 'The Standard for DH Racing',
    description: 'The standard for DH racing.',
    image: '/img/West-Coast-Joe-Barnes-Max-Schumann-20.jpg'
  },
];

export const TOURS: FeatureCard[] = [
  {
    title: 'imsfrane & bin el ouidane',
    image: '/img/La_cathédrale,_Azilal.jpg',
    description: '',
    label: ''
  },
  {
    title: 'Ouiouane Khenifra',
    image: '/img/20220324_185415.jpg',
    description: '',
    label: ''
  }
];