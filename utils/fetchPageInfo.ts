import { PageInfo } from "../typings";

export const fetchPageInfo = async() => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    const res = await fetch('https://portfolio-loony.vercel.app/api/getPageInfo');
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo
    
    return pageInfo; 
}