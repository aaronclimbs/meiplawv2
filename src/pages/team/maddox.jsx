import Layout from "../../components/Layout";
import Profile from "../../components/Profile";

const Maddox = () => {
  return (
    <Layout>
      <Profile>
        <h1 className="text-2xl">Steven Maddox</h1>
        <section>
          <h2 className="text-xl">Experience</h2>
          <p>
            Mr. Maddox focuses on patent litigation in life sciences technology,
            with special expertise in pharmaceutical Hatch Waxman cases and
            medical devices.
          </p>
          <p>
            Mr. Maddox has been recognized as a life sciences star for his
            litigation practice in LMG Life Sciences, published by Managing
            Intellectual Property.
          </p>
          <p>
            He has received special recognition for his work in generic drugs,
            biosimilars, drug formulations, large molecules and vaccines.
          </p>
          <p>
            Prior to entering private practice, Mr. Maddox served as a trial
            attorney at the United States Department of Justice.
          </p>
          <p>
            He clerked for The Honorable Thomas P. Griesa, former Chief Judge of
            the United States District Court for the Southern District of New
            York.
          </p>
        </section>
        <section>
          <h2 className="text-xl">Education</h2>
          <ul>
            <li>
              J.D., University of Virginia School of Law (Order of the Coif),
              1989
            </li>
            <li>
              A.B., Harvard University, Economics and History (
              <em>magna cum laude</em>), 1986
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl">Bar Admissions</h2>
          <ul>
            <li>District of Columbia</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl">Court Admissions</h2>
          <ul>
            <li>U.S. Supreme Court</li>
            <li>U.S. Court of Appeals for the Federal Circuit</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl">Seminars and Presentations</h2>
          <ul>
            <li>
              Panelist, “The Master Class on Settling Paragraph IV Disputes:
              Drafting and Negotiating Strategies for Brand-Names and Generic –
              A Hands-On, Practical Approach,” American Conference Institute
              (ACI) Paragraph IV Disputes Conference, 2012
            </li>
            <li>
              Panelist, “Invalid or Will Not Be Infringed”: Re-Assessing the
              ANDA Applicant’s Pre-Litigation Considerations and Obligations
              Under Paragraph IV vis-à-vis Microsoft v. i4i, American Conference
              Institute (ACI) Paragraph IV Disputes Conference, 2011
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

export default Maddox;
