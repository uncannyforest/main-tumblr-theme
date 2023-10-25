export default {
  style: `
  .permalink-page #posts {
      width: 100%
  }
  .permalink-page .post {
      background-color: #fff;
      margin-bottom: 0;
  }
  .permalink-page .post-info.reblog-post, .permalink-page .source, .permalink-page .pinned, .permalink-page .reblog-header {
      padding: 32px;
  }
  .permalink-page .post-info:not(.reblog-post) {
      margin: 32px;
      border-radius: {text:Border Radius}px;
      background-color: {color:Permalink Page Notes};
      color: #000;
  }
  .permalink-page .post-info:not(.reblog-post) a {
      color: {color:Link};
  }

  .permalink-page .forest-boundary.bottom {
      background-color: #fff;
      padding-top: 0;
          width: 100%;
  }
  .permalink-page .forest-boundary.bottom a {
      color: #000;
  }

  .permalink-page .subheader-container {
      background-color: #fff;
  }
  .permalink-page nav a {
      color: #000;
  }
  .compass {
      font-family: 'Anticursive';
  }
  .item.double {
      grid-column-end: span 2;
  }
  .tag-title {
      font-size: 36px;
      color: {color:Background};
      align-self: center;
  }

  .compass.pl-compass {
      display: none;
      width: 937px;
      margin: 0 auto;
      background-color: #fff;
      grid-template-columns: repeat(6, 1fr);
  }

`, desktopStyle: `

.permalink-page #main {
    font-size: 20px;
}
.permalink-page .post>.cont { /* not reblog */
    padding-top: 77px; /* (937-500)/4 - 32 */
    padding-bottom: 77px;
}
.permalink-page .cont {
    width: fit-content;
}
.permalink-page #posts>.post>.cont p {
    width: fit-content;
    max-width: 719px; /* avg 937, 500 */
    margin-right: auto;
}
.permalink-page .npf_row, .permalink-page figure.tmblr-full {
    width: fit-content;
    margin: 0 auto;
}
.permalink-page .cont img {
    max-height: 719px;
    width: auto;
}

`, js: `
function i(obj) {
    return obj;
}

async function nav(tag, post) {
    const response = await fetch(\`https://uncannyforest.com/api/blog/tag/\${i(tag)}/post/\${i(post)}/nav\`)
    const data = await response.json();

    document.querySelector('.tag-title').innerText = tag;
    const compasses = document.getElementsByClassName('pl-compass')
    for (let compass of compasses) {
        compass.style.display = 'grid';
        if (data.older) {
            compass.querySelector('.older').setAttribute('href', data.older.url);
            compass.querySelector('.oldest').setAttribute('href', data.oldest.url);
        } else {
            compass.querySelector('.older').style.visibility = 'hidden';
            compass.querySelector('.oldest').style.visibility = 'hidden';
        }
        if (data.newer) {
            compass.querySelector('.newer').setAttribute('href', data.newer.url);
            compass.querySelector('.newest').setAttribute('href', data.newest.url);
        } else {
            compass.querySelector('.newer').style.visibility = 'hidden';
            compass.querySelector('.newest').style.visibility = 'hidden';
        }
    }
}

let params = new URLSearchParams(window.location.search);
if (params.has('tag')) {
    nav(params.get('tag'), '{PostID}')

    if (params.get('tag') === 'local mysteries') {
        document.querySelector('a.lm').classList.add('selected')
    } else if (params.get('tag') === 'trees with faces') {
        document.querySelector('a.trees').classList.add('selected')
    } else {
        document.querySelector('a.blog').classList.add('selected')
        document.querySelector('.subheader-container').style.display = 'flex';
    }
} else {
    document.querySelector('a.blog').classList.add('selected')
    document.querySelector('.subheader-container').style.display = 'flex';

}
`, compassHtml: `
<div class="compass pl-compass">
    <div class="item"><a class="oldest">
        <img src="https://uncannyforest.com/images/nav-first-2x.png" class="comic-nav">
    </a></div>
    <div class="item"><a class="older">
        <img src="https://uncannyforest.com/images/nav-prev-2x.png" class="comic-nav">
    </a></div>
    <div class="item double tag-title"></div>
    <div class="item"><a class="newer">
        <img src="https://uncannyforest.com/images/nav-next-2x.png" class="comic-nav">
    </a></div>
    <div class="item"><a class="newest">
        <img src="https://uncannyforest.com/images/nav-last-2x.png" class="comic-nav">
    </a></div>
</div>
`
}
