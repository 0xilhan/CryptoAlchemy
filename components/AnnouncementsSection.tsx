import React from 'react';
import { ANNOUNCEMENTS } from '../constants';

const AnnouncementsSection: React.FC = () => {
  const announcements = [...ANNOUNCEMENTS, ...ANNOUNCEMENTS];

  return (
    <section className="py-12 bg-[#0D0D0D] border-y border-gray-800">
      <div className="marquee-container">
        <div className="marquee">
          {announcements.map((announcement, index) => (
            <div key={index} className="flex-shrink-0 flex items-center space-x-4 mx-8 group" data-cursor-hover>
              <span className="text-[#9CA3AF] text-sm font-bold">{announcement.date}</span>
              <span className="text-gray-400 group-hover:text-white transition-colors duration-200">{announcement.text}</span>
              <span>{announcement.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;