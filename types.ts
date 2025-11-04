import type * as React from 'react';
import type { LucideIcon } from 'lucide-react';

export interface Thread {
  id: number;
  title: string;
  tag: string;
  url: string;
  thumbnailUrl?: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>> | LucideIcon;
  color: string;
}

export interface Announcement {
  date: string;
  text: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: LucideIcon;
}

export interface Course {
  id: string;
  name: string;
  price: number;
  description: string;
  outcomes: string[];
  thumbnailUrl: string;
}

export interface CartItem extends Omit<Product & Course, 'icon' | 'outcomes' | 'thumbnailUrl' | 'description'> {
  quantity: number;
  type: 'product' | 'course';
}
