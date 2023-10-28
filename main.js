import './style.css'

import ufSite from './components/ufSite'
import descBox from './components/descBox'
import permalinkPage from './components/permalinkPage'
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
    <filter id="background" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="
        0 0 0 0 0.078125
        0 0 0 0 0.078125
        0 0 0 0 0.171875
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

nav {
  overflow: hidden;
}

nav ul.map {
  padding-top: 15px;
  padding-bottom: 15px;
}

@media (min-device-width: 937px) and  (min-width: 937px) {
    #main {
        width: 937px;
    }
    body:not(.permalink-page) #main {
        display: table;
    }

${descBox.desktopStyle}
${permalinkPage.desktopStyle}

    body:not(.permalink-page) #main {
        margin-top: 32px;
    }
    body:not(.permalink-page) .post {
        border-radius: {text:Border Radius}px;
    }
    body:not(.permalink-page) nav {
        border-radius: 0 0 {text:Border Radius}px {text:Border Radius}px;
    }
}

#title {
    grid-column: 1 / span 2;
    grid-row: 1;
    margin: 0 auto 32px;
}

#posts {
    width: 562px;
    float: left;
}

${permalinkPage.style}
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
nav>img, nav>.map {
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
.subheader-container:has(.tag-list) {
    overflow: hidden;
    transition: height .5s;
    height: 0;
    display: flex;
}
.subheader-container:has(.tag-list-toggle:hover)+*,  .subheader-container:has(.tag-list:hover) {
    height: 36px;
}
.subheader.tag-list a {
    display: inline-block;
    font-size: 16px;
    padding: 0 0.6em 0.6em;
}

.forest-boundary.bottom {
    clear: left;
    float: left;
    width: 562px;
    border-radius: {text:Border Radius}px;
}

.footer .hf {
    position: absolute;
    bottom: 0;
    left: 0;
    filter: url(#background);
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
    #posts {
        width: 100%
    }

${post.mobileStyle}

    .forest-boundary.bottom {
        width: 100%;
    }

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

${ufSite.style}
        </style>
        <style type="text/css">{CustomCSS}</style>

<script language="JavaScript">

${descBox.js}

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
                    <a class="tag-list-toggle"><li>More Tags</li></a>
                <!--
                {block:Likes}
                     <a href="/likes" class="t"><li>{lang:Likes}</li></a>
                {/block:Likes}
                <a href="https://tumblr.com/followed/by/uncannyforest" class="t"><li>Following</li></a>-->
            </ul>
                        <ul class="subheader">
                <a href="https://attentiontothesky.com" class="t serious"><li>Attention<br>to the Sky</li></a>
            </ul>
        </div>
        <div class="subheader-container">
            <ul class="subheader tag-list">
                {text:Tag List}
            </ul>
        </div>
    </nav>
</div>

${permalinkPage.compassHtml}

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
    <div class="forest-boundary bottom">

    ${permalinkPage.compassHtml}

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
</div>
<script>
${permalinkPage.js}
</script>
    </body>
</html>
`

document.querySelector('#root').value = fullOutput;
