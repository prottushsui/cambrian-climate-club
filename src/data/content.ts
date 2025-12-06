import type { Member, ExecutiveMember, Advisor, Project, Achievement, Gallery } from '@/types/types';
import { createImageProxyUrl } from '@/utils/imageProxy';

const proxy = (url: string) => `https://images.weserv.nl/?url=${url.replace(/^https?:\/\//, '')}`;

export const leadershipTeam: Member[] = [
  {
    name: 'Md. Motammim Bin Arif',
    id: 'Cam-CC-240001',
    role: 'President',
    term: '2024–2025',
    classInfo: 'Class 10 EV',
    campus: 'Campus 2',
    imageUrl: '/people/president.jpg',
  },
  {
    name: 'Maria Anamika Bairagee',
    id: 'Cam-CC-230002',
    role: 'Vice-President',
    term: '2023–2025',
    classInfo: 'Class 10 EV',
    campus: 'Campus 2',
    imageUrl: '/people/vice-president.jpg',
  },
  {
    name: 'H.M Towfiquzzaman',
    id: 'Cam-CC-240002',
    role: 'General Secretary',
    term: '2024–2025',
    classInfo: 'Class 10 BV (B)',
    campus: 'Campus 2',
    imageUrl: '/people/general-secretary.jpg',
  },
  {
    name: 'Md. Mottakin Bin Arif',
    id: 'Cam-CC-240004',
    role: 'Publicity Secretary',
    term: '2024–2025',
    classInfo: 'Class 9 EV',
    campus: 'Campus 2',
    imageUrl: '/people/publicity-secretary.jpg',
    specialRecognition: true
  },
  {
    name: 'Kazi Tasfia Priota',
    id: 'Cam-CC-240003',
    role: 'Office Secretary',
    term: '2024–2025',
    classInfo: 'Class 10 BV (G)',
    campus: 'Campus 2',
    imageUrl: '/people/office-secretary.jpg',
  },
  {
    name: 'Samirah Subha',
    id: 'Cam-CC-240022',
    role: 'Organizing Secretary',
    term: '2025',
    classInfo: 'Class 9 BV (G)',
    campus: 'Campus 2',
    imageUrl: '/people/organizing-secretary.jpg',
  },
  {
    name: 'Kishore Sutradhar',
    id: 'Cam-CC-240005',
    role: 'Treasurer',
    term: '2024–2025',
    classInfo: 'Class 9 BV (B)',
    campus: 'Campus 2',
    imageUrl: '/people/treasurer.jpg',
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
  { name: 'Rumana Khanam', role: 'Chief Advisor (Vice Principal)', imageUrl: '/people/advisor-chief.jpg' },
  { name: 'Md. Kamruzzaman', role: 'Advisor', imageUrl: '/people/advisor-1.jpg' },
  { name: 'Jakir Hoissain', role: 'Advisor', imageUrl: '/people/advisor-2.jpg' },
  { name: 'Monirul Islam', role: 'Advisor', imageUrl: '/people/advisor-3.jpg' },
  { name: 'Md. S H Khokon Mia', role: 'Advisor & Club Coordinator', imageUrl: '/people/advisor-4.jpg' },
  { name: 'Hiren Sarkar', role: 'Advisor', imageUrl: '/people/advisor-5.jpg' },
];

export const projects: Project[] = [
  { title: 'Campus Cleanliness Drive', imageUrl: '/people/project-cleanliness.jpg' },
  { title: 'Campus Greening Initiative', imageUrl: '/people/project-greening.jpg' },
  { title: 'Climate Action E-Magazine', imageUrl: '/people/project-magazine.jpg' },
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
    { title: 'Achievements pt2', images: ['https://i.imgur.com/z0a5W4t.jpeg', 'https://i.imgur.com/O4q5t1w.jpeg', 'https://i.imgur.com/o7z3j7q.jpeg', 'https://i.imgur.com/d5q9x3J.jpeg', 'https://i.imgur.com/f2t4e7H.jpeg', 'https://i.imgur.com/x0u4g0J.jpeg', 'https://i.imgur.com/s6Z1F7f.jpeg', 'https://i.imgur.com/s4j4X8h.jpeg', 'https://i.imgur.com/j1x5j1G.jpeg', 'https://i.imgur.com/p9f7d6A.jpeg', 'https://i.imgur.com/r5u7R4w.jpeg', 'https://i.imgur.com/k6K4U8E.jpeg', 'https://i.imgur.com/c6c2y9K.jpeg'].map(proxy) },
    { title: 'Training Days / Club Moments', images: ['https://i.imgur.com/k6l9h3H.jpeg', 'https://i.imgur.com/d2G1v6m.jpeg', 'https://i.imgur.com/u3t4R5J.jpeg', 'https://i.imgur.com/h2G6P8c.jpeg', 'https://i.imgur.com/d4g5a7T.jpeg', 'https://i.imgur.com/v8t9n9P.jpeg', 'https://i.imgur.com/z0b1K2E.jpeg'].map(proxy) },
    { title: 'NCCA 2024', images: ['https://i.imgur.com/t3o5w7O.jpeg', 'https://i.imgur.com/p1u4M9j.jpeg', 'https://i.imgur.com/k5N8V4L.jpeg', 'https://i.imgur.com/f0mGvY6.jpeg', 'https://i.imgur.com/l4u8M9J.jpeg', 'https://i.imgur.com/d6S7v8B.jpeg', 'https://i.imgur.com/r7P9z0F.jpeg', 'https://i.imgur.com/a9h0H1K.jpeg', 'https://i.imgur.com/b3d4F5G.jpeg', 'https://i.imgur.com/w2I3J4o.jpeg', 'https://i.imgur.com/c5D6F7H.jpeg', 'https://i.imgur.com/n6Y7Z8i.jpeg', 'https://i.imgur.com/j8n9L0p.jpeg', 'https://i.imgur.com/s9T0V1u.jpeg'].map(proxy) },
    { title: 'MGM', images: ['https://i.imgur.com/L1d2c3B.jpeg', 'https://i.imgur.com/M4E5f6G.jpeg', 'https://i.imgur.com/K7h8i9J.jpeg', 'https://i.imgur.com/P0q1r2S.jpeg', 'https://i.imgur.com/U3v4w5X.jpeg', 'https://i.imgur.com/Y6z7a8B.jpeg'].map(proxy) },
    { title: 'Campus Greening', images: ['https://i.imgur.com/9v1zG1N.jpeg', 'https://i.imgur.com/B3d4e5F.jpeg', 'https://i.imgur.com/C6g7h8I.jpeg', 'https://i.imgur.com/D9j0k1L.jpeg'].map(proxy) },
    { title: 'Cleaning Activities', images: ['https://i.imgur.com/h5rD6wS.jpeg', 'https://i.imgur.com/F3g4h5I.jpeg', 'https://i.imgur.com/G6j7k8L.jpeg', 'https://i.imgur.com/H9m0n1P.jpeg'].map(proxy) },
    { title: 'Conference', images: ['https://i.imgur.com/Q3r4s5T.jpeg', 'https://i.imgur.com/R6t7u8V.jpeg', 'https://i.imgur.com/S9w0x1Y.jpeg', 'https://i.imgur.com/T2z3a4B.jpeg', 'https://i.imgur.com/U5c6d7E.jpeg', 'https://i.imgur.com/V8f9g0H.jpeg', 'https://i.imgur.com/W1i2j3K.jpeg', 'https://i.imgur.com/X4l5m6N.jpeg', 'https://i.imgur.com/Y7o8p9Q.jpeg', 'https://i.imgur.com/Z0r1s2T.jpeg', 'https://i.imgur.com/A3u4v5X.jpeg'].map(proxy) },
];