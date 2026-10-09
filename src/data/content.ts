import type {
  Member,
  ExecutiveMember,
  Advisor,
  SpecialRecognitionMember,
  Project,
  Achievement,
  Gallery,
} from '@/types/types';

export const leadershipTeam: Member[
  {
    name: 'Md. Mottakin Bin Arif',
    id: 'Cam-CC-240004',
    role: 'Secretary (Publicity)',
    term: '2024–2025',
    classInfo: 'Class 9 EV',
    campus: 'Campus 2',
    imageUrl: '/images/advisor&leadership/Md. Mottakin Bin Arif.jpg',
  },
  {
    name: 'Samira Subha',
    id: 'Cam-CC-240022',
    role: 'Organizing Secretary',
    term: '2025',
    classInfo: 'Class 9 BV (G)',
    campus: 'Campus 2',
    imageUrl: '/images/advisor&leadership/Samirah Subha.jpeg',
  },
  {
    name: 'Kishor Sutradhar',
    id: 'Cam-CC-240005',
    role: 'Treasurer',
    term: '2024–2025',
    classInfo: 'Class 9 BV (B)',
    campus: 'Campus 2',
    imageUrl: '/images/advisor&leadership/Kishore Sutradhar.jpg',
  },
];

export const specialRecognition: SpecialRecognitionMember[] = [
  {
    name: 'Md. Mottakin Bin Arif',
    title:
      'Lead Developer of the Official Cambrian Climate Club Website and Publisher of the First Edition of Climate Chronicles (2025–2026)',
    badge: 'Special Recognition',
    imageUrl: '/images/advisor&leadership/Md. Mottakin Bin Arif.jpg',
  },
  {
    name: 'Md. Motammim Bin Arif',
    title: 'Chief Editor of the First Edition of Climate Chronicles (2025–2026)',
    badge: 'Special Recognition',
    imageUrl: '/images/advisor&leadership/Md. Motammim Bin Arif.jpg',
  },
  {
    name: 'Hasan Al Jayed',
    title: 'Editor of the First Edition of Climate Chronicles (2025–2026)',
    badge: 'Special Recognition',
    imageUrl: '/images/Executive Commitee/Hasan Al Jayed.jpeg',
  },
];

export const alumniMembers: ExecutiveMember[] = [
  {
    name: 'Mariam Jannati Tisha',
    id: 'Cam-CC-230003',
    role: 'General Secretary (2023), Organizing Secretary (2024)',
  },
  {
    name: 'Ahmed Zarir',
    id: 'Cam-CC-230004',
    role: 'Organizing Secretary (2023)',
  },
  {
    name: 'Samin Tahmid',
    id: 'Cam-CC-230005',
    role: 'Office Secretary (2023)',
  },
  {
    name: 'Muhabbir Siddique Tosin',
    id: 'Cam-CC-230007',
    role: 'Treasurer (2023)',
  },
  { name: 'Abu Bokkor', id: 'Cam-CC-230008', role: 'Executive Member' },
  { name: 'AZM Mashnobi', id: 'Cam-CC-230009', role: 'Executive Member' },
  {
    name: 'Md. Mohiuddin Kabir',
    id: 'Cam-CC-230013',
    role: 'Executive Member',
  },
  { name: 'Nokibul Islam', id: 'Cam-CC-230015', role: 'Executive Member' },
];

export const currentMembers: ExecutiveMember[
  {
    serial: 5,
    name: 'Md. Mottakin Bin Arif',
    id: 'Cam-CC-240004',
    role: 'Secretary (Publicity)',
  },
  {
    serial: 6,
    name: 'Kishor Sutradhar',
    id: 'Cam-CC-240005',
    role: 'Treasurer',
  },
  {
    serial: 21,
    name: 'Samira Subha',
    id: 'Cam-CC-240022',
    role: 'Organizing Secretary',
  },
];

export const advisoryCommittee: Advisor[] = [
  {
    name: 'Rumana Khanam',
    role: 'Chief Advisor (Vice Principal)',
    imageUrl: '/images/advisor&leadership/Rumana Khanam.jpg',
  },
  {
    name: 'Md. Kamruzzaman',
    role: 'Advisor',
    imageUrl: '/images/advisor&leadership/Md. Kamruzzaman.jpg',
  },
  {
    name: 'Jakir Hoissain',
    role: 'Advisor',
    imageUrl: '/images/advisor&leadership/Zakir Hossain.jpg',
  },
  {
    name: 'Monirul Islam',
    role: 'Advisor',
    imageUrl: '/images/advisor&leadership/Monirul Islam.jpg',
  },
  {
    name: 'Md. S H Khokon Mia',
    role: 'Advisor & Club Coordinator',
    imageUrl: '/images/advisor&leadership/Md. S H Khokon Mia.jpg',
  },
  {
    name: 'Hiren Sarkar',
    role: 'Advisor',
    imageUrl: '/images/advisor&leadership/Hiren Sarkar.jpeg',
  },
];

