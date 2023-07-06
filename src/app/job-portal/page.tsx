import Navbar from "../components/Navbar";
import Table from "../components/Table";

export default function Home() {
  return (
    <div className="min-w-full">
      <div className="bg-[#F4F5F7] h-[109px] w-full">
        <h1 className="font-poppins text-secondary-600 text-center  pt-6 ">
          <span className="text-black font-[500]  text-[30px] font-poppins ">
            My Jobs List
          </span>
        </h1>
      </div>
      <div className="container pt-10 mx-auto text-center">
        <Table />
      </div>
    </div>
  );
}
