import mailchimp from './mailchimp'
import likes from './likes'

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

  #desc-box {
      position: relative;
      grid-column: 2;
      grid-row: 2;
      border-radius: {text:Border Radius}px;
  }
  .secret-message {
      width: 100%;
      position: absolute;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
  .secret-message img {
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
  .permalink-page #desc-box, .permalink-page .secret-message {
      display: none;
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
  }
  label.toggle {
      display: block;
      overflow: hidden;
  }
  input.toggle {
      display: none;
  }
  .sidebar-search {
      overflow: hidden;
  }
  #search ~ .toggle {
      height: 21px;
      transition: height .25s,
          height .25s step-start;
  }
  #search:checked ~ .sidebar-search {
      height: 34px;
      transition: height .25s;
  }
  .sidebar-search,
  #search:checked ~ .toggle {
      height: 0;
      transition:  height .25s;
  }
  .subscribe {
      overflow: hidden;
  }
  #subscribe ~ .toggle {
      height: 21px;
      transition: height 1s,
          height 1s step-start;
  }
  #subscribe:checked ~ .subscribe {
      height: 376px;
      transition: height 1s;
  }
  .subscribe,
  #subscribe:checked ~ .toggle {
      height: 0;
      transition:  height 1s;
  }
  .sidebar-links, .theme {
      overflow: hidden;
  }
  #theme:checked ~ .theme {
      height: 71px;
      transition: height 1s;
  }
  .theme {
      height: 0;
      transition:  height 1s;
  }
  #theme:checked ~ .toggle {
      color: {color:Peripheral Text};
      margin-left: -1.15em;
      transition:  margin-left .5s, color 2s;
  }
  .inner img {
      width: 100%;
  }
  .portrait img{
      display: block;
      margin: 0 auto;
  }
  .blog-description {
      font-style: italic;
  }
  .tag-list {
    text-align: center;
    padding: 0;
  }
  .tag-list li {
    display: inline;
  }
  .tag-list li a {
    white-space: nowrap;
  }
  .tag-list li::after {
    content: " ";
    word-spacing: 1em;
    background-image: url('https://www.svgrepo.com/show/481547/tree.svg');
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;
    filter: url(#selected);
  }

${mailchimp.style}

`, desktopStyle: `

      #desc-box {
          background: url({image:Slug})
              top 32px center / auto no-repeat
              {color:Sidebar};
          margin-bottom: 32px;
      }

      .portrait {
          text-align: center;
      }

      .deets>* {
          margin: 32px;
      }

      .inner {
          width:inherit;
          background:none;
          margin: 32px;
      }
`, mobileStyle: `


    .inner>:not(:first-child), .inner:not(.sidebar-links-container), .secret-message, .extra-description, .tag-list, .widget, #signup, .sidebar-search {
        display: none;
    }

    #desc-box {
        display: flex;
        gap: 32px;
        margin: 32px;
        padding: 0 16px;
    }

    .deets {
        font-size: 2.8vw;
        display: flex;
        gap: 32px;
        align-items: center;
        height:256px;
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

    .subtext {
        display: block;
    }


`, js: `

function clickSearch() {
    if (document.getElementById('searchForm').q.value=='{text:Search Box Content}') document.getElementById('searchForm').q.value = '';
}

`, html: `
          <div id="desc-box" class="dark">

              <div class="deets">
                  <div class="portrait">
                      <a href="/">
                      <img src="{PortraitURL-128}"/>
                      </a>
                  </div>
                  <div class="blog-description" />
                      <div>{text:Short Description}</div>
                  </div>
                  <div class="extra-description" />
                      {text:Extra Description}
                  </div>
                  <ul class="tag-list" />
                      {text:Tag List}
                  </ul>
              </div>
              <div class="inner sidebar-links-container">
                  {block:AskEnabled}<div class="sidebar-links">
                      <a href="/ask" class="t">Talk to me, I don't bite :) <span class='subtext'>forests don't have mouths</span></a>
                  </div>{/block:AskEnabled}
                  <div class="sidebar-links">
                      <a href="/random" class="t">Random post</a>
                  </div>
                  <div class="sidebar-links">
                      <input id="search" type="checkbox" class="toggle">
                      <label for="search" class="toggle" onclick="document.getElementById('searchInput').focus()">▸ &nbsp; Search posts and tags</label>

                      <div class="sidebar-search">

                          <form action="/search" method="get" id="searchForm">
                              <input type="text" name="q" value="" onclick="clickSearch();" id="searchInput" />
                          </form>
                          <!--<div id="crackers-box"><a href="https://blog.uncannyforest.com/tagged/my%20parakeet%20Crackers"></a></div>-->

                      </div>
                  </div>
                  <div class="sidebar-links">
                  <input id="subscribe" type="checkbox" class="toggle">
                  <label for="subscribe" class="toggle">▸ &nbsp; Subscribe via RSS or email</label>
                  <div class="subscribe" class="sidebar-links-container ">
                      <div class="sidebar-links">
                          <a href="{RSS}" class="t">RSS link for your feed reader</a> (<a href="https://www.tumblr.com/knuckleheadmcspazotron/708111563312283648" class="t">what?</a>)
                      </div>

                      <div id="signup">
  ${mailchimp.html}
                      </div>
                  </div>

                  <!-- >

                  {block:IfShowPeopleIFollow}
                      {block:Following}
                          <div class="heading" id="following">{lang:Following}</div>
                          <div class="content" id="following-avatars">
                              {block:Followed}<a href="{FollowedURL}"><img src="{FollowedPortraitURL-40}" /></a>{/block:Followed}
                          </div>
                      {/block:Following}
                  {/block:IfShowPeopleIFollow}

                  </div>
          <!-- > </!-->

                  <div class="sidebar-links">
                  <input id="theme" type="checkbox" class="toggle">
                  <label for="theme" class="toggle">▸ &nbsp; I made this theme <i>myself!</i></label>
                  <div class="theme extra-description" />
                      and I am very proud of it. if you want to use it, nag me to put it in the theme garden, maybe in <a href="/ask">my asks</a>
                  </div>
                  </div>
                  <img src="{image:Hearts}">
              </div>

${likes.html}



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
  `
}
