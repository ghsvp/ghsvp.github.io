import Image from "next/image";
import banner from "@/public/gsmst-drive/banner.jpg";

export default function Resources() {
  return (
    <main className="mt-16 md:mt-24 lg:mt-24 p-8 max-w-2xl mx-auto prose">
      <h2>Start a Voter Drive</h2>
      <p>
        Are you interested in collaborating with GHSVP to host a voter drive at
        your school? Here is a framework of what to expect!
      </p>
      {/* PDF Resources Section */}
      <div className="my-8">
        <h3 className="text-xl font-bold mb-4">Important Resources</h3>
        <div className="grid gap-6 mb-8">
          {/* Admin Packet */}
          <div className="rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <h4 className="bg-gray-50 p-4 text-lg font-semibold border-b">
              Administrative Information Packet
            </h4>
            <div className="aspect-[16/9] w-full">
              <iframe
                src="/handouts/GHSVP Admin Packet.pdf"
                className="w-full h-full"
                allow="fullscreen"
              />
            </div>
            <div className="p-4 bg-gray-50">
              <a
                href="/handouts/GHSVP Admin Packet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
              >
                Open PDF in new tab
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Steps for Drive Packet */}
          <div className="rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <h4 className="bg-gray-50 p-4 text-lg font-semibold border-b">
              Drive Planning Guide
            </h4>
            <div className="aspect-[16/9] w-full">
              <iframe
                src="/handouts/GHSVP Steps for a Drive Packet.pdf"
                className="w-full h-full"
                allow="fullscreen"
              />
            </div>
            <div className="p-4 bg-gray-50">
              <a
                href="/handouts/GHSVP Steps for a Drive Packet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
              >
                Open PDF in new tab
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
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
            <Image src={banner} alt="Example banner signed at GSMST voter drive" />
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
