import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Enquiries',
    path: '/enquiry',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  
  {
    title: 'Profile',
    path: '/profile',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Payment',
    path: '/payment',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
];
