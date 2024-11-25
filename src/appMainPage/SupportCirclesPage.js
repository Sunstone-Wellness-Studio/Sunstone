import { ContactSection } from "../pages/supportCirclesPage/ContactSection"
import { ProcessingGroupSection } from "../pages/supportCirclesPage/ProcessingGroupSection"
import { GraceCirclesSection } from "../pages/supportCirclesPage/GraceCirclesSection"

export const SupportCircles=()=>{
    return(
        <div>
            <GraceCirclesSection/>
            <ProcessingGroupSection/>
            <ContactSection/>
        </div>
    )
}