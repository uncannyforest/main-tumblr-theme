export default {
  style: `
              #signup {
                  margin-top: 32px;
                  border: 1px solid {color:Peripheral Text};
                  border-radius: 5px;
                  max-width: 277px;
                  font-size: 14px;
              }
              #mc_embed_signup .foot {
                  display: flex;
              }
              #signup form, #signup #subscribe, #signup .brandingLogo {
                  margin: 0;
              }
              #signup form {
                  padding-top: 0;
                  padding-bottom: 0;
              }
              #signup .brandingLogo {
                  margin: 0;
              }
              #mc_embed_signup{clear:left;}
              #mc_embed_signup h2 {
                  font-size: 1.2em;
              }
              #mc_embed_signup .button {
                  background-color: #508068;
              }
              #mc_embed_signup .button:hover {
                  background-color: #80c0a0;
              }
              #mc_embed_signup .mc-field-group.input-group input {
                  width: 15px;
                  height: 15px;
                  vertical-align: top;
                  margin-top: 0px;
              }
`,
  html: `
  <div id="mc_embed_signup">
      <form action="https://uncannyforest.us20.list-manage.com/subscribe/post?u=fe84bdbc1641c9d3d9c5deb1f&amp;id=a111160619&amp;f_id=005d39e7f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
          <h2>Subscribe to updates via email!</h2>
  <div class="mc-field-group">
  	<label for="mce-EMAIL">Email Address (required)
  </label>
  	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
  	<span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
  </div>
  <div class="mc-field-group input-group">
      <strong>Which additional updates do you want to receive? </strong>
      <ul><li>
      <input type="checkbox" value="2" name="group[282078][2]" id="mce-group[282078]-282078-0" checked>
      <label for="mce-group[282078]-282078-0">Gamedev posts</label>
  </li>
  <li>
      <input type="checkbox" value="4" name="group[282078][4]" id="mce-group[282078]-282078-1" checked>
      <label for="mce-group[282078]-282078-1">New comics</label>
  </li>
  <li>
      <input type="checkbox" value="1" name="group[282078][1]" id="mce-group[282078]-282078-2" checked="">
      <label for="mce-group[282078]-282078-2">Photography and writing</label>
  </li>
  </ul>
      <span id="mce-group[282078]-HELPERTEXT" class="helper_text"></span>
  </div>
  	<div id="mce-responses" class="clear foot">
  		<div class="response" id="mce-error-response" style="display:none"></div>
  		<div class="response" id="mce-success-response" style="display:none"></div>
  	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_fe84bdbc1641c9d3d9c5deb1f_a111160619" tabindex="-1" value=""></div>
          <div class="optionalParent">
              <div class="clear foot">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                  <p class="brandingLogo"><a href="https://eepurl.com/hQLWRD" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_light_dtp.svg"></a></p>
                  </div>
              </div>
          </div>
      </form>
  </div>
  <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
`
}
