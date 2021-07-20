import Layout from "../../components/Layout";
import Profile from "../../components/Profile";

const Ruedy = () => {
  return (
    <Layout>
      <Profile>
        <h1 className="text-2xl">Matthew Ruedy</h1>
        <section>
          <h2 className="text-xl">Experience</h2>
          <p>
            Mr. Ruedy focuses his practice on patent litigation, with a specific
            concentration in life science cases.
          </p>

          <p>
            Mr. Ruedy has substantial experience in pharmaceutical patent
            litigation brought under the Hatch Waxman Act, including cases
            involving new chemical entities and formulations.
          </p>

          <p>
            Mr. Ruedy has been named to Super Lawyers’ Washington, DC Rising
            Stars in Intellectual Property Litigation from 2017 through 2019.
          </p>
        </section>
        <section>
          <h2 className="text-xl">Education</h2>
          <ul>
            <li>J.D., University of North Carolina School of Law, 2009</li>
            <li>
              B.S., North Carolina State University, Biochemistry and Biological
              Sciences (magna cum laude) (Phi Beta Kappa), 2003
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl">Bar Admissions</h2>
          <ul>
            <li>New York</li>
            <li>District of Columbia</li>
            <li>U.S. Patent and Trademark Office</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl">Court Admissions</h2>
          <ul>
            <li>U.S. Court of Appeals for the Federal Circuit</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl">Publications</h2>
          <ul>
            <li>
              Co-author, Trial in ANDA Litigation: Strategies and Tactics for
              Pharmaceutical Patent Litigators, American Bar Association
              (Section of Intellectual Property Law), 2020
            </li>
          </ul>
        </section>
      </Profile>
    </Layout>
  );
};

export default Ruedy;
