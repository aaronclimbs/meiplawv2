import Layout from "../../components/Layout";
import Profile from "../../components/Profile";

const Son = () => {
  return (
    <Layout>
      <Profile>
        <h1 className="text-2xl">Anthony Son</h1>
        <section>
          <h2 className="text-xl">Experience</h2>
          <p>
            Anthony H. Son is a seasoned litigator and counselor with a diverse
            group of clients from pharmaceuticals, medical devices,
            semiconductors, electronics, software, and financial services
            industries.
          </p>

          <p>
            Anthony has represented clients before the United States Supreme
            Court, the United States Court of Appeals for the Federal Circuit,
            various United States District Courts throughout the United States,
            and in Inter Partes Review and Covered Business Method Review
            proceedings before the U.S. Patent and Trademark Office.
          </p>

          <p>
            In particular, Anthony has special expertise in enforcing and
            monetizing patents for companies and inventors, and in designing
            creative alternative fee arrangements to more closely align the
            interests of client and counsel in results.
          </p>

          <p>
            Mr. Son has been named to Super Lawyers’ from 2014 through 2018.
          </p>
        </section>
        <section>
          <h2 className="text-xl">Education</h2>
          <ul>
            <li>
              J.D., Yeshiva University Benjamin N. Cardozo School of Law (cum
              laude), 1997
            </li>
            <li>
              B.S., Biochemistry and Molecular Biology, University of Maryland,
              Baltimore County, 1994
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl">Bar Admissions</h2>
          <ul>
            <li>California</li>
            <li>District of Columbia</li>
            <li>Minnesota</li>
            <li>United States Patent and Trademark Office</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl">Court Admissions</h2>
          <ul>
            <li>United States Supreme Court</li>
            <li>United States Court of Appeals for the Federal Circuit</li>
            <li>United States District Court C.D. California</li>
            <li>United States District Court N.D. California</li>
            <li>United States District Court S.D. California</li>
            <li>United States District Court D. Maryland</li>
            <li>United States District Court E.D. Michigan</li>
            <li>United States District Court E.D. Texas</li>
            <li>United States District Court W.D. Texas</li>
            <li>United States District Court N.D. Texas</li>
            <li>United States District Court W.D. Pennsylvania</li>
          </ul>
        </section>
      </Profile>
    </Layout>
  );
};

export default Son;
