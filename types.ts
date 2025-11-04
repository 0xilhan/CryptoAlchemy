import type * as React from 'react';
import type { LucideIcon } from 'lucide-react';

export interface Thread {
  id: number;
  title: string;
  tag: string;
  url: string;
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

// FIX: Add missing type definitions for e-commerce functionality.
export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface Course {
  id: string;
  name: string;
  price: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
