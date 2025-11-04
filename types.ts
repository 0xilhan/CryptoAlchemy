import React from 'react';

export interface Thread {
  id: number;
  title: string;
  tag: string;
  url: string;
}

export interface Announcement {
  id: number;
  date: string;
  text: string;
  icon: string;
}

export interface SocialLink {
  id: number;
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  url: string;
  color: string;
}
