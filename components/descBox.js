import mailchimp from './mailchimp'
import likes from './likes'
import ufSite from './ufSite'

export default {
  variables: `
  <meta name="image:Slug" />
  <meta name="image:Hearts" />
  <meta name="image:Signature" />
  <meta name="image:Signature Bright" />
  <meta name="if:RecentlyLiked" content="0"/>
  <meta name="text:Search Box Content" content="Guess what this does"/>
  <meta name="text:Short Description" content=""/>
  <meta name="text:Extra Description" content=""/>
  <meta name="text:Tag List" content=""/>
  <meta name="text:Final Message" content=""/>
  <meta name="text:Secret Message" content=""/>
  `, style: `

${likes.style}

  #full-sidebar {
      border-radius: {text:Border Radius}px;
      overflow: hidden;
      position: sticky;
      top: 32px;
      display: flex;
      flex-direction: column;
      align-content: space-between;
  }
  #desc-box {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      padding: 32px 0 0;
  }
  .sidebar-search {
      position: relative;
      display: flex;
      justify-content: space-between;
  }
  #searchForm {
      width: 100%;
      margin-bottom: 0;
  }
  #searchForm>input {
      width: 100%;
      border-radius: 3px;
      padding: 8px;
      box-sizing: border-box;
  }
  #searchForm>input:focus-visible {
      outline: none;
  }

  .subtext {
      font-size: .6em;
      letter-spacing: 0;
  }
  .sidebar-links-container {
      margin-top: 32px;
      margin-bottom: 32px;
  }
  .sidebar-links {
      margin-top:16px;
      margin-bottom:16px;
      list-style: none;
  }
  .sidebar-links:first-child {
    margin-top: 0;
  }
  .toggle {
    padding-left: 32px;
    box-sizing: border-box;
    animation-name: open-toggle;
  }
  .toggle:has(input:checked) {
      display: none;
      animation-name: close-toggle;
  }
  @keyframes open-toggle {
      from { display: block; overflow: hidden; height: 0 }
      to { display: block; overflow: hidden; height: 24px }
  }
  @keyframes close-toggle {
      from { display: block; overflow: hidden; height: 24px }
      to { display: block; overflow: hidden; height: 0 }
  }
  .toggle input {
      display: none;
  }
  .toggle+* {
      animation-duration: .5s;
  }
  .toggle:not(:has(input:checked))+* {
      display: none;
  }
  .sidebar-search {
      overflow: hidden;
  }
  .inner img {
      width: 100%;
      margin-top: 1em;
      margin-bottom: 1em;
  }
  .portrait img{
      display: block;
      margin: 0 auto;
  }
  .blog-description {
      font-style: italic;
      margin-bottom: 80px;
      text-align: center;
  }
  .inner>img {
    margin: -1em auto -1.5em;
  }
  .sidebar-links.email-sub {
    display: none;
  }
  .extra-description {
    margin: 0 0 32px;
  }
  .secret-message {
      margin-left: -32px;
      width: 100%;
      position: absolute;
      bottom: 83px;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
  .inner .secret-message img {
      margin: 0 auto;
      width: 25%;
      display: none;
  }
  .secret-message a:not(:hover) img.nohover {
      display: block;
  }
  .secret-message a:hover img.hover {
      display: block;
  }
  .secret-message-content {
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .secret-message-content a, .secret-message-content a:hover  {
      color: #00000080;
  }
  .permalink-page #full-sidebar, .permalink-page .secret-message {
      display: none;
  }
  .tree-decor {
    text-align: center;
    padding: 0;
  }
  .tree-decor li {
    display: inline;
  }
  .tree-decor li a {
    white-space: nowrap;
  }
  .tree-decor li::after {
    content: " ";
    word-spacing: 1em;
    background-image: url('https://www.svgrepo.com/show/481547/tree.svg');
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;
    filter: url(#selected);
  }
  .footer {
    display: flex;
    justify-content: end;
    overflow: hidden;
    position: relative;
    height: 121px;
  }
  #full-sidebar .footer .hf {
    right: 0;
    left: unset;
  }

${mailchimp.style}

`, desktopStyle: `

      #full-sidebar {
          float: right;
          width: 343px;
          height: calc(100vh - 32px - 12px);
          background-color: {color:Sidebar};
      }

      #desc-box {
          height: 100%;
      }

      .deets {
          background: url({image:Slug})
              top 0 center / auto no-repeat
              {color:Sidebar};
      }

      .deets>.portrait {
          text-align: center;
          margin-top: 0;
      }

      .deets>* {
          margin: 32px;
      }

      .inner {
          width:inherit;
          background:none;
          margin: 32px;
      }
      .toggle {
        animation-duration: .5s;
      }
      .toggle+.deets { animation-name: close-deets }
      .toggle:has(input:checked)+.deets { height: 367px; animation-name: open-deets }
      @keyframes open-deets {
          from { display: block; overflow: hidden; height: 0 }
          to { display: block; overflow: hidden; height: 367px }
      }
      @keyframes close-deets {
          from { display: block; overflow: hidden; height: 367px }
          to { display: block; overflow: hidden; height: 0 }
      }
      .toggle+:has(.sidebar-search) { animation-name: close-search }
      .toggle:has(input:checked)+:has(.sidebar-search) { height: 363px; animation-name: open-search }
      @keyframes open-search {
          from { display: block; overflow: hidden; margin: 0 32px; height: 0 }
          to { display: block; overflow: hidden; margin: 32px; height: 363px }
      }
      @keyframes close-search {
          from { display: block; overflow: hidden; margin: 32px; height: 363px }
          to { display: block; overflow: hidden; margin: 0 32px; height: 0 }
      }
      .toggle+:has(#signup) { animation-name: close-sub }
      .toggle:has(input:checked)+:has(#signup) { height: 370px; animation-name: open-sub }
      @keyframes open-sub {
          from { display: block; overflow: hidden; margin: 0 32px; height: 0 }
          to { display: block; overflow: hidden; margin: 32px; height: 370px }
      }
      @keyframes close-sub {
          from { display: block; overflow: hidden; margin: 32px; height: 370px }
          to { display: block; overflow: hidden; margin: 0 32px; height: 0 }
      }
      .toggle+:has(.extra-description) { animation-name: close-about }
      .toggle:has(input:checked)+:has(.extra-description) { height: 370px; animation-name: open-about }
      @keyframes open-about {
          from { display: block; overflow: hidden; margin: 0 32px; height: 0 }
          to { display: block; overflow: hidden; margin: 32px; height: 370px }
      }
      @keyframes close-about {
          from { display: block; overflow: hidden; margin: 32px; height: 370px }
          to { display: block; overflow: hidden; margin: 0 32px; height: 0 }
      }
`, mobileStyle: `


    #signup, .widget, #full-sidebar .footer-container {
        display: none;
    }

    #desc-box {
        display: flex;
        gap: 16px;
        margin: 32px;
        padding: 16px;
    }

    .deets {
        font-size: 2.8vw;
        display: flex;
        gap: 32px;
        align-items: center;
        height: 256px;
    }

    .portrait {
        height: 0;
        width: 256px;
        position: relative;
    }
    .portrait img {
        position: absolute;
        top: -128px;
        width: 256px;
    }

    .blog-description {
        flex-basis: 27vw;
        flex-grow: 0;
        order: -1;
        text-align: end;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 0;
    }
    .blog-description>div {
        flex-basis: 30vw;
    }
    .sidebar-links-container {
        flex-basis: 25vw;
        flex-shrink: 0;
    }
    .sidebar-links {
        flex-basis: 0px;
        flex-grow: 1;
        font-size: 4vw;
        text-decoration: underline;
        text-decoration-thickness: .05em;
    }
    .sidebar-links:first-child {
      margin-top: 16px;
    }

    .inner {
      width: 100%
    }
    #searchForm>input {
      font-size: 1.4em;
    }
    .sidebar-links.email-sub {
      display: block;
      margin-top: 32px;
    }
    .secret-message {
      margin-left: 0;
      position: static;
    }


`, js: `

function clickSearch() {
    if (document.getElementById('searchForm').q.value=='{text:Search Box Content}') document.getElementById('searchForm').q.value = '';
}

`, html: `
      <div id="full-sidebar">
          <div id="desc-box" class="dark">
              <label class="toggle">
                <input id="deets" type="radio" name="desc-box-section" checked />
                ▸ &nbsp; Links
              </label>
              <div class="deets">
                  <div class="portrait">
                      <a href="/">
                      <img src="{PortraitURL-128}"/>
                      </a>
                  </div>
                  <ul class="inner sidebar-links-container tree-decor">
                      <li class="sidebar-links"><a href="/archive" class="t">archive</a></li>
                      <li class="sidebar-links"><a href="/random" class="t">random</a></li>
                      {block:AskEnabled}<li class="sidebar-links"><a href="/ask" class="t">asks/say hi!</a></li>{/block:AskEnabled}
                  </ul>
                  <div class="blog-description" />
                      <div>{text:Short Description}</div>
                  </div>
              </div>
              <label class="toggle">
                <input id="search" type="radio" name="desc-box-section" />
                ▸ &nbsp; Search
              </label>
              <div class="inner">
                  <div class="sidebar-search">
                      <form action="/search" method="get" id="searchForm">
                          <input type="text" name="q" value="" onclick="clickSearch();" id="searchInput" />
                      </form>
                  </div>
                  <ul class="tag-list tree-decor" />
                      {text:Tag List}
                  </ul>
                  <img src="{image:Hearts}">
              </div>
              <label class="toggle">
                <input id="subscribe" type="radio" name="desc-box-section" />
                ▸ &nbsp; Subscribe
              </label>
              <div class="inner">
                  <li class="sidebar-links">
                  <a href="{RSS}" class="t">RSS link for your feed reader</a> (<a href="https://www.tumblr.com/knuckleheadmcspazotron/708111563312283648" class="t">what?</a>)</li>
                  <li class="sidebar-links email-sub"><a href="https://uncannyforest.com/subscribe" class="t">Subscribe via email</a></li>
                  <div id="signup">
  ${mailchimp.html}
                  </div>

              </div>
              <label class="toggle">
                <input id="about" type="radio" name="desc-box-section" />
                ▸ &nbsp; About
              </label>
              <div class="inner">
                <div class="extra-description" />
                    {text:Extra Description}
                </div>
                <div class="extra-description" />
                    I made this theme <i>myself</i> and I am very proud of it. if you want to use it, nag me to put it in the theme garden, maybe in <a href="/ask">my asks</a>
                </div>
                <div class="secret-message">
                    <a>
                        <img src="{image:Signature}" class="nohover">
                        <img src="{image:Signature Bright}" class="hover">
                    </a>
                    <div class="secret-message-content">
                        <a href="https://blog.uncannyforest.com/post/29914344977/i-keep-boogie-on" >
                            {text:Secret Message}
                        </a>
                    </div>
                </div>
              </div>

${likes.html}
          </div>
          <div class="footer-container">
${ufSite.footer}
          </div class="footer-container">

      </div>
  `
}