export const projects: Project[] = [
  {
    title: 'Campus Cleanliness Drive',
    imageUrl: '/images/Campus Cleanliness Drive.jpg',
    description:
      'Our ongoing initiative to maintain cleanliness across the campus, organizing regular cleanup drives and promoting waste segregation practices among students and staff.',
  },
  {
    title: 'Campus Greening Initiative',
    imageUrl: '/images/Campus Greening Initiative.jpg',
    description:
      'A comprehensive program to increase green cover on campus by planting native trees and creating small gardens in designated areas around the school.',
  },
  {
    title: 'Climate Action E-Magazine',
    imageUrl: '/images/homepagepicture3.jpg',
    description:
      'Our digital magazine highlighting climate issues, environmental success stories, and educational content to raise awareness among students and the community.',
  },
];

export const achievements: Achievement[] = [
  { year: '2023', description: 'Club founded with 20+ dedicated students.' },
  {
    year: 'Early 2024',
    description: 'The 2nd club election was successfully held.',
  },
  {
    year: 'August 2024',
    description: 'Planted over 100 trees on the school rooftop.',
  },
  {
    year: '2024',
    description:
      'Won 5 medals (3 silver, 2 bronze) at the National Nature Conservation Association (NNCA) Olympiad.',
  },
  {
    year: 'January 2025',
    description:
      'Awarded "Best Club" and "Best Climate Leader" at the GCFILS Conference.',
  },
  {
    year: 'February 2025',
    description:
      'Featured on the Channel i News Portal for environmental contributions.',
  },
  {
    year: 'April 2025',
    description: 'The 3rd club election was successfully held.',
  },
];

