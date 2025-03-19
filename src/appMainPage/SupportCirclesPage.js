// import { ContactSection } from "../pages/supportCirclesPage/components/ContactSection"
import { ProcessingGroupSection } from "../pages/supportCirclesPage/components/ProcessingGroupSection"
import { GraceCirclesSection } from "../pages/supportCirclesPage/components/GraceCirclesSection"
import '../pages/supportCirclesPage/supportCirclesPage.less'
// import { Newsletter } from "../pages/supportCirclesPage/components/Newsletter"

export const SupportCircles=()=>{
    return(
        <div className="supportCirclesPage">
            <GraceCirclesSection/>
            <ProcessingGroupSection/>
            {/* <Newsletter/> */}
            {/* <ContactSection/> */}
        </div>
    )
}