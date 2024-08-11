import AnchorLink from "react-anchor-link-smooth-scroll"
import React from "react"
import { SelectedPage } from "./types"

type Props = {
    children :React.ReactNode
    setSelectPage:(value:SelectedPage) =>void
}

const ActionButton = ({children ,setSelectPage}: Props) => {
  return (
    <AnchorLink
        className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 text-black hover:text-white"
        onClick={()=>setSelectPage(SelectedPage.contactus)}
        href={`#${SelectedPage.contactus
        }`} > {children}</AnchorLink>
       
  )
}

export default ActionButton