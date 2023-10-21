import './style.css'

import ufSite from './components/ufSite'
import descBox from './components/descBox'
import post from './components/post'

const fullOutput = `
<!--

        .                                 .o8       oooo
      .o8                                "888       \`888
    .o888oo oooo  oooo  ooo. .oo.  .oo.   888oooo.   888  oooo d8b
      888   \`888  \`888  \`888P"Y88bP"Y88b  d88' \`88b  888  \`888""8P
      888    888   888   888   888   888  888   888  888   888
      888 .  888   888   888   888   888  888   888  888   888    .o.
      "888"  \`V88V"V8P' o888o o888o o888o \`Y8bod8P' o888o d888b   Y8P

-->
<html>
    <head>
        <meta name="color:Background" content="14142c"/>
        <meta name="color:Sidebar" content="#204030"/>
        <meta name="color:Link" content="408060"/>
        <meta name="color:Peripheral Text" content="80c0a0"/>
        <meta name="color:Peripheral Link" content="FFFFFF"/>
        <meta name="color:Peripheral Half" content="#c0e0d0"/>
        <meta name="color:Permalink Page Notes" content="#f6f0ea"/>
        <meta name="text:Border Radius" content="3"/>
${descBox.variables}
        <meta name="image:Serious Signature" />
        <meta name="image:LeftNav" />
        <meta name="image:RightNav" />
        <meta name="image:Crackers" />
        <meta name="text:Crackers alt text" />
        <meta name="if:Title" content="0"/>
        <meta name="if:Boogie" content="1"/>

        <title>{Title}{block:SearchPage}, {lang:Search results for SearchQuery}{/block:SearchPage}{block:PostSummary}, {PostSummary}{/block:PostSummary}</title>
        <link rel="shortcut icon" href="https://uncannyforest.com/favicon.png">
        <link rel="alternate" type="application/rss+xml" href="{RSS}">
        {block:Description}
            <meta name="description" content="{MetaDescription}" />
        {/block:Description}

        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,600;1,300;1,600&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400&display=swap" rel="stylesheet"><link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css">
<svg xmlns="http://www.w3.org/2000/svg" height=0 width=0 style="visibility:hidden;">
    <filter id="selected" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="
        0 0 0 0 .375
        0 0 0 0 .625
        0 0 0 0 .5
        0 0 0 1 0
      "/>
    </filter>
    <filter id="hover" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="
        0 0 0 0 .75
        0 0 0 0 .75
        0 0 0 0 0
        0 0 0 1 0
      "/>
    </filter>
    <filter id="click" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="
        0 0 0 0 1
        0 0 0 0 .5
        0 0 0 0 0
        0 0 0 1 0
      "/>
    </filter>
    <filter id="black" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 0 0
        0 0 0 1 0
      "/>
    </filter>
    <filter id="hover-dark" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="
        0 0 0 0 1
        0 0 0 0 1
        0 0 0 0 .75
        0 0 0 1 0
      "/>
    </filter>
    <filter id="click-dark" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="
        0 0 0 0 1
        0 0 0 0 .75
        0 0 0 0 .5
        0 0 0 1 0
      "/>
    </filter>
</svg>
        <style type="text/css">
.tmblr-iframe--follow-teaser {
    visibility: hidden;
}

@font-face {
  font-family: "Anticursive";
  src: url("https://uncannyforest.com/anticursive.woff") format("woff"), url("https://uncannyforest.com/anticursive.otf") format("opentype");
}

body {
    margin: 0px 0px 0px 0px;
    border: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    border-spacing: 0;
    color: {color:Peripheral Text};
    background-color: {color:Background};
    font-family: 'Crimson Pro';
    font-size: 17px;
    letter-spacing: 0.3pt;
    line-height: 1.4;
    text-align: center;
}

.toggle {
    cursor: pointer;
}

.dark {
    background-color: {color:Sidebar};
}
.dark a, .dark .toggle {
    color: #fff;
}
.dark a:hover, .dark .toggle:hover {
    color: #ffffc0;
}
.dark a:focus, .dark .toggle:active, .dark .toggle:focus {
    color: #ffc080;
}

a, .cont a {
    color: #60a080;
    text-decoration: none;
}
a:hover, .cont a:hover {
    color: #c0c000;
}
a:focus, .cont a:focus {
    color: #ff8000;
}

#main img {
    border-radius: {text:Border Radius}px;
}

#main {
    margin: 0 auto;
    text-align: left;
}

@media (min-device-width: 937px) and  (min-width: 937px) {
    #main {
        width: 937px;
    }
    body:not(.permalink-page) #main {
        display: grid;
        grid-template-columns: 562px 343px;
        column-gap: 32px;
        row-gap: 0px;
    }

${descBox.desktopStyle}

    body:not(.permalink-page) #main {
        margin-top: 32px;
    }
    .permalink-page #main {
        font-size: 20px;
    }
    body:not(.permalink-page) .post {
        border-radius: {text:Border Radius}px;
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

    body:not(.permalink-page) nav {
        /*border-radius: 0 0 {text:Border Radius}px {text:Border Radius}px;*/
    }
}

#title {
    grid-column: 1 / span 2;
    grid-row: 1;
    margin: 0 auto 32px;
}

#posts {
    grid-column: 1;
    grid-row: 2;
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
}
.permalink-page .forest-boundary.bottom a {
    color: #000;
}

${post.style}
${descBox.style}

#footer {
    text-align: right;
    padding: 32px;
    background-color: #ffffff;
}
#footer a {
    color: #000000;
}

p:first-child {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    }
p:last-child {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
}

input {
    background: none;
    color: {color:Peripheral Half};
    border: 1px solid {color:Peripheral Text};
}

#crackers-box {
    width: 49px;
    height: 33px;
    border: 1px solid {color:Peripheral Text};
    border-radius: 3px;
    box-sizing: border-box;
}
img.crackers {
    height: .8em;
    width: 32px;
    overflow: visible;
    object-fit: cover;
    object-position: 50% 0%;
}
.Base.Converter {
    display: none;
}

@media (min-device-width: 937px) and  (min-width: 937px) {
    nav {
        width: 937px;
    }
}
nav {
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}
nav ul {
    margin-block: 0;
    padding-inline-start: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}
.map {
    flex-grow: 1;
}
.subheader-container {
    flex-grow: 1;
    display: none;
    justify-content: space-around;
    background-color: {color:Sidebar};
}
.subheader {
    margin: 0 auto;
}
.subheader a {
    color: #fff;
    padding: .8em .8em .5em;
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
.compass.pl-compass {
    display: none;
    width: 937px;
    margin: 0 auto;
    background-color: #fff;
    grid-template-columns: repeat(6, 1fr);
}
.item.double {
    grid-column-end: span 2;
}
.tag-title {
    font-size: 36px;
    color: {color:Background};
    align-self: center;
}

@media (max-device-width: 937px) or (max-width: 936px) {
    body {
        font-size: 4vw;
        text-size-adjust: none;
    }

    nav {
        font-size: 2.7vw;
        justify-content: space-between;
    }
    nav a {
        padding: .5em .5em .3em;
    }

${descBox.mobileStyle}

    #main {
        margin: 0;
    }

${post.mobileStyle}

}

#title {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
}

figure.tmblr-full {
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
}
figure.tmblr-full img {
/* Restrict images to the width of their container, and 25ex tall */
    width: 100%;


    height: auto;
}
.cont .tmblr-full>video {
    height: auto;
}

.tag.major.updates {
    font-size: 30px;
    font-weight: bold;
}

.tag {
    display: none;
}
.tag.major.updates {
    display: unset;
}

${ufSite.style}
        </style>
            <!-- background-color letter-spacing word-spacing
                margin-left:auto;
                margin-right:auto
            -->
        <style type="text/css">{CustomCSS}</style>

<script language="JavaScript">
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


// OTHER

${descBox.js}

function latestBlogUpdateParse(xmlStr) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlStr, "application/xml");
    const date = doc.querySelector('pubDate').textContent;
    const moYr = /[A-Za-z]+ [0-9][0-9][0-9][0-9]/g.exec(date)[0];
    const resultStr = " (" + moYr + ")";
    document.getElementById('major-date').appendChild( document.createTextNode(resultStr));
}

function latestBlogUpdate() {
    fetch("https://blog.uncannyforest.com/tagged/major+updates/rss")
      .then(function(response) {
        response.text().then(latestBlogUpdateParse);
      });
}

</script>
    </head>
    <body {Block:PermalinkPage}class="permalink-page"{/Block:PermalinkPage}{block:LikesPage}class="likes-page"{/block:LikesPage}{block:NoLikes}class="no-likes"{/block:NoLikes}>


<div class="forest-boundary">
    <nav class="header">
${ufSite.header}
        <div class="subheader-container">
            <ul class="subheader">
                {block:Pages}
                    <a href="{URL}" class="{Label}"><li>{Label}</li></a>
                {/block:Pages}
                    <a href="https://blog.uncannyforest.com/tagged/my%20parakeet%20Crackers" class="crackers"><li><img src="{image:Crackers}" class='crackers' title="{text:Crackers alt text}"></li></a>
            </ul>
            <ul class="subheader">
                <!--<a href="/random" class="t"><li>{lang:Random}</li></a>-->
                <a href="/archive" class="t"><li>Archive</li></a>
               <!-- {block:Likes}
                     <a href="/likes" class="t"><li>{lang:Likes}</li></a>
                {/block:Likes}
                <a href="https://tumblr.com/followed/by/uncannyforest" class="t"><li>Following</li></a>-->
            </ul>
                        <ul class="subheader">
                <a href="https://attentiontothesky.com" class="t serious"><li>Attention<br>to the Sky</li></a>
            </ul>
        </div>
    </nav>
</div>
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

    <div id="main">
        {Block:IfTitle}
            <div id="title"><a href="/" class="title">{Title}</a>{Block:IfBoogie} boogieboogie{/Block:IfBoogie}</div>

        {/Block:IfTitle}

${descBox.html}

        <div id="posts">
        {block:Posts}

${post.html}

            {/block:Posts}

            {block:SearchPage}
                {block:SearchResults}
                Is this your {SearchQuery}?
                <br /><br />
                Please also try <a href="/tagged/{URLSafeSearchQuery}">tags</a> or <a href="https://www.google.com/search?q=site%3Auncannyforest.tumblr.com%2F+{URLSafeSearchQuery}">Google</a>.
                <br /><br />
                {/block:SearchResults}

                {block:NoSearchResults}
                Oops, I lost the {SearchQuery}
                <br /><br />
                Please also try <a href="https://www.google.com/search?q=site%3Auncannyforest.tumblr.com%2F+{URLSafeSearchQuery}">Google</a>.
                {/block:NoSearchResults}
            {/block:SearchPage}


        </div>
    </div>
<div class="forest-boundary bottom">

<div class="compass pl-compass">
    <div class="item"><a class="oldest">
        <img src="https://uncannyforest.com/images/nav-first-2x.png" class="comic-nav">
    </a></div>
    <div class="item"><a class="older">
        <img src="https://uncannyforest.com/images/nav-prev-2x.png" class="comic-nav">
    </a></div>
    <div class="item double"></div>
    <div class="item"><a class="newer">
        <img src="https://uncannyforest.com/images/nav-next-2x.png" class="comic-nav">
    </a></div>
    <div class="item"><a class="newest">
        <img src="https://uncannyforest.com/images/nav-last-2x.png" class="comic-nav">
    </a></div>
</div>
<div class="compass blog-compass">
  <div class="item">

                {block:PreviousPage}
                    <a href="{PreviousPage}">

        <img class="comic-nav" src="{image:LeftNav}">Previous</a>
                {/block:PreviousPage}
      </div>
  <div class="item">
                {block:NextPage}
                    <a href="{NextPage}">
                    Next
                    <img class="comic-nav" src="{image:RightNav}"></a>
                {/block:NextPage}
  </div>
  <div class="item"></div>
</div>
${ufSite.footer}
</div>
<script>
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
</script>
    </body>
</html>
`

document.querySelector('#root').value = fullOutput;
