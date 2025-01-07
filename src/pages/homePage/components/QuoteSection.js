import "../../homePage/homePage.less";

export const QuoteSection = () => {
  return (
    <section className="quoteSection">
      {/* <div id="quoteBox"> */}
      <div className="quoteTxt">
          <h3>
            Maya Angelou</h3>
            
            <q>
              All my work, my life, everything I do is about survival, not just
              bare, awful, plodding survival, but survival with grace and faith.
              While one may encounter many defeats, one must not be defeated.
            </q>
          
        </div>
          <img
            src="https://static.wixstatic.com/media/11062b_057e7c7d98d144bfb43db33f22a48ece~mv2.jpeg/v1/fill/w_1120,h_920,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_057e7c7d98d144bfb43db33f22a48ece~mv2.jpeg"
            className="quoteImg"
            alt="woman journaling"
          />
      {/* </div> */}
    </section>
  );
};
