import Layout from "../components/Layout";
import Link from "next/link";

const Team = () => {
    return (
        <Layout>
            <h1>Team</h1>
            <ul>
                <li>
                    <Link href="/team/maddox">
                        <a>
                            <h3>Steven Maddox</h3>
                        </a>
                    </Link>
                    <Link href="/team/edwards">
                        <a>
                            <h3>Jeremy Edwards</h3>
                        </a>
                    </Link>
                    <Link href="/team/ruedy">
                        <a>
                            <h3>Matthew Ruedy</h3>
                        </a>
                    </Link>
                    <Link href="/team/saba">
                        <a>
                            <h3>Kaveh Saba</h3>
                        </a>
                    </Link>
                    <Link href="/team/son">
                        <a>
                            <h3>Anthony Son</h3>
                        </a>
                    </Link>
                </li>
            </ul>
        </Layout>
    );
};

export default Team;
