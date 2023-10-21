import post from './post'

export default {
  style: `
  .widget {
      margin-top: 32px;
      margin-bottom: 118px; /* 86 + 32 */
      display: flex;
  }
  .like-wrapper {
    width: 343px;
  }
  .like-header, .like-footer {
      padding: 0 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 0;
  }
  .like-header p {
     flex-grow: 1;
     text-align: center;
     line-height: normal;
     margin: 0;
  }
  .like-header img, .like-footer img {
      height: 30px;
  }
  .like-header::after {
      content: " ";
      clear: both;
      display: block;
  }
  label.nav:hover {
    cursor: pointer;
  }
  .like-container:first-child .left+label,
  .like-container:last-child .right+label {
    visibility: hidden;
  }
  input.nav {
    display: none;
  }
  .widget .post {
      margin-bottom: 0;
  }
  .like-content, .like-wrapper > .reblog-header {
      /*font-size: .8em;*/
  }
  .widget .cont {
      padding: 16px;
  }
  .widget .post > .cont {
      margin: 0 32px 0;
      border-radius: {text:Border Radius}px;
  }
  .widget .source, .widget .reblog-header, .widget .post-info {
      padding: 8px 32px;
  }
  .widget .reblog-and-tags {
      display: none;
  }
  .like-container {
      width: 0;
      height: 0;
      overflow: hidden;
      animation-duration: .25s;
      animation-name: navfrom;
      animation-timing-function: linear;
  }
  .widget:has(.left:checked) .like-wrapper {
      float: right;
  }
  .widget .like-wrapper:has(.left:checked)  {
      float: none;
  }
  .like-wrapper:has(.right:checked)  {
      float: right;
  }

  .like-container:has(+ div .left:checked),
  .like-container:has(.right:checked) + div,
  .widget:not(:has(:checked))>:first-child {
      width: 343px;
      height: auto;
      animation-name: navto;
  }

  @keyframes navto {
      from {
          width: 0px;
          height: auto;
      }
      to {
          width: 343px;
          height: auto;
      }
  }
  @keyframes navfrom {
      from {
          width: 343px;
          height: auto;
      }
      to {
          width: 0px;
          height: auto;
      }
  }
`, html: `
  {block:IfRecentlyLiked}
  {block:HasLikedPosts}
  <div class="widget likes-widget">
      {block:LikedPosts limit="10" width="200"  summarize="100"}
      <div class="like-container">
          <div class="like-wrapper">
              <div class="like-header">
                  <input id="left-{PostID}" type="radio" name="likes" class="nav left" />
                  <label for="left-{PostID}" class="nav"><img src="{image:LeftNav}">︎</label>
                  <p>{lang:Recently Liked}</p>
                  <input id="right-{PostID}" type="radio" name="likes"  class="nav right" />
                  <label for="right-{PostID}" class="nav"><img src="{image:RightNav}">︎</label>
              </div>
              {block:NotReblog}
              <div class="reblog-header dark">
                  <a target="_blank" class="post-tumblelog-name" href="{Permalink}">{PostBlogName}:</a>
              </div>
              {/block:NotReblog}
              <div class="like-content">
  ${post.html.replace(/\s+/g," ")}

                  </div>
                  <div class="like-footer">
                      <input id="leftf-{PostID}" type="radio" name="likes" class="nav left" />
                      <label for="leftf-{PostID}" class="nav"><img src="{image:LeftNav}">︎</label>
                      <input id="rightf-{PostID}" type="radio" name="likes"  class="nav right" />
                      <label for="rightf-{PostID}" class="nav"><img src="{image:RightNav}">︎</label>
                  </div>
              </div>
          </div>
          {/block:LikedPosts}

      </div>
  {/block:HasLikedPosts}
  {/block:IfRecentlyLiked}
  `
}
