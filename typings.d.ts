interface SanityBody {
    _createAt: string;
    _id: string;
    _rev: string;
    _updatdedAt: string;
}
interface Image {
    _type: "image";
    assets: {
        _ref: string;
        _type: "reference"
    }
}
interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}
interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    progress:number;
    title: string;
}
interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress:number;
    title: string;
}
interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}
interface Projet extends SanityBody {
    title: string;
    _type: "projets";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[]
}
export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}