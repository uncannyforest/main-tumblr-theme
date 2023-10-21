import './style.css'

import mainsite from './components/mainsite'
import mailchimp from './components/mailchimp'
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
        <!-- DEFAULT VARIABLES -->
        <meta name="color:Background" content="14142c"/>
        <meta name="color:Sidebar" content="#204030"/>
        <meta name="color:Link" content="408060"/>
        <meta name="color:Peripheral Text" content="80c0a0"/>
        <meta name="color:Peripheral Link" content="FFFFFF"/>
        <meta name="color:Peripheral Half" content="#c0e0d0"/>
        <meta name="color:Permalink Page Notes" content="#f6f0ea"/>
        <meta name="text:Border Radius" content="3"/>
        <meta name="image:Slug" />
        <meta name="image:Hearts" />
        <meta name="image:Signature" />
        <meta name="image:Signature Bright" />
        <meta name="image:Serious Signature" />
        <meta name="image:LeftNav" />
        <meta name="image:RightNav" />
        <meta name="image:Crackers" />
        <meta name="text:Crackers alt text" />
        <meta name="if:Title" content="0"/>
        <meta name="if:Boogie" content="1"/>
        <meta name="if:RecentlyLiked" content="0"/>
        <meta name="text:Search Box Content" content="Guess what this does"/>
        <meta name="text:Short Description" content=""/>
        <meta name="text:Extra Description" content=""/>
        <meta name="text:Tag List" content=""/>
        <meta name="text:Final Message" content=""/>
        <meta name="text:Secret Message" content=""/>

        <title>{Title}{block:SearchPage}, {lang:Search results for SearchQuery}{/block:SearchPage}{block:PostSummary}, {PostSummary}{/block:PostSummary}</title>
        <link rel="shortcut icon" href="https://uncannyforest.com/favicon.png">
        <link rel="alternate" type="application/rss+xml" href="{RSS}">
        {block:Description}
            <meta name="description" content="{MetaDescription}" />
        {/block:Description}

        <!--
        <link href='https://fonts.googleapis.com/css?family=Arvo:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Quattrocento' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Quando' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=IM+Fell+English:400,400italic' rel='stylesheet' type='text/css'>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet">
        -->
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
#footer {
    text-align: right;
    padding: 32px;
    background-color: #ffffff;
}
#footer a {
    color: #000000;
}
.permalink-page #desc-box, .permalink-page .secret-message {
    display: none;
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
.caption {
    margin-top: 32px;
}
.title {
}
.texttitle {
    color: inherit;
    font-weight: bold;
}
.t, .title {
    color: #FFFFFF;
}
.f {
    color: {color:Peripheral Text};
}
a.link {
    font-weight: bold;
}

input {
    background: none;
    color: {color:Peripheral Half};
    border: 1px solid {color:Peripheral Text};
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

    .inner>:not(:first-child), .inner:not(.sidebar-links-container), .secret-message, .extra-description, .tag-list, .widget, #signup, .sidebar-search {
        display: none;
    }

    #desc-box {
        display: flex;
        gap: 32px;
        margin: 32px;
        padding: 0 16px;
    }

    #main {
        margin: 0;
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

${post.mobileStyle}

    .cont figure a, .cont img {
        width: 100%;
    }
}

#title {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
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

${mainsite.style}
${mailchimp.style}
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

function clickSearch() {
    if (document.getElementById('searchForm').q.value=='{text:Search Box Content}') document.getElementById('searchForm').q.value = '';
}

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
${mainsite.header}
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
${mainsite.footer}
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
