import { useState, useEffect, useCallback } from 'react';
import { 
  leadershipTeam, 
  alumniMembers, 
  currentMembers, 
  advisoryCommittee, 
  projects, 
  achievements, 
  galleries 
} from '@/data/content';
import { Member, ExecutiveMember, Advisor, Project, Achievement, Gallery } from '@/types/types';

interface UseDataReturn {
  leadership: Member[];
  members: ExecutiveMember[];
  advisors: Advisor[];
  projects: Project[];
  achievements: Achievement[];
  galleries: Gallery[];
  loading: boolean;
  error: string | null;
  refreshData: () => void;
}

export const useData = (): UseDataReturn => {
  const [leadership, setLeadership] = useState<Member[]>([]);
  const [members, setMembers] = useState<ExecutiveMember[]>([]);
  const [advisors, setAdvisors] = useState<Advisor[]>([]);
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [achievementList, setAchievementList] = useState<Achievement[]>([]);
  const [galleryList, setGalleryList] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Simulate async data loading (in a real app, this would fetch from an API)
      await new Promise(resolve => setTimeout(resolve, 100));

      setLeadership(leadershipTeam);
      setMembers([...alumniMembers, ...currentMembers]);
      setAdvisors(advisoryCommittee);
      setProjectList(projects);
      setAchievementList(achievements);
      setGalleryList(galleries);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data');
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshData = useCallback(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    leadership,
    members,
    advisors,
    projects: projectList,
    achievements: achievementList,
    galleries: galleryList,
    loading,
    error,
    refreshData,
  };
};