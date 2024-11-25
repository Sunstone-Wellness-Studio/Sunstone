import { Hotlines } from "../pages/resourcesPage/Hotlines"
import { SuicidePrevention } from "../pages/resourcesPage/SuicidePreventionHotlines"
import { MobileApps } from "../pages/resourcesPage/MobileApps"
import { SupportGroups } from "../pages/resourcesPage/SupportGroups"
import { TherapyAssistance } from "../pages/resourcesPage/TherapyAssistancePrograms"

export const Resources = () => {
    return (
        <div >
            <section>
                <div>
                    <h1>Resources</h1>
                </div>
                <div>
                    <p>Many individuals encounter mental health challenges at some point in their lives. It's common to experience occasional grief, stress, or sadness. However, if you find yourself grappling with persistent or severe mental health issues, seeking help is crucial. On this page, we've compiled resources to support you on your path to healing, extending beyond traditional therapy.</p>
                </div>
            </section>
            <section>
                <SuicidePrevention/>
                <Hotlines/>
                <MobileApps/>
                <SupportGroups/>
                <TherapyAssistance/>
            </section>
        </div>
    )
}