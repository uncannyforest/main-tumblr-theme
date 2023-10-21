export default {
  style: `
  .post {
      margin-bottom: 32px;
      overflow: hidden;
  }

  .cont {
      padding: 32px;
      color: #000;
      background-color: #fff;
      overflow: hidden;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.5;
      clear: both;
  }
  .cont p {
      white-space: pre-wrap;
  }
  #posts>.post .cont p {
      margin: 32px 0;
  }
  #posts>.post .cont p:first-child,
  #posts>.post .cont p:empty + p,
  #posts>.post .cont p:empty + div {
      margin-top: 0;
  }
  #posts>.post .cont p:last-child {
      margin-bottom: 0;
  }
  #posts>.post .cont p:empty {
      display: none;
  }
  .cont.photo img {
      max-width: 100%;
      border-radius: {text:Border Radius}px;
      margin-left: auto;
      margin-right: auto;
      display: block;
  }
  .tumblr_video_container {
    position: relative;
    padding-bottom: 75%;
    height: 0 !important;
    width: auto !important;
    overflow: hidden;
  }
  .tumblr_video_container iframe, .tumblr_video_container object, .tumblr_video_container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .source, .pinned {
      text-align: right;
      float: right;
  }
  .source a, .pinned a {
      padding: 8px 11px;
      background-color: {color:Sidebar};
      display: block;
  }
  .permalink-page .source:not(:has(~ .reblog)),
  .permalink-page .pinned:not(:has(~ .reblog)),
  .permalink-page .source:not(:has(~ .reblog)) a,
  .permalink-page .pinned:not(:has(~ .reblog)) a {
      background-color: white;
      color: #60a080;
  }
  .post-non-info:has(.pinned) ~ .post-info {
      display: none;
  }
  .reblog-header a {
      padding: 8px 11px 8px 0;
  }
  .reblog-header {
      padding-left: 11px;
      display: flex;
      align-items: center;
  }
  .user-uncannyforest.reblog-header::before {
      content: ' ';
      background-image: url({image:Serious Signature});
      background-size: cover;
      display: block;
      width: 24px;
      height: 24px;
  }
  .user-uncannyforest.reblog-header a {
      padding: 8px 11px;
  }
  .reblog.cont {
      width: auto;
  }
  .reblog:not(.user-uncannyforest:last-child).cont-container {
      padding: 0 32px 0;
  }
  .reblog.user-uncannyforest:last-child.cont-container {
      background-color: white;
  }
  .reblog:not(.user-uncannyforest:last-child) .cont {
      border-radius: {text:Border Radius}px;
  }
  .user-uncannyforest:last-child.cont {
      border-radius: 0;
  }

  .post-info {
      padding: 8px 11px;
      margin: 0;
  }
  .permalink {
      float: right;
      text-align: right;
  }
  .post-info::after {
      content: '';
      clear: right;
      display: block;
  }
  `, mobileStyle: `
  
      .post-info {
          margin: 0 0 64px;
      }

  `, html: `

              <div class='post'>
              <div class='post-non-info'>
              {block:ContentSource}
                  <div class="source dark">
                      <a href="{SourceURL}">{lang:Source}: {SourceTitle}</a>
                  </div>
              {/block:ContentSource}
              {block:PinnedPostLabel}
                  <div class="pinned dark">
                      <a href="https://www.tumblr.com/uncannyforest/{PostID}" class="f">
                      *{PinnedPostLabel}*
                      </a>
                  </div>
              {/block:PinnedPostLabel}
              {block:Text}


              {block:RebloggedFrom}
              {block:Reblogs}
                      <div class="reblog-header dark reblog user-{Username}">
                          {block:IsActive}
                          <a target="_blank" class="post-tumblelog-name" href="{Permalink}">{Username}:</a>
                          {/block:IsActive}
                          {block:IsDeactivated}
                          <span class="inactive post-tumblelog-name">{Username}:</span>
                          {/block:IsDeactivated}
                      </div>
                      <div class="cont-container dark reblog user-{Username}">
                          <div class="cont text">
                              {Body}
                          </div>
                      </div>
              {/block:Reblogs}
              {/block:RebloggedFrom}
              {block:NotReblog}
                  <div class="cont text">
                      {block:TagPage}
                          <div class="tag {Tag}">
                              {DayOfMonth} {Month} {Year}
                          </div>
                      {/block:TagPage}
                      {block:Title}
                      <p class="texttitle">
                          <a href="{Permalink}" class="texttitle">{Title}</a>
                      </p>
                      {/block:Title}
                      {Body}
                  </div>

              {/block:NotReblog}
              {/block:Text}

              {block:Photo}
              {block:NotReblog}
                  <div class="cont photo">
                      {block:PermalinkPage}
                      <img src="{PhotoURL-HighRes}" alt="{PhotoAlt}">
                      <!-- trying to load highres
                      {/block:PermalinkPage}
                      <img src="{PhotoURL-500}" alt="{PhotoAlt}">
                      {block:PermalinkPage}
                      -->
                      {/block:PermalinkPage}

                      {block:Caption}
                      {Caption}
                      {/block:Caption}
                  </div>
              {/block:NotReblog}

              {block:RebloggedFrom}
                      <div class="reblog-header dark reblog media user-{ReblogRootName}">
                          <a target="_blank" class="post-tumblelog-name" href="{ReblogRootURL}">{ReblogRootName}:</a>
                      </div>
                      <div class="cont-container dark reblog media user-{ReblogRootName}">
                          <div class="cont photo">
                              {Block:PermalinkPage}
                              <img src="{PhotoURL-HighRes}" alt="{PhotoAlt}">
                              <!-- trying to load highres
                              {/block:PermalinkPage}
                              <img src="{PhotoURL-500}" alt="{PhotoAlt}">
                              {block:PermalinkPage}
                              -->
                              {/block:PermalinkPage}
              {block:Reblogs}
                      {block:isOriginalEntry}
                      <!-- isOriginalEntry
                      {/block:isOriginalEntry}
                          </div>
                      </div>
                      <div class="reblog-header dark reblog user-{Username}">
                          {block:IsActive}
                          <a target="_blank" class="post-tumblelog-name" href="{Permalink}">{Username}:</a>
                          {/block:IsActive}
                          {block:IsDeactivated}
                          <span class="inactive post-tumblelog-name">{Username}:</span>
                          {/block:IsDeactivated}
                      </div>
                      <div class="cont-container dark reblog media user-{ReblogRootName}">
                          <div class="cont photo">
                      {block:isOriginalEntry}
                      -->
                      {/block:isOriginalEntry}
                              {Body}
              {/block:Reblogs}
                          </div>
                      </div>
              {/block:RebloggedFrom}
              {/block:Photo}

                  {block:Photoset}
                      <div class="cont photoset">
                          {Photoset-500}

                          {block:Caption}
                              <div class="caption">{Caption}</div>
                          {/block:Caption}
                      </div>
                  {/block:Photoset}

                  {block:Quote}
                      <div class="cont quote">
                          "{Quote}"

                          {block:Source}
                              <div class="quote-source">{Source}</div>
                          {/block:Source}
                      </div>
                  {/block:Quote}

                  {block:Link}
                      <div class="cont link">
                          <a href="{URL}" class="link" {Target}>{Name}</a>
                          <br /><br />
                          {block:Description}
                              <div class="description">{Description}</div>
                          {/block:Description}
                      </div>
                  {/block:Link}

                  {block:Chat}
                      <div class="cont chat">
                          {block:Title}
                              <h3><a href="{Permalink}">{Title}</a></h3>
                          {/block:Title}

                          <ul class="chat">
                              {block:Lines}
                                  <li class="{Alt} user_{UserNumber}">
                                      {block:Label}
                                          <span class="label">{Label}</span>
                                      {/block:Label}

                                      {Line}
                                  </li>
                              {/block:Lines}
                          </ul>
                      </div>
                  {/block:Chat}

              {block:Video}
              {block:NotReblog}
                  <div class="cont video">
                      {Video-500}

                      {block:Caption}
                      {Caption}
                      {/block:Caption}
                  </div>
              {/block:NotReblog}
              {block:RebloggedFrom}
                      <div class="reblog-header dark reblog media user-{ReblogRootName}">
                          <a target="_blank" class="post-tumblelog-name" href="{ReblogRootURL}">{ReblogRootName}:</a>
                      </div>
                      <div class="cont-container dark reblog media user-{ReblogRootName}">
                          <div class="cont video">
                              {Video-500}
              {block:Reblogs}
                      {block:isOriginalEntry}
                      <!--
                      {/block:isOriginalEntry}
                          </div>
                      </div>
                      <div class="reblog-header dark reblog media user-{ReblogRootName}">
                          {block:IsActive}
                          <a target="_blank" class="post-tumblelog-name" href="{Permalink}">{Username}:</a>
                          {/block:IsActive}
                          {block:IsDeactivated}
                          <span class="inactive post-tumblelog-name">{Username}:</span>
                          {/block:IsDeactivated}
                      </div>
                      <div class="cont-container dark reblog media user-{ReblogRootName}">
                          <div class="cont video">
                      {block:isOriginalEntry}
                      -->
                      {/block:isOriginalEntry}
                              {Body}
              {/block:Reblogs}
                          </div>
                      </div>
              {/block:RebloggedFrom}
              {/block:Video}

                  {block:Audio}
                      <div class="cont audio">
                          {AudioPlayerBlack}

                          {block:Caption}
                              <div class="caption">{Caption}</div>
                          {/block:Caption}
                      </div>
                  {/block:Audio}
                  </div>
                  <div class="post-info dark {block:RebloggedFrom}reblog-post{/block:RebloggedFrom}" id="{PostID}">
                      <div class="permalink">&nbsp;&nbsp;&nbsp;
                      {block:PermalinkPage}
                          {DayOfMonth} {Month} {Year}{/block:Date}<br>
                          (<a href="https://www.tumblr.com/uncannyforest/{PostID}" class="f">open in Tumblr to interact with this post</a>)
                      <!--
                      {/block:PermalinkPage}
                          <a href="{Permalink}{block:TagPage}?tag={Tag}{/block:TagPage}" class="f">{block:NoteCount}{NoteCountWithLabel}{/block:NoteCount}{block:Date}{block:NoteCount}, {/block:NoteCount}{DayOfMonth} {Month} {Year}{/block:Date}</a>
                      {block:PermalinkPage}
                      -->
                      {/block:PermalinkPage}
                      </div>

                      <div class="reblog-and-tags">

                          {block:Reblog}
                               via <a href="{ReblogParentURL}" class="f">{ReblogParentName}</a><br />
                          {/block:Reblog}
                          {block:Tags}<a href="{TagURL}" class="f">{Tag}</a>&nbsp;&nbsp; {/block:Tags}

                      </div>

                  {block:PostNotes}
                      <br><br>
                      <div class="notecontainer">{PostNotes}</div>
                  {/block:PostNotes}
                  </div>
              </div>
  `
}
