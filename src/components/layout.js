import * as React from "react"
import Navbar from "./navbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <header class="backdrop-blur-md bg-opacity-20 bg-white shadow-sm sticky top-0 p-2">
        <Navbar title={title}/>
      </header>
      <main className="container mx-auto p-8 h-full overflow-auto">{children}</main>
    </div>
  )
}

export default Layout
