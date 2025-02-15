interface CourseCardProps {
  title: string;
  description: string;
  xp: number;
  difficulty: string;
  content: string;
  reward: string;
  progress: number;
  image: string;
  rating: number;
  reviews: number;
}

type IconName =
  | "OffensiveIcon"
  | "CloudIcon"
  | "DefensiveIcon"
  | "NetworkIcon"
  | "PhysicalIcon"
  | "ProgrammingIcon";
("ProfileIcon");
("DashboardIcon");
("SettingIcon");
("TermIcon");
("LogoutIcon");

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface SectionCardProps {
  title: string;
  description: string;
  coursesCompleted: number;
  totalCourses: number;
  bgImage: string;
  blur?: boolean;
}

export type { CourseCardProps, IconName, TeamMember, SectionCardProps };
