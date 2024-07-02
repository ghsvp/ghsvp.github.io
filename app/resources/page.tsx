import Image from "next/image";
import img from "@/public/gsmst-drive/gsmst-drive-banner.jpg";

export default function Resources() {
  return (
    <main className="mt-16 md:mt-24 lg:mt-24 p-8 max-w-2xl mx-auto prose">
      <h2>Start a Voter Drive</h2>
      <p>
        Are you interested in collaborating with GHSVP to host a voter drive at
        your school? Here is a framework of what to expect!
      </p>
      <h3>GHSVP will provide:</h3>
      <ul>
        <li>
          <strong>Planning & Drive Framework</strong>
          <p>
            Through our previous partnerships, GHSVP can help gauge how a
            registration drive will be most optimal for your school. We present
            partner schools with past frameworks from our successful drives. We
            host one-on-one meetings to tailor the drive to fit your school’s
            class size and administrative needs.
          </p>
        </li>
        <li>
          <strong>In-Person Staffing & Deputy Registrar</strong>
          <p>
            As per Georgia law, a deputy registrar must be present when
            registering student voters during school. GHSVP will provide at
            least one deputy registrar who will be present at the voter drive.
            GHSVP staff will be present to run the drive and ensure it runs
            smoothly.
          </p>
        </li>
        <li>
          <strong>Registration Forms & Drive Set Up</strong>
          <p>
            GHSVP will coordinate and organize all materials needed for the
            drive, including paper registration forms, registration QR codes,
            and voter education pamphlets. Additionally, GHSVP will set up the
            drive and organize these materials.
          </p>
        </li>
        <li>
          <strong>Registration Expertise</strong>
          <p>
            With Georgia election office staff on our team, GHSVP is able to
            provide technical expertise regarding voter registration, handling
            any outstanding concerns or complications that arise.
          </p>
        </li>
        <li>
          <strong>Contact with County Election Office</strong>
          <p>
            GHSVP will coordinate with your county’s election office outreach
            team in order to receive additional resources and/or address
            county-specific technicalities regarding voter registration.
          </p>
        </li>
        <li>
          <strong>Advertisements & Professional Documentation</strong>
          <p>
            GHSVP creates advertisements for each school voter drive, including
            flyers informing students when the drive is coming up, what they
            should expect, and what they need to bring. Whenever possible, GHSVP
            will also provide professional photography to document the drive.
          </p>
        </li>
        <li>
          <strong>GHSVP Banner</strong>
          <p>
            Upon request, GHSVP will provide a custom poster for your school. It
            is highly encouraged that this poster is present during the
            registration drive and all newly registered students can sign their
            name.
          </p>
          <figure>
            <Image src={img} alt="Example banner signed at GSMST voter drive" />
            <figcaption>Example banner signed at GSMST voter drive</figcaption>
          </figure>
        </li>
      </ul>
      <h2>What We Ask From You:</h2>
      <ul>
        <li>
          <strong>Contact with School Administration</strong>
          <p>
            Contact with school administration allows us to coordinate a voter
            drive that can take place during the day. This involves{" "}
            <span className="font-bold"> reserving a space </span> and
            <span className="font-bold">
              {" "}
              incorporating the drive into the school-day schedule.
            </span>
          </p>
        </li>
        <li>
          <span className="font-bold">Student Chapter Head</span>
          <ul>
            <li>
              Whenever possible, GHSVP aims to have at least one civically
              engaged high school student serve as the Chapter Head of the
              school hosting a GHSVP voter drive. This ensures the organization
              is ran for students, by students.
            </li>
            <li>
              (Partnerships with school Student Governments/Student Councils are
              also highly encouraged)
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
}
