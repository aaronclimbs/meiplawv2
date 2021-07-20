import Layout from "../../components/Layout";
import Profile from "../../components/Profile";

const Edwards = () => {
  return (
    <Layout>
      <Profile>
        <h1 className="text-2xl">Jeremy Edwards</h1>
        <section>
          <h2 className="text-xl">Experience</h2>
          <p>
            Mr. Edwards has substantial experience representing parties in
            patent litigation spanning a variety of fields, from biotechnology
            to optics.
          </p>
          <p>
            In particular, Mr. Edwards has extensive experience representing
            clients in pharmaceutical patent litigation brought under the Hatch
            Waxman Act.
          </p>
          <p>
            Mr. Edwards has been named to Super Lawyers’ Washington, DC Rising
            Stars in Intellectual Property Litigation from 2014 through 2018.
          </p>
        </section>
        <section>
          <h2 className="text-xl">Education</h2>
          <ul>
            <li>
              J.D., University of Maryland School of Law (With Honors) (Moot
              Court), 2005
            </li>
            <li>
              B.S., University of Maryland, Biology, (University and
              Departmental Honors) (Phi Beta Kappa), 2000
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl">Bar Admissions</h2>
          <ul>
            <li>Maryland</li>
            <li>District of Columbia</li>
            <li>U.S. Patent and Trademark Office</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl">Court Admissions</h2>
          <ul>
            <li>U.S. Court of Appeals for the Federal Circuit</li>
            <li>U.S. District Court for the District of Columbia</li>
            <li>U.S. District Court for the District of Maryland</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl">Seminars and Presentations</h2>
          <ul>
            <li>
              Co-presenter, “Patent Litigation and the Power of Correlative
              Microscopy,” Microscopy Society of America’s Microscopy &
              Microanalysis 2014 Meeting, Hartford, CT, August 2014
            </li>
            <li>
              Panelist, “Developments in Obviousness,” ACI Paragraph IV Disputes
              Conference, New York, NY, April 2014
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl">Publications</h2>
          <ul>
            <li>
              Author, Patent Litigation and the Power of Correlative Microscopy,
              Microscopy and Microanalysis, Volume 20, Supplement 3, 2014
            </li>
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

export default Edwards;
