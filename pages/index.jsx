import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="">
        <main className="">
          <h1 className="text-2xl">Maddox Edwards PLLC</h1>

          <div className="">
            <Link href="/team" className="">
              <a>
                <h3>The Team</h3>
                <p>Meet our firm.</p>
              </a>
            </Link>

            <Link href="/about" className="">
              <a>
                <h3>About Us</h3>
                <p>What makes us different.</p>
              </a>
            </Link>

            <Link href="/cases" className="">
              <a>
                <h3>Cases</h3>
                <p>See our cases.</p>
              </a>
            </Link>

            <Link href="/news" className="">
              <a>
                <h3>News</h3>
                <p>Read about our recent projects.</p>
              </a>
            </Link>
          </div>
        </main>
      </div>
    </Layout>
  );
}
