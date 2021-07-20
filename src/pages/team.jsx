import Layout from "../components/Layout";
import Link from "next/link";

const Team = () => {
  return (
    <Layout>
      <h1 className="text-2xl">Team</h1>
      <div className="grid grid-cols-3">
        <Link href="/team/maddox">
          <a className="py-5 hover:bg-gray-100 text-center">
            <h3>Steven Maddox</h3>
          </a>
        </Link>
        <Link href="/team/edwards">
          <a className="py-5 hover:bg-gray-100 text-center">
            <h3>Jeremy Edwards</h3>
          </a>
        </Link>
        <Link href="/team/ruedy">
          <a className="py-5 hover:bg-gray-100 text-center">
            <h3>Matthew Ruedy</h3>
          </a>
        </Link>
        <Link href="/team/saba">
          <a className="py-5 hover:bg-gray-100 text-center">
            <h3>Kaveh Saba</h3>
          </a>
        </Link>
        <Link href="/team/son">
          <a className="py-5 hover:bg-gray-100 text-center">
            <h3>Anthony Son</h3>
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Team;
