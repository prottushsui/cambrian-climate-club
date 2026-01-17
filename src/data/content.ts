import type { Member, ExecutiveMember, Advisor, Project, Achievement, Gallery } from '@/types/types';

export const leadershipTeam: Omit<Member, 'id' | 'classInfo' | 'campus'>[] = [
  {
    name: 'Md. Motammim Bin Arif',
    role: 'President',
    term: '2024–2025',
    imageUrl: '/people/Md. Motammim Bin Arif.jpg',
  },
  {
    name: 'Maria Anamika Bairagee',
    role: 'Vice-President',
    term: '2023–2025',
    imageUrl: '/people/Maria Anamika Bairagee.jpg',
  },
  {
    name: 'Towfiquzaman',
    role: 'General Secretary',
    term: '2024–2025',
    imageUrl: '/people/H.M Towfiquzzaman.jpg',
  },
  {
    name: 'Md. Muttakin Bin Arif Prottush',
    role: 'Publicity Secretary',
    term: '2024–2025',
    imageUrl: '/people/Md. Mottakin Bin Arif.jpg',
    specialRecognition: true
  },
  {
    name: 'Kazi Tasfia Priota',
    role: 'Office Secretary',
    term: '2024–2025',
    imageUrl: '/people/Kazi Tasfia Priota.jpg',
  },
  {
    name: 'Samira Subha',
    role: 'Organizing Secretary',
    term: '2025',
    imageUrl: '/people/Samirah Subha.jpeg',
  },
  {
    name: 'Kishor Sutradhar',
    role: 'Treasurer',
    term: '2024–2025',
    imageUrl: '/people/Kishore Sutradhar.jpg',
  },
];

export const alumniMembers: ExecutiveMember[] = [
  { name: 'Maryam Jannati Tisha', id: 'Cam-CC-230003', role: 'General Secretary (2023), Organizing Secretary (2024)' },
  { name: 'Ahmad Zarir', id: 'Cam-CC-230004', role: 'Organizing Secretary (2023)' },
  { name: 'Samin Tahmid', id: 'Cam-CC-230005', role: 'Office Secretary (2023)' },
  { name: 'AZM Mashnobi', id: 'Cam-CC-230009', role: 'Executive Member' },
];

export const currentMembers: Omit<ExecutiveMember, 'id'>[] = [
    { serial: 1, name: "Md. Motammim Bin Arif", role: "President" },
    { serial: 2, name: "Maria Anamika Boiragee", role: "Vice-President" },
    { serial: 3, name: "Towfiquzaman", role: "General Secretary" },
    { serial: 4, name: "Maryam Jannati Tisha", role: "Organizing Secretary" },
    { serial: 5, name: "Kazi Tasfia Priota", role: "Office Secretary" },
    { serial: 6, name: "Md. Muttakin Bin Arif Prottush", role: "Publicity Secretary" },
    { serial: 7, name: "Kishor Sutradhar", role: "Treasurer" },
    { serial: 8, name: "Md. Muktader Islam Shoibal", role: "Executive Member" },
    { serial: 9, name: "Ragib Ahammed", role: "Executive Member" },
    { serial: 10, name: "Tamanna Ferdous", role: "Executive Member" },
    { serial: 11, name: "Amir Hossain", role: "Executive Member" },
    { serial: 12, name: "Labonno Mashfiq", role: "Executive Member" },
    { serial: 13, name: "Hasan Al Jayed", role: "Executive Member" },
    { serial: 14, name: "Rahman Hossain", role: "Executive Member" },
    { serial: 15, name: "Munsif Wahid", role: "Executive Member" },
    { serial: 16, name: "Md. Muntazir Rahman", role: "Executive Member" },
    { serial: 17, name: "Sofiuddin Hossain Sabbir", role: "Executive Member" },
    { serial: 18, name: "Md. Kabir", role: "Executive Member" },
    { serial: 19, name: "Afra Tahsin Ilma", role: "Executive Member" },
    { serial: 20, name: "Nahida Haque Nedha", role: "Executive Member" },
    { serial: 21, name: "Sabika Ayub", role: "Executive Member" },
    { serial: 22, name: "Samira Subha", role: "Executive Member" },
    { serial: 23, name: "Azana Hasan Adhora", role: "Executive Member" },
    { serial: 24, name: "AZM Mashnobi", role: "Executive Member" },
    { serial: 25, name: "Ahmad Zarir", role: "Executive Member" },
    { serial: 26, name: "Samin Tahmid", role: "Executive Member" },
    { serial: 27, name: "Hassan Abdur Rahman", role: "Executive Member" },
    { serial: 28, name: "Md. Sayem", role: "Executive Member" },
    { serial: 29, name: "Muksina Molla", role: "Executive Member" },
    { serial: 30, name: "Rakin", role: "Executive Member" },
    { serial: 31, name: "Jannatul", role: "Executive Member" },
];

