import React from "react"
import Logo from "../images/download.svg"

const Navbar = ({title}) => {
  return (
    <div className="container mx-auto px-4 py-2 flex justify-center items-center">
      <img alt={title} src={Logo} width={120} />
    </div>
  )
}
export default Navbar
