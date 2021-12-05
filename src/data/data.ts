import { Contact, Person } from "../types";

const data: {
  partners: Person[];
  contact: Contact;
  cases: { pharma: string[]; other: string[] };
} = {
  partners: [
    {
      name: "Steven Maddox",
      description: `
      Mr. Maddox focuses on patent litigation in life sciences technology, with special expertise in pharmaceutical Hatch Waxman cases and medical devices.
      Mr. Maddox has been recognized as a life sciences star for his litigation practice in LMG Life Sciences, published by Managing Intellectual Property.
      He has received special recognition for his work in generic drugs, biosimilars, drug formulations, large molecules and vaccines.
      Prior to entering private practice, Mr. Maddox served as a trial attorney at the United States Department of Justice.
      He clerked for The Honorable Thomas P. Griesa, former Chief Judge of the United States District Court for the Southern District of New York.
    `,
      contact: {
        phone: {
          work: 2028300238,
          fax: 2028300704,
        },
        email: "smaddox@meiplaw.com",
        address: {
          street: "1900 K ST NW, Suite 725",
          city: "Washington",
          state: "DC",
          zip: "20006",
        },
      },
      education: [
        {
          degree: "J.D.",
          major: "",
          school: "University of Virginia School of Law (Order of the Coic)",
          yearGraduated: 1989,
        },
        {
          degree: "A.B.",
          major: "Economics and History",
          school: "Harvard University",
          yearGraduated: 1986,
        },
      ],
      barAdmissions: ["District of Columbia"],
      courtAdmissions: [
        "United States Supreme Court",
        "United States Court of Appeals for the Federal Circuit",
      ],
      seminars: [
        {
          role: "Panelist",
          title:
            "The Master Class on Settling Paragraph IV Disputes: Drafting and Negotiating Strategies for Brand-Names and Generic – A Hands-On, Practical Approach,” American Conference Institute (ACI) Paragraph IV Disputes Conference",
          event:
            "American Conference Institute (ACI) Paragraph IV Disputes Conference",
          date: 2012,
        },
        {
          role: "Panelist",
          title:
            "Invalid or Will Not Be Infringed”: Re-Assessing the ANDA Applicant’s Pre-Litigation Considerations and Obligations Under Paragraph IV vis-à-vis Microsoft v. i4i",
          event:
            "American Conference Institute (ACI) Paragraph IV Disputes Conference",
          date: 2011,
        },
      ],
      publications: [
        {
          role: "Co-Author",
          title:
            "Co-author, Trial in ANDA Litigation: Strategies and Tactics for Pharmaceutical Patent Litigators, American Bar Association (Section of Intellectual Property Law)",
          date: 2020,
        },
      ],
      assets: {
        small: "../public/assets/profile-steven-maddox [250x333].jpg",
        large: "../public/assets/profile-steven-maddox [450x600].jpg",
      },
    },
    {
      name: "Jeremy Edwards",
      description: `
      Mr. Edwards has substantial experience representing parties in patent litigation spanning a variety of fields, from biotechnology to optics.
      In particular, Mr. Edwards has extensive experience representing clients in pharmaceutical patent litigation brought under the Hatch Waxman Act.
      Mr. Edwards has been named to Super Lawyers’ Washington, DC Rising Stars in Intellectual Property Litigation from 2014 through 2018.
    `,
      contact: {
        phone: {
          work: 2028300540,
          fax: 2028300704,
        },
        email: "jedwards@meiplaw.com",
        address: {
          street: "1900 K ST NW, Suite 725",
          city: "Washington",
          state: "DC",
          zip: "20006",
        },
      },
      education: [
        {
          degree: "J.D.",
          major: "",
          school:
            "University of Maryland School of Law (summa cum laude) (Moot Court)",
          yearGraduated: 2005,
        },
        {
          degree: "B.S.",
          major: "Biology",
          school:
            "University of Maryland (University and Departmental Honors) (Phi Beta Kappa)",
          yearGraduated: 2000,
        },
      ],
      barAdmissions: [
        "Maryland",
        "District of Columbia",
        "U.S. Patent and Trademark Office",
      ],
      courtAdmissions: [
        "United States Court of Appeals for the Federal Circuit",
        "U.S. District Court for the District of Columbia",
        "U.S. District Court for the District of Maryland",
      ],
      publications: [
        {
          role: "Co-Author",
          title:
            "Co-author, Trial in ANDA Litigation: Strategies and Tactics for Pharmaceutical Patent Litigators, American Bar Association (Section of Intellectual Property Law)",
          date: 2020,
        },
      ],
      assets: {
        small: "../public/assets/profile-jeremy-edwards [250x333].jpg",
        large: "../public/assets/profile-jeremy-edwards [450x600].jpg",
      },
    },
    {
      name: "Kaveh Saba",
      description: `
      Mr. Saba’s experience includes patent cases involving pharmaceuticals, biotechnology, consumer electronics, and microphone technologies, both in U.S. District Courts and Section 337 investigations before the U.S. International Trade Commission. Mr. Saba has substantial experience in patent litigation brought under the Hatch Waxman Act, including cases involving method of treatment and formulation patents.
      Mr. Saba has also represented pro bono individual clients in a variety of criminal and civil matters, including successfully representing a criminal defendant in a jury trial in Maryland state court and obtaining asylum for a client in an evidentiary hearing before a federal immigration judge.
    `,
      contact: {
        phone: {
          work: 2028300212,
          fax: 2028300704,
        },
        email: "ksaba@meiplaw.com",
        address: {
          street: "1900 K ST NW, Suite 725",
          city: "Washington, DC",
          state: "DC",
          zip: "20006",
        },
      },
      education: [
        {
          degree: "J.D.",
          major: "",
          school:
            "University of Maryland School of Law (summa cum laude) (Moot Court) (Order of the Coif)",
          yearGraduated: 2011,
        },
        {
          degree: "B.S.E.",
          major: "Chemical Engineering",
          school: "University of Michigan (magna cum laude)",
          yearGraduated: 2008,
        },
      ],
      barAdmissions: [
        "Maryland",
        "District of Columbia",
        "U.S. Patent and Trademark Office",
      ],
      courtAdmissions: [
        "United States Court of Appeals for the Federal Circuit",
      ],
      publications: [
        {
          role: "Co-Author",
          title:
            "Co-author, Trial in ANDA Litigation: Strategies and Tactics for Pharmaceutical Patent Litigators, American Bar Association (Section of Intellectual Property Law)",
          date: 2020,
        },
      ],
      seminars: [
        {
          role: "Panelist",
          title:
            "Definitely, Maybe: Determining Patentable Subject Matter and the Future of Section 101",
          event: "ACI Paragraph IV Disputes Conference",
          date: "April 2021",
        },
      ],
      assets: {
        large: "../public/assets/profile-kaveh-saba [450x600].jpg",
        small: "../public/assets/profile-kaveh-saba [250x333].jpg",
      },
    },
  ],

  contact: {
    address: {
      street: "1900 K ST NW, Suite 725",
      city: "Washington",
      state: "DC",
      zip: "20006",
    },
    phone: {
      work: 2028300707,
      fax: 2028300704,
    },
  },

  cases: {
    pharma: [
      `Azurity Pharmaceuticals, Inc. v. Amneal Pharmaceuticals LLC (Katerzia)`,
      `Celgene Corporation v. Biocon Pharma Limited (Revlimid)`,
      `Silvergate Pharmaceuticals v. Amneal Pharmaceuticals LLC (Epaned)`,
      `Noven Pharm., Inc. v. Amneal Pharmaceuticals LLC (Minivelle)`,
      `Forest Labs., LLC et al v. Prinston Pharm. Inc. et al (Fetzima)`,
      `Hospira Inc. v. Amneal Pharmaceuticals LLC (Precedex)`,
      `Amgen Inc. v. Amneal Pharmaceuticals LLC (Sensipar)`,
      `Kowa Co., Ltd. et al v. Amneal Pharmaceuticals LLC et al (Pitavastatin)`,
      `Kowa Co., Ltd. et al v. Apotex, Inc. et al (Pitavastatin)`,
      `Amgen Inc. v. Apotex Inc. (Sensipar)`,
      `Shire Dev. LLC v. Amneal Pharmaceuticals LLC et al (Lialda)`,
      `Jazz Pharm., Inc. v. Amneal Pharmaceuticals LLC (Xyrem)`,
      `Astrazeneca AB et al v. Andrx Labs., LLC (Nexium 24)`,
      `Horizon Pharma, Inc. v. Dr. Reddy’s Labs., Inc. (Vimovo)`,
      `Merck & Cie v. Watson Labs, Inc. (Beyaz and Safyral)`,
      `Fresenius Kabi USA, LLC v. Dr. Reddy’s Labs., Ltd (Propofol)`,
      `Fresenius Kabi USA LLC v. Watson Labs., Inc. (Diprivan)`,
      `Shire Development, LLC v. Watson Pharm. Inc. (Lialda)`,
      `Unimed Pharm LLC v. Watson Labs, Inc. (Androgel 2%)`,
      `Depomed, Inc. v. Banner Pharmacaps Inc. (Zipsor)`,
      `Forest Labs, Inc. v. Watson Pharm. Inc. (Bystolic)`,
      `Takeda Pharm. Co. v. Handa Pharm., LLC (Dexilant)`,
      `AstraZeneca UK Ltd. v. Watson Pharm. Inc. (Crestor — alternate salt formulation)`,
      `AstraZeneca Pharm. LP v. Cobalt Pharm. (Crestor — AB rated formulation)`,
      `AstraZeneca Pharm. LP v. Handa Pharm., LLC (Seroquel XR)`,
      `Alza Corp. v. Kremers Urban LLC (Concerta)`,
      `Biovail Labs. Int’l. v. Intelgenx Corp. (Wellbutrin XL)`,
      `Sanofi-Aventis v. Ebewe Pharm. (Eloxatin)`,
      `Pfizer Inc. v. Cobalt Pharm., Inc. (Lipitor — alternate salt formulation)`,
      `Aventis Pharma Deutschland v. Cobalt Pharm. (Altace)`,
      `AstraZeneca AB v. Andrx Pharm. (Toprol XL)`,
      `NABI Biopharmaceuticals v. Roxane Labs, Inc. (Phoslo)`,
      `Biovail Labs. Int’l v. Andrx Pharm. (Cardizem XL)`,
      `ICN Pharm. v. Three Rivers Pharm (Rebetol)`,
      `Schering Corp. v. Three Rivers Pharm (Ribavirin)`,
      `Teva Pharmaceuticals USA, Inc. v. Sandoz, Inc. and Teva Pharm. USA, Inc. v. Mylan Pharm., Inc. (Copaxone)`,
      `Pfizer Inc. v. Teva Pharm. USA, Inc. (Lyrica)`,
      `Warner Chilcott Co. LLC v. Teva Pharm. USA, Inc. (Atelvia)`,
    ],
    other: [
      `CEATS, Inc. v. Orbitz Worldwide, Inc. (Software)`,
      `2-Way Computing, Inc. v. Nextel Finance Co. (Telecom software)`,
      `Numerical Tech. Inc. v. ASML Masktools, Inc. (Semiconductor manufacture)`,
      `NeoMagic v. Trident Microsystems (Semiconductors)`,
      `Electronics For Imaging v. Splash Tech. (Software)`,
    ],
  },
};

export default data;
