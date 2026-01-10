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
    name: 'H.M Towfiquzzaman',
    role: 'General Secretary',
    term: '2024–2025',
    imageUrl: '/people/H.M Towfiquzzaman.jpg',
  },
  {
    name: 'Md. Mottakin Bin Arif',
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
    name: 'Samirah Subha',
    role: 'Organizing Secretary',
    term: '2025',
    imageUrl: '/people/Samirah Subha.jpeg',
  },
  {
    name: 'Kishore Sutradhar',
    role: 'Treasurer',
    term: '2024–2025',
    imageUrl: '/people/Kishore Sutradhar.jpg',
  },
];

export const alumniMembers: ExecutiveMember[] = [
  { name: 'Mariam Jannati Tisha', id: 'Cam-CC-230003', role: 'General Secretary (2023), Organizing Secretary (2024)' },
  { name: 'Ahmed Zarir', id: 'Cam-CC-230004', role: 'Organizing Secretary (2023)' },
  { name: 'Samin Tahmid', id: 'Cam-CC-230005', role: 'Office Secretary (2023)' },
  { name: 'Muhabbir Siddique Tosin', id: 'Cam-CC-230007', role: 'Treasurer (2023)' },
  { name: 'Abu Bokkor', id: 'Cam-CC-230008', role: 'Executive Member' },
  { name: 'AZM Mashnobi', id: 'Cam-CC-230009', role: 'Executive Member' },
  { name: 'Md. Mohiuddin Kabir', id: 'Cam-CC-230013', role: 'Executive Member' },
  { name: 'Nokibul Islam', id: 'Cam-CC-230015', role: 'Executive Member' },
];

export const currentMembers: Omit<ExecutiveMember, 'id'>[] = [
    { serial: 1, name: "Kazi Tasfia Priota", role: "Office Secretary" },
    { serial: 2, name: "Md. Mottakin Bin Arif", role: "Publicity Secretary" },
    { serial: 3, name: "Kishore Sutradhar", role: "Treasurer" },
    { serial: 4, name: "Md. Muktader Islam Shoibal", role: "Executive Member" },
    { serial: 5, name: "Ragib Ahammed", role: "Executive Member" },
    { serial: 6, name: "Rahman Hossain", role: "Executive Member" },
    { serial: 7, name: "Munsif Wahid", role: "Executive Member" },
    { serial: 8, name: "Md. Muntazir Rahman", role: "Executive Member" },
    { serial: 9, name: "Hassan Abdur Rahman", role: "Executive Member" },
    { serial: 10, name: "Muksina Molla", role: "Executive Member" },
    { serial: 11, name: "Rakin", role: "Executive Member" },
    { serial: 12, name: "Samirah Subha", role: "Organizing Secretary" },
    { serial: 13, name: "Md. Motammim Bin Arif", role: "President" },
    { serial: 14, name: "Maria Anamika Bairagee", role: "Vice-President" },
    { serial: 15, name: "H.M Towfiquzzaman", role: "General Secretary" },
    { serial: 16, name: "Ahnaf Tahmid", role: "Member" },
    { serial: 17, name: "Miftahul Jannat", role: "Member" },
    { serial: 18, name: "Iftekhar Ahmed", role: "Member" },
    { serial: 19, name: "Fatiha Tasnim", role: "Member" },
    { serial: 20, name: "Md. Mahathir", role: "Member" },
    { serial: 21, name: "Fatema Binte Alam", role: "Member" },
    { serial: 22, name: "Nafisa Tabassum", role: "Member" },
    { serial: 23, name: "Al-Amin Sheikh", role: "Member" },
    { serial: 24, name: "Arian", role: "Member" },
    { serial: 25, name: "Ashikuzzaman", role: "Member" },
    { serial: 26, name: "Ifaz", role: "Member" },
    { serial: 27, name: "Maisha Rahman", role: "Member" },
    { serial: 28, name: "Anan", role: "Member" },
    { serial: 29, name: "Tawhid", role: "Member" },
    { serial: 30, name: "Rifat", role: "Member" },
    { serial: 31, name: "Nawsin", role: "Member" },
    { serial: 32, name: "Ayman", role: "Member" },
    { serial: 33, name: "Abir", role: "Member" },
    { serial: 34, name: "Nahid", role: "Member" },
    { serial: 35, name: "Tahsin", role: "Member" },
    { serial: 36, name: "Araf", role: "Member" },
    { serial: 37, name: "Sadiya", role: "Member" },
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