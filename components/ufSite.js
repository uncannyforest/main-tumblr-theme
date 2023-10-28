export default {
  style: `
  body {
      margin-top: 12px;
      margin-bottom: 12px;
  }

  .forest-boundary {
    margin-left: auto;
    margin-right: auto;
  }

  .plains {
    padding: 60px 0 0 0;
    margin-left: auto;
    margin-right: auto;
  }

  .typed {
    padding: 0px;
  }

  .hf {
    width: 937px;
    display: block;
  }

  .subheader a.selected {
    color: #60a080;
    text-decoration: none;
  }
  a:hover, .subheader a:hover, .subheader a.selected:hover {
    color: #c0c000;
  }
  a:focus, .subheader a:focus, .subheader a.selected:active {
    color: #ff8000;
  }

  nav a.selected img {
    filter: url(#selected);
  }
  nav a:not([href^='#']):hover img {
    filter: url(#hover);
  }
  nav a:not([href^='#']):active img {
    filter: url(#click);
  }
  body:not(.permalink-page) .subheader-container a:not([href^='#']):hover {
    filter: url(#hover-dark);
  }
  body:not(.permalink-page) .subheader-container a:not([href^='#']):active {
    filter: url(#click-dark);
  }
  .permalink-page .subheader-container img {
    filter: url(#black);
  }

  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  .map img {
    height: 30px;
  }
  .subheader a {
    font-family: 'Anticursive';
    font-size: 24px;
    color: #fff;
    margin: 0;
    padding: .8em .8em .5em;
  }
  .subheader a.selected {
    color: #60a080;
  }
  .subheader a.serious {
      padding-top: 0.6em;
      padding-bottom: 0.7em;
  }
  .serious li {
      font-size: .7em;
      font-family: Cormorant;
      line-height: 1;
  }

  .forest-boundary.top {
      padding-bottom: 16px;
  }

  .forest-boundary.bottom {
      padding-top: 32px;
      background: {color:Sidebar};
  }

  .compass {
    display: grid;
    word-spacing: 1.4sem;
    padding: 0 0.7em;
    font-weight: bold;
    padding: 0;
  }
  .blog-compass {
      grid-template-columns: repeat(2, 1fr);
  }
  .compass a {
      color: #ffffff;
  }

  @media (max-device-width: 599px),(max-width: 599px) and (orientation: portrait) {
    .forest-boundary, .plains {
      box-sizing: border-box;
    }
    .forest-boundary, .plains {
      width: 100%;
    }
  }

  @media (min-device-width: 600px) and (min-width: 600px) {
    .forest-boundary, .plains {
      box-sizing: border-box;
    }
    .forest-boundary, .plains {
      max-width: 937px;
    }
  }

  /* line 18, /home/rails/uf/app/assets/stylesheets/comics.scss */
  .item {
    text-align: center;
  }

  /* line 22, /home/rails/uf/app/assets/stylesheets/comics.scss */
  img.comic-nav {
    height: 90px;
    vertical-align: middle;
  }
`, header: `
<img src="https://uncannyforest.com/images/canopy-v2-2x.png" class="hf">
<ul class="map">
    <li><a href="https://uncannyforest.com/welcome_home">
        <img src="https://uncannyforest.com/images/page-comics-2x.png">
    </a></li>
    <li><a href="https://uncannyforest.com/blog/tag/trees with faces/latest" class="trees">
        <img src="https://uncannyforest.com/images/page-trees-2x.png">
    </a></li>
    <li><a href="https://uncannyforest.com/blog/tag/local mysteries/latest" class="lm">
        <img src="https://uncannyforest.com/images/page-localmysteries-2x.png">
    </a></li>
    <li><a href="/" class="blog">
        <img src="https://uncannyforest.com/images/page-blog-2x.png">
    </a></li>
    <li><a class="" href="https://uncannyforest.com/about">
        <img src="https://uncannyforest.com/images/page-about-2x.png">
    </a></li>
</ul>
`, footer: `
<div class="footer">
    <img class="hf" src="https://uncannyforest.com/images/forest-floor-color-2x.png">
</div>
`
}
