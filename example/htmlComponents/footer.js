const React = require('react');

const style = require('../style');

module.exports = React.createClass({
    render() {
      return (
        <mj-section>
          <mj-column>
            <mj-raw>
              <a href="https://www.facebook.com/FeedbackFruits" rel="publisher" className="external" title="Find us on Facebook" target="_blank">
                <img width={style.footer.socialIcon.size} alt="Facebook" src="https://36fb8d5f59716005a347-a3e98b785d88d3b68c028d6aff30edc4.ssl.cf3.rackcdn.com/assets/social-icons/facebook-00e98236720adeee72437a9dfd77e3b9.png" />
              </a>
            </mj-raw>
          </mj-column>

          <mj-column>
            <mj-raw>
              <a href="http://www.twitter.com/FeedbackFruits" rel="publisher" className="external" title="Find us at Twitter" target="_blank">
                <img width={style.footer.socialIcon.size} src="https://36fb8d5f59716005a347-a3e98b785d88d3b68c028d6aff30edc4.ssl.cf3.rackcdn.com/assets/social-icons/twitter-8cee691609c1ae66cb9bfd518611811d.png" />
              </a>
            </mj-raw>
          </mj-column>

          <mj-column>
            <mj-raw>
              <a href="http://www.linkedin.com/company/2914164?trk=tyah" rel="publisher" className="external" title="Find us on LinkedIn" target="_blank">
                <img width={style.footer.socialIcon.size} alt="LinkedIn" src="https://36fb8d5f59716005a347-a3e98b785d88d3b68c028d6aff30edc4.ssl.cf3.rackcdn.com/assets/social-icons/linkedin-c4dc9803b9ea4ddbba15a84cc00ed0cf.png" />
              </a>
            </mj-raw>
          </mj-column>

          <mj-column>
            <mj-raw>
              <a href="http://pinterest.com/feedbackfruits" rel="publisher" className="external" title="Find us on Pinterest" target="_blank">
                <img width={style.footer.socialIcon.size} alt="Pinterest" src="https://36fb8d5f59716005a347-a3e98b785d88d3b68c028d6aff30edc4.ssl.cf3.rackcdn.com/assets/social-icons/pinterest-79d3652efc3cac4f91e62aaa9c8c3c3a.png" />
              </a>
            </mj-raw>
          </mj-column>

          <mj-column>
            <mj-raw>
              <a href="https://plus.google.com/112772779277607027708" rel="publisher" className="external" title="Find us on Google Plus" target="_blank">
                <img width={style.footer.socialIcon.size} alt="Google Plus" src="https://36fb8d5f59716005a347-a3e98b785d88d3b68c028d6aff30edc4.ssl.cf3.rackcdn.com/assets/social-icons/googleplus-9ed657ef7586048f1d670d312b86b934.png" />
              </a>
            </mj-raw>
          </mj-column>
        </mj-section>
      );
    }
  }
);
