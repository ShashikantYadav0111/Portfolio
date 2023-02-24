export interface Education{
    institute:string;
    course:string;
    duration:string;
    score:string;
}

export interface Workexperience{
    role:string;
    comapany:string;
    duration:string;
    description:string[];
}

export interface Skill{
    name:string;
    level:string;
    rating:string;
}

export interface Project{
    title:string;
    technologies:string;
    description:string[];
}