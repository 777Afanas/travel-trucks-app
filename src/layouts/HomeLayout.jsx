import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header"

const HomeLayout = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <Outlet /> {/* подставяться Home, Catalog, Details */}
      </main>
    </div>
  )
}

export default HomeLayout