export const galleries: Gallery[] = [
  { title: 'Climate Club Logo', images: ['/images/Club logo.png'] },
  {
    title: 'Achievements',
    images: [
      '/images/achivement/Achievement- 1.jpg',
      '/images/achivement/Achievement- 2.jpg',
      '/images/achivement/Achievement- 3.jpg',
      '/images/achivement/Achievement- 4.jpg',
      '/images/achivement/Achievement- 5.jpg',
      '/images/achivement/Achievement- 6.jpg',
      '/images/achivement/Achievement- 7.jpg',
      '/images/achivement/Achievement- 8.jpg',
      '/images/achivement/Achievement- 9.jpg',
      '/images/achivement/Achievement- 10.png',
      '/images/achivement/Achievement- 11.png',
      '/images/achivement/Achievement- 12.png',
      '/images/achivement/Achievement- 13.png',
    ],
  },
  {
    title: 'NCCA 2024',
    images: [
      '/images/NCCA2024/NCCA- 1.jpg',
      '/images/NCCA2024/NCCA- 2.jpg',
      '/images/NCCA2024/NCCA- 3.jpg',
      '/images/NCCA2024/NCCA- 4.jpg',
      '/images/NCCA2024/NCCA- 5.jpg',
      '/images/NCCA2024/NCCA- 6.jpg',
      '/images/NCCA2024/NCCA- 7.jpg',
      '/images/NCCA2024/NCCA- 8.jpg',
      '/images/NCCA2024/NCCA- 9.jpg',
      '/images/NCCA2024/NCCA- 10.jpg',
      '/images/NCCA2024/NCCA- 11.jpg',
      '/images/NCCA2024/NCCA- 12.jpg',
      '/images/NCCA2024/NCCA- 13.jpg',
      '/images/NCCA2024/NCCA- 14.jpg',
    ],
  },
  {
    title: 'Training Days 1-4',
    images: [
      '/images/TRAINING/Training- 1.jpg',
      '/images/TRAINING/Training- 2.jpg',
      '/images/TRAINING/Training- 3.jpg',
      '/images/TRAINING/Training- 4.jpg',
      '/images/TRAINING/Training- 5.jpg',
      '/images/TRAINING/Training- 6.jpg',
      '/images/TRAINING/Training- 7.jpg',
      '/images/TRAINING/Training- 8.jpg',
    ],
  },
  {
    title: 'MGM',
    images: [
      '/images/MGM/MGM- 1.png',
      '/images/MGM/MGM- 2.jpg',
      '/images/MGM/MGM- 3.jpg',
      '/images/MGM/MGM- 4.jpg',
      '/images/MGM/MGM- 5.jpg',
      '/images/MGM/MGM- 6.jpg',
    ],
  },
  {
    title: 'SPSC',
    images: [
      '/images/SPSC/SPSC 1.jpeg',
      '/images/SPSC/SPSC 2.jpeg',
      '/images/SPSC/SPSC 3.jpeg',
      '/images/SPSC/SPSC 4.jpeg',
      '/images/SPSC/SPSC 5.jpeg',
      '/images/SPSC/SPSC 6.jpeg',
      '/images/SPSC/SPSC 7.jpeg',
      '/images/SPSC/SPSC 8.jpeg',
      '/images/SPSC/SPSC 9.jpeg',
      '/images/SPSC/SPSC 10.jpeg',
      '/images/SPSC/SPSC 11.jpeg',
      '/images/SPSC/SPSC 12.jpeg',
      '/images/SPSC/SPSC 13.jpeg',
      '/images/SPSC/SPSC 14.jpeg',
      '/images/SPSC/SPSC 15.jpeg',
      '/images/SPSC/SPSC 16.jpeg',
      '/images/SPSC/SPSC 17.jpeg',
      '/images/SPSC/SPSC 18.jpeg',
      '/images/SPSC/SPSC 19.jpeg',
    ],
  },
  {
    title: 'Awareness Materials',
    images: [
      '/images/Awareness Materials/Awareness 1.jpeg',
      '/images/Awareness Materials/Awareness 2.jpeg',
      '/images/Awareness Materials/Awareness 3.jpeg',
      '/images/Awareness Materials/Awareness 4.jpeg',
      '/images/Awareness Materials/Awareness 5.jpeg',
      '/images/Awareness Materials/Awareness 6.jpeg',
      '/images/Awareness Materials/Awareness 7.jpeg',
      '/images/Awareness Materials/Awareness 8.jpeg',
      '/images/Awareness Materials/Awareness 9.jpeg',
      '/images/Awareness Materials/Awareness 10.jpeg',
      '/images/Awareness Materials/Awareness 11.jpeg',
      '/images/Awareness Materials/Awareness 12.jpeg',
      '/images/Awareness Materials/Awareness 13.jpeg',
      '/images/Awareness Materials/Awareness 14.jpeg',
      '/images/Awareness Materials/Awareness 15.jpeg',
      '/images/Awareness Materials/Awareness 16.jpeg',
      '/images/Awareness Materials/Awareness 17.jpeg',
      '/images/Awareness Materials/Awareness 18.jpeg',
      '/images/Awareness Materials/Awareness 19.jpeg',
      '/images/Awareness Materials/Awareness 20.jpeg',
      '/images/Awareness Materials/Awareness 21.jpeg',
      '/images/Awareness Materials/Awareness 22.jpeg',
      '/images/Awareness Materials/Awareness 23.jpeg',
      '/images/Awareness Materials/Awareness 24.jpeg',
      '/images/Awareness Materials/Awareness 25.jpeg',
      '/images/Awareness Materials/Awareness 26.jpeg',
      '/images/Awareness Materials/Awareness 27.jpeg',
      '/images/Awareness Materials/Awareness 28.jpeg',
      '/images/Awareness Materials/Awareness 29.jpeg',
      '/images/Awareness Materials/Awareness 30.jpeg',
      '/images/Awareness Materials/Awareness 31.jpeg',
      '/images/Awareness Materials/Awareness 36.jpeg',
    ],
  },
  {
    title: 'Greening Activities',
    images: [
      '/images/greening/Greening- 1.jpg',
      '/images/greening/Greening- 2.jpg',
      '/images/greening/Greening- 3.jpg',
      '/images/greening/Greening- 4.jpg',
      '/images/greening/Greening- 5.jpg',
      '/images/greening/Greening- 6.jpg',
      '/images/greening/Greening- 7.jpg',
      '/images/greening/Greening- 8.jpg',
    ],
  },
  {
    title: 'Cleaning Activities',
    images: [
      '/images/cleaning/Cleaning- 1.jpg',
      '/images/cleaning/Cleaning- 2.jpg',
      '/images/cleaning/Cleaning- 3.jpg',
      '/images/cleaning/Cleaning- 4.jpg',
    ],
  },
];
