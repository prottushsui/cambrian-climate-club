export interface Member {
  name: string;
  id: string;
  role: string;
  term?: string;
  classInfo?: string;
  campus?: string;
  imageUrl: string;
  specialRecognition?: boolean;
}

export interface ExecutiveMember {
  serial?: number;
  name: string;
  id: string;
  role: string;
}

export interface Advisor {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Project {
  title: string;
  imageUrl: string;
  description?: string;
}

export interface Achievement {
  year: string;
  description: string;
  videoUrl?: string;
}

export interface Gallery {
  title: string;
  images: string[];
}