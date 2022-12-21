export interface EducationType {
  date: string;
  certification: string;
  school: string;
  location: string;
}

export interface ExperienceType {
  date: string;
  company: string;
  title: string;
  description: string;
  url: string;
}

export interface AwardType {
  date: string;
  title: string;
  description: string;
}

export interface SkillType {
  name: string;
  proficient: number;
}

export interface WorkType {
  name: string;
  image_url: string;
  git_url: string;
  live_url: string;
}

export interface BlogType {
  name: string;
  image_url: string;
  live_url: string;
}

export interface ResumeDataType {
  contact: {
    firstName: string;
    lastName: string;
    titles: string[];
    phone: string;
    email: string;
    location: string;
    birthday: string;
  };
  whoami: string[];
  socials: {
    linkedin: string;
    github: string;
    behance: string;
    leetcode: string;
  };
  resume: {
    education: EducationType[];
    experience: ExperienceType[];
    awards: AwardType[];
    skills: SkillType[];
    knowledges: string[];
    soft_skills: string[];
  };
  works: WorkType[];
  blogs: BlogType[];
}
