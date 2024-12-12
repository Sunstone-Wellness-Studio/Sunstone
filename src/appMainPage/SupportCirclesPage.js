import { ContactSection } from "../pages/supportCirclesPage/components/ContactSection"
import { ProcessingGroupSection } from "../pages/supportCirclesPage/components/ProcessingGroupSection"
import { GraceCirclesSection } from "../pages/supportCirclesPage/components/GraceCirclesSection"

export const SupportCircles=()=>{
    return(
        <div>
            <GraceCirclesSection/>
            <ProcessingGroupSection/>
            <ContactSection/>
        </div>
    )
}