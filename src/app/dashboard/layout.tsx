import DashboardNav from "../components/DashboardNav";
import DashboardSidebar from "../components/DashboardSidebar";
import Navbar from "../components/Navbar";
import "./../globals.css";

export const metadata = {
  title: "Aviate Dashboard",
  description: "Aviate Dashboard",
};

interface IProps {
  children: React.ReactNode;
}

export default async function UserLayout({ children }: IProps) {
  return (
    <html lang="en">
    <body className="">
      <DashboardNav />
      <div className="flex">
        <DashboardSidebar />
        <main className="w-screen h-screen bg-slate-100 overflow-x-hidden ">{children}</main>
      </div>
    </body>
  </html>
  );
}