export const advisoryCommittee: Advisor[] = [
  { name: 'Rumana Khanam', role: 'Chief Advisor (Vice Principal)', imageUrl: '/images/advisor&leadership/Rumana Khanam.jpg' },
  { name: 'Md. Kamruzzaman', role: 'Advisor', imageUrl: '/images/advisor&leadership/Md. Kamruzzaman.jpg' },
  { name: 'Jakir Hoissain', role: 'Advisor', imageUrl: '/images/advisor&leadership/Zakir Hossain.jpg' },
  { name: 'Monirul Islam', role: 'Advisor', imageUrl: '/images/advisor&leadership/Monirul Islam.jpg' },
  { name: 'Md. S H Khokon Mia', role: 'Advisor & Club Coordinator', imageUrl: '/images/advisor&leadership/Md. S H Khokon Mia.jpg' },
  { name: 'Hiren Sarkar', role: 'Advisor', imageUrl: '/images/advisor&leadership/Hiren Sarkar.jpeg' },
];

export const projects: Project[] = [
  { 
    title: 'Campus Cleanliness Drive', 
    imageUrl: '/images/Campus Cleanliness Drive.jpg',
    description: 'Our ongoing initiative to maintain cleanliness across the campus, organizing regular cleanup drives and promoting waste segregation practices among students and staff.'
  },
  { 
    title: 'Campus Greening Initiative', 
    imageUrl: '/images/Campus Greening Initiative.jpg',
    description: 'A comprehensive program to increase green cover on campus by planting native trees and creating small gardens in designated areas around the school.'
  },
  { 
    title: 'Climate Action E-Magazine', 
    imageUrl: '/images/homepagepicture3.jpg',
    description: 'Our digital magazine highlighting climate issues, environmental success stories, and educational content to raise awareness among students and the community.'
  },
];

export const achievements: Achievement[] = [
    { year: '2023', description: 'Club founded with 20+ dedicated students.' },
    { year: 'Early 2024', description: 'The 2nd club election was successfully held.' },
    { year: 'August 2024', description: 'Planted over 100 trees on the school rooftop.' },
    { year: '2024', description: 'Won 5 medals (3 silver, 2 bronze) at the National Nature Conservation Association (NNCA) Olympiad.' },
    { year: 'January 2025', description: 'Awarded "Best Club" and "Best Climate Leader" at the GCFILS Conference.' },
    { year: 'February 2025', description: 'Featured on the Channel i News Portal for environmental contributions.' },
    { year: 'April 2025', description: 'The 3rd club election was successfully held.' },
];

export const galleries: Gallery[] = [
    { title: 'Climate Club Logo', images: ['/images/Club logo.png'] },
    { title: 'Achievements', images: [
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
        '/images/achivement/Achievement- 13.png'
    ]},
    { title: 'NCCA 2024', images: [
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
        '/images/NCCA2024/NCCA- 14.jpg'
    ]},
    { title: 'Training Days 1-4', images: [
        '/images/TRAINING/Training- 1.jpg',
        '/images/TRAINING/Training- 2.jpg',
        '/images/TRAINING/Training- 3.jpg',
        '/images/TRAINING/Training- 4.jpg',
        '/images/TRAINING/Training- 5.jpg',
        '/images/TRAINING/Training- 6.jpg',
        '/images/TRAINING/Training- 7.jpg',
        '/images/TRAINING/Training- 8.jpg'
    ]},
    { title: 'MGM', images: [
        '/images/MGM/MGM- 1.png',
        '/images/MGM/MGM- 2.jpg',
        '/images/MGM/MGM- 3.jpg',
        '/images/MGM/MGM- 4.jpg',
        '/images/MGM/MGM- 5.jpg',
        '/images/MGM/MGM- 6.jpg'
    ]},
    { title: 'Greening Activities', images: [
        '/images/greening/Greening- 1.jpg',
        '/images/greening/Greening- 2.jpg',
        '/images/greening/Greening- 3.jpg',
        '/images/greening/Greening- 4.jpg',
        '/images/greening/Greening- 5.jpg',
        '/images/greening/Greening- 6.jpg',
        '/images/greening/Greening- 7.jpg',
        '/images/greening/Greening- 8.jpg'
    ]},
    { title: 'Cleaning Activities', images: [
        '/images/cleaning/Cleaning- 1.jpg',
        '/images/cleaning/Cleaning- 2.jpg',
        '/images/cleaning/Cleaning- 3.jpg',
        '/images/cleaning/Cleaning- 4.jpg'
    ]}
];