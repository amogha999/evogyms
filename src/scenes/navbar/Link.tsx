import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page:string;
    selectPage:SelectedPage;
    setSelectPage:(value:SelectedPage)=> void;
}

export default function Link({
    page,
    selectPage,
    setSelectPage, 
}: Props) {
    const lowerCasePage=page.toLowerCase().replace(/ /g,"") as SelectedPage;
  return (
    <AnchorLink 
    className={`${selectPage === lowerCasePage} ? "text-primary-500" : ""
    transition duration-500 hover:text-primary-300
    `}
    href={`#${lowerCasePage}`}
    onClick={()=>{
        setSelectPage(lowerCasePage)
    }}
    >
        {page }
    </AnchorLink>
  )
}