export interface Member {
  name: string;
  role: string;
  term?: string;
  imageUrl: string;
  specialRecognition?: boolean;
  // Optional fields that can be loaded separately for privacy
  id?: string;
  classInfo?: string;
  campus?: string;
}

export interface ExecutiveMember {
  serial?: number;
  name: string;
  role: string;
  // Optional field that can be loaded separately for privacy
  id?: string;
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
}

export interface Gallery {
  title: string;
  images: string[];
}