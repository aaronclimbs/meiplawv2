import Layout from "../../components/Layout";
import Profile from "../../components/Profile";

const Saba = () => {
  return (
    <Layout>
      <Profile>
        <h1 className="text-2xl">Kaveh Saba</h1>
        <section>
          <h2 className="text-xl">Experience</h2>
          <p>
            Mr. Saba’s experience includes patent cases involving
            pharmaceuticals, biotechnology, consumer electronics, and microphone
            technologies, both in U.S. District Courts and Section 337
            investigations before the U.S. International Trade Commission. Mr.
            Saba has substantial experience in patent litigation brought under
            the Hatch Waxman Act, including cases involving method of treatment
            and formulation patents.
          </p>
          <p>
            Mr. Saba has also represented pro bono individual clients in a
            variety of criminal and civil matters, including successfully
            representing a criminal defendant in a jury trial in Maryland state
            court and obtaining asylum for a client in an evidentiary hearing
            before a federal immigration judge.
          </p>
        </section>
        <section>
          <h2 className="text-xl">Education</h2>
          <ul>
            <li>
              J.D., University of Maryland School of Law (summa cum laude) (Moot
              Court) (Order of the Coif), 2011
            </li>
            <li>
              B.S.E., University of Michigan, Chemical Engineering (magna cum
              laude), 2008
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl">Bar Admissions</h2>
          <ul>
            <li>District of Columbia</li>
            <li>Maryland</li>
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
          <h2 className="text-xl">Seminars and Presentations</h2>
          <ul>
            <li>
              Panelist, “Definitely, Maybe: Determining Patentable Subject
              Matter and the Future of Section 101,” ACI Paragraph IV Disputes
              Conference, April 2021
            </li>
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

export default Saba;
