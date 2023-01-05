import { Projet } from "../typings";

export const fetchProjet = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjets`);
    const data = await res.json();
    const projets: Projet[] = data.projets
    return projets; 
}