import Navbar from "../components/Navbar";
import "./../globals.css";

export const metadata = {
  title: "Job Portal",
  description: "Job Portal",
};

interface IProps {
  children: React.ReactNode;
}

export default async function UserLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
      <Navbar />

        {children}
      </body>
    </html>
  );
}
