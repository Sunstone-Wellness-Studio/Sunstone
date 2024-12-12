import { Hotlines } from "../pages/resourcesPage/components/Hotlines"
import { SuicidePrevention } from "../pages/resourcesPage/components/SuicidePreventionHotlines"
import { MobileApps } from "../pages/resourcesPage/components/MobileApps"
import { SupportGroups } from "../pages/resourcesPage/components/SupportGroups"
import { TherapyAssistance } from "../pages/resourcesPage/components/TherapyAssistancePrograms"
import { Product } from "../pages/productPage/ProductPage"

export const Resources = () => {
    let products = [
        {
          img: "https://static.wixstatic.com/media/31f747_6c70620bc4ad492dbbd10c97b26923cf~mv2.png/v1/fill/w_1960,h_1102,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/31f747_6c70620bc4ad492dbbd10c97b26923cf~mv2.png",
          altText:"With Grace Guided Journal",
          title: "Give it some Grace: guided journal",
          description: "Give it some Grace: A Self-Guided Journal is a therapy-guided journal with 60+ therapy prompts, coping skills, and more resources to heal and practice self-care. This journal was written by a clinical therapist and the questions were vetted by clients in their healing journey. This journal was made for anyone contemplating, starting, currently on, or maintaining their healing journey. We are honored that Give it some Grace can be a part of your journey.",
          price: 15.00,
          externalLink: "https://www.amazon.com/Give-some-Grace-Jae-Littles/dp/B0BW27PCFV",
          route: "journal"
    
        },]
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

                <Product products={products}/>
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