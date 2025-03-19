import { HashLink } from "react-router-hash-link";
import '../aboutPage/aboutMePage.less'

export const AboutMe = () => {
  return (
    <div id="aboutUsSection">
      {/* <img src='https://i.ibb.co/9rG50y5/IMG-4489.jpg' alt='jae littles msw' id='jae'/>
                <h2>Get to know me</h2>
                <div id='description'>
                    <p>My name is Jae Littles I am a millennial therapist who incorporates self care, fun, growth, and more. I am a Registered Clinical Social Work Intern (RCSWI). I received my Undergraduate degree in Communication and Sociology with a minor in Gender Studies at Florida Gulf Coast University. I then went on to serve with Americorp then eventually received my Masters in Social Work at Florida State University. </p>
                    <p>I’m passionate about helping humans to thrive, gain confidence, learn coping skills, life low moments, assist with life transitions, and handle family and relationship troubles. I have a colorful background in the field of social work. I have experience in inpatient, admission/intake, behavior heath settings, non profits, and school settings. I have worked with numerous  populations from child all the ways to geriatrics on the micro and mezzo level.  I utilize an integrative approach in therapy. I specialize in Cognitive behavior therapy, Dialectical behavior therapy , Solution Focused therapy, and Feminist therapy. I incorporate holistic and mindfulness practices in therapy. I believe that therapy is a journey and while at times it is hard, it worth it. We all need to be reminded that we are worthy, special and valuable.</p>
                    <p>As a Counselor, I am here to guide you through life’s most complex and difficult matters in a safe and supportive environment. I truly care about my clients' well-being and guarantee top of the line counseling and psychological services catered to their needs.</p>
                    <p>I would love to assist you on that journey. Sometimes we need something for us, by us. May we all remember the access to healing is our birthright.</p>
                </div> */}
      <div>
        <h1>Meet the team</h1>
      </div>
      <div className="teamMember">
        <div>
          <div>
            <img
              src="https://i.ibb.co/0qThDx3/jae-floor.jpg"
              alt="Jae Littles MSW"
              className="teamMemberImg"
            />
          </div>
          <h3>Jae Littles-Edwards, LCSW</h3>
        </div>
          <div className="teamMemberDescription">
            <div>
              <p>
                My name is Jae Littles. I am a Licenced Clinical Social Work
                (SW21479). I received my undergraduate degree in Communication
                and Sociology with a minor in Gender Studies at Florida Gulf
                Coast University. I then went on to serve with Americorp then
                eventually received my Masters in Social Work at Florida State
                University. I’m passionate about helping humans to thrive, gain
                confidence, learn coping skills, life low moments, assist with
                life transitions, and handle family and relationship troubles.
              </p>
            <br/>
            <br/>
              <p>
                I have a colorful background in the field of social work. I have
                experience in inpatient, admission/intake, behavior health
                settings, non-profits, and school settings. I have worked with
                numerous populations from children all the way to geriatrics on
                the micro and mezzo level. I utilize an integrative approach in
                therapy. I specialize in Cognitive behavior therapy, Dialectical
                behavior therapy, Solution-Focused therapy, and Feminist
                therapy. I incorporate holistic and mindfulness practices in
                therapy.
              </p>
              <br/>
              <br/>
              <p>
                I believe that therapy is a journey and while at times it is
                hard, it is worth it. We all NEED to be reminded that we are
                worthy, special, and valuable. ​As a Counselor, I am here to
                guide you through life’s most complex and difficult matters in a
                safe and supportive environment. I genuinely care about my
                clients' well-being and guarantee top-of-the-line counseling and
                psychological services catered to their needs.​I would love to
                assist you on that journey. Sometimes we need something for
                ourselves, by us. May we all remember that access to healing is
                our birthright.
              </p>
            </div>
          </div>
        </div>

      <div className="teamMember">
        <div>
          <div>
            <img
              src="https://i.ibb.co/7rnPJQs/nija-with-grace-cropped.jpg"
              alt="Nija MSW"
              className="teamMemberImg"
            />
          </div>
          <h3>Nija Durden, RCSWI</h3>
        </div>
        <div className="teamMemberDescription">
          <div>
            <p>
              Hi, I'm Nija (pronounced Ni-Ya). I am excited that you are here!
              Being here is taking a step in the right direction for your mental
              and emotional well-being. I like to take an eclectic approach to
              therapy, using interventions such as mindfulness, motivational
              interviewing, and cognitive behavioral therapy. By drawing on
              solution-focused methods, I support you in discovering your own
              insights and fostering independence.
            </p>
            <br/>
            <br/>
            <p>
              I believe that anyone can benefit from therapy. My role is to help
              you continue as the author of your story, guiding you as you
              navigate life’s challenges. Together, we’ll build a strong
              therapeutic alliance, where you can feel empowered in a safe and
              supportive space. I believe you already hold the strengths needed
              to face transitions and difficult moments, and I’m here to help
              you bring those strengths to the surface.
            </p>
          </div>
        </div>
      </div>
      <div className="teamMember">
        <div>
          <div>
          <img src=""
              alt="Katherine With Grace intern"
              className="teamMemberImg"/>
          </div>
          <h3>Katherine</h3>
        </div>
        <div className="teamMemberDescription">
          <p>
            Katherine Evans is in the second year of her Masters of Social Work
            at Florida State University. She received her undergraduate degree
            in psychology in 2023 from the University of North Florida, with
            minors in leadership and business management. Katherine’s
            professional interests are substance use disorder, trauma, religious
            counseling, and a holistic treatment approach. Katherine’s personal
            interests are exercising, cooking, thrifting and art.
          </p>
        </div>
      </div>
      <div>
        <button id='aboutMeButton'>
          <HashLink smooth to="/contact#contactContent">
            Contact Us
          </HashLink>
        </button>
      </div>
    </div>
  );
};
