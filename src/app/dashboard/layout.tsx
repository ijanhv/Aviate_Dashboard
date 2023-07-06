import DashboardNav from "../components/DashboardNav";
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
      <body>
      <DashboardNav />

        {children}
      </body>
    </html>
  );
}
