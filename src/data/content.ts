import type { Member, ExecutiveMember, Advisor, Project, Achievement, Gallery } from '@/types/types';

export const leadershipTeam: Member[] = [
  {
    name: 'Md. Motammim Bin Arif',
    id: 'Cam-CC-240001',
    role: 'President',
    term: '2024–2025',
    classInfo: 'Class 10 EV',
    campus: 'Campus 2',
    imageUrl: '/people/Md. Motammim Bin Arif.jpg',
  },
  {
    name: 'Maria Anamika Bairagee',
    id: 'Cam-CC-230002',
    role: 'Vice-President',
    term: '2023–2025',
    classInfo: 'Class 10 EV',
    campus: 'Campus 2',
    imageUrl: '/people/Maria Anamika Bairagee.jpg',
  },
  {
    name: 'H.M Towfiquzzaman',
    id: 'Cam-CC-240002',
    role: 'General Secretary',
    term: '2024–2025',
    classInfo: 'Class 10 BV (B)',
    campus: 'Campus 2',
    imageUrl: '/people/H.M Towfiquzzaman.jpg',
  },
  {
    name: 'Md. Mottakin Bin Arif',
    id: 'Cam-CC-240004',
    role: 'Publicity Secretary',
    term: '2024–2025',
    classInfo: 'Class 9 EV',
    campus: 'Campus 2',
    imageUrl: '/people/Md. Mottakin Bin Arif.jpg',
    specialRecognition: true
  },
  {
    name: 'Kazi Tasfia Priota',
    id: 'Cam-CC-240003',
    role: 'Office Secretary',
    term: '2024–2025',
    classInfo: 'Class 10 BV (G)',
    campus: 'Campus 2',
    imageUrl: '/people/Kazi Tasfia Priota.jpg',
  },
  {
    name: 'Samirah Subha',
    id: 'Cam-CC-240022',
    role: 'Organizing Secretary',
    term: '2025',
    classInfo: 'Class 9 BV (G)',
    campus: 'Campus 2',
    imageUrl: '/people/Samirah Subha.jpeg',
  },
  {
    name: 'Kishore Sutradhar',
    id: 'Cam-CC-240005',
    role: 'Treasurer',
    term: '2024–2025',
    classInfo: 'Class 9 BV (B)',
    campus: 'Campus 2',
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

export const currentMembers: ExecutiveMember[] = [
    { serial: 1, name: "Kazi Tasfia Priota", id: "Cam-CC-240003", role: "Office Secretary" },
    { serial: 2, name: "Md. Mottakin Bin Arif", id: "Cam-CC-240004", role: "Publicity Secretary" },
    { serial: 3, name: "Kishore Sutradhar", id: "Cam-CC-240005", role: "Treasurer" },
    { serial: 4, name: "Md. Muktader Islam Shoibal", id: "Cam-CC-240006", role: "Executive Member" },
    { serial: 5, name: "Ragib Ahammed", id: "Cam-CC-240007", role: "Executive Member" },
    { serial: 6, name: "Rahman Hossain", id: "Cam-CC-240010", role: "Executive Member" },
    { serial: 7, name: "Munsif Wahid", id: "Cam-CC-240011", role: "Executive Member" },
    { serial: 8, name: "Md. Muntazir Rahman", id: "Cam-CC-240012", role: "Executive Member" },
    { serial: 9, name: "Hassan Abdur Rahman", id: "Cam-CC-240014", role: "Executive Member" },
    { serial: 10, name: "Muksina Molla", id: "Cam-CC-240016", role: "Executive Member" },
    { serial: 11, name: "Rakin", id: "Cam-CC-240017", role: "Executive Member" },
    { serial: 12, name: "Samirah Subha", id: "Cam-CC-240022", role: "Organizing Secretary" },
    { serial: 13, name: "Md. Motammim Bin Arif", id: "Cam-CC-240001", role: "President" },
    { serial: 14, name: "Maria Anamika Bairagee", id: "Cam-CC-230002", role: "Vice-President" },
    { serial: 15, name: "H.M Towfiquzzaman", id: "Cam-CC-240002", role: "General Secretary" },
    { serial: 16, name: "Ahnaf Tahmid", id: "Cam-CC-230001", role: "Member" },
    { serial: 17, name: "Miftahul Jannat", id: "Cam-CC-230006", role: "Member" },
    { serial: 18, name: "Iftekhar Ahmed", id: "Cam-CC-230010", role: "Member" },
    { serial: 19, name: "Fatiha Tasnim", id: "Cam-CC-230011", role: "Member" },
    { serial: 20, name: "Md. Mahathir", id: "Cam-CC-230012", role: "Member" },
    { serial: 21, name: "Fatema Binte Alam", id: "Cam-CC-230014", role: "Member" },
    { serial: 22, name: "Nafisa Tabassum", id: "Cam-CC-230016", role: "Member" },
    { serial: 23, name: "Al-Amin Sheikh", id: "Cam-CC-230017", role: "Member" },
    { serial: 24, name: "Arian", id: "Cam-CC-240008", role: "Member" },
    { serial: 25, name: "Ashikuzzaman", id: "Cam-CC-240009", role: "Member" },
    { serial: 26, name: "Ifaz", id: "Cam-CC-240013", role: "Member" },
    { serial: 27, name: "Maisha Rahman", id: "Cam-CC-240015", role: "Member" },
    { serial: 28, name: "Anan", id: "Cam-CC-240018", role: "Member" },
    { serial: 29, name: "Tawhid", id: "Cam-CC-240019", role: "Member" },
    { serial: 30, name: "Rifat", id: "Cam-CC-240020", role: "Member" },
    { serial: 31, name: "Nawsin", id: "Cam-CC-240021", role: "Member" },
    { serial: 32, name: "Ayman", id: "Cam-CC-240023", role: "Member" },
    { serial: 33, name: "Abir", id: "Cam-CC-240024", role: "Member" },
    { serial: 34, name: "Nahid", id: "Cam-CC-240025", role: "Member" },
    { serial: 35, name: "Tahsin", id: "Cam-CC-240026", role: "Member" },
    { serial: 36, name: "Araf", id: "Cam-CC-240027", role: "Member" },
    { serial: 37, name: "Sadiya", id: "Cam-CC-240028", role: "Member" },
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