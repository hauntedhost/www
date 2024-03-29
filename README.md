# www

## Features:

- [Development server](https://www.browsersync.io)
- [Nunjucks](https://mozilla.github.io/nunjucks) templates
- Markdown to HTML
  - [Front Matter](https://jekyllrb.com/docs/front-matter)
    - Title
    - Layout
  - [Code syntax highlighting](https://prismjs.com)
  - [Footnotes](https://www.markdownguide.org/extended-syntax/#footnotes)
  - [Custom sidenotes](src/js/sidenotes.js)
  - [Bracketed spans](https://pandoc.org/MANUAL.html#extension-bracketed_spans)
  - [Attributes](https://www.npmjs.com/package/markdown-it-attrs)
- ES2015 bundling
  - [Module resolution](https://webpack.js.org)
  - [Compilation](https://babeljs.io)
  - Dev sourcemaps
  - Optimized production builds
- [Sass compilation](https://github.com/postcss/postcss)
  - [Autoprefixer](https://github.com/postcss/autoprefixer)
  - [Minification](https://github.com/leodido/postcss-clean)
- [Image optimization](https://github.com/imagemin/imagemin)
- Fingerprinted assets with `manifest.json`
- [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)
- Linting
  - [HTMLHint](https://htmlhint.io)
  - [ESLint](https://eslint.org)
  - [stylelint](https://github.com/stylelint/stylelint)
- [Deployment](https://rsync.samba.org)

## TODO:
- [x] add js sourcemaps
- [x] copy original markdown to `dist` as `<page>.md`
- [x] optimize images
- [x] add gulp-plumber
- [x] css lint
- [x] js lint
- [x] html lint
- [x] replace cssnano with clean-css?
- [x] add subresource integrity hashes to asset data
- ~~nunjucks filter to splat object into k="v" attrs~~
- [x] fix notifier, colors not parsing in notifications area
- [x] compile es6 javascript with import/exports
- [x] eslint for webpack
- [x] production build for webpack
- [x] deploy task
- [x] replace deprecated gulp-util
- [x] test drive prepack build size
- [x] highlight nav of currently active page
- [x] add an id to the body of layout with name of page
- [x] finish porting existing pages
- [x] change favicon to a ghost
- [x] launch v1
- [x] fix mobile-view bunching
- [x] favicon generation?
- [x] add first draft of about me page
- [x] fix :not(pre) > code font-size on mobile
- [x] add meta description
- [ ] add og meta tags
    ```
    <meta property="og:type" content="profile">
    <meta property="og:image" content="...">
    <meta property="og:title" content="{{ file.data.title }} | Elixir and JavaScript Web Developer">
    <meta property="og:description" content="Hello, my name is Jules. I'm a senior Elixir and JavaScript web developer.">
    <meta property="og:url" content="...">
    ```
- [ ] use favicon.svg - need vector editor to fill ghost
- [ ] fix sri through cloudflare :/
- [ ] pdf generation
- [ ] download latest fira code fonts to src/fonts instead of cdn
- [ ] deploy with an nginx conf / restart
- [ ] consider indieweb: https://indiewebify.me
- [ ] add article json-ld
      figure out how to nest json-ld, e.g. creator of article is entire person.json
      https://www.fabian-keller.de/blog/adding-json-ld-to-a-personal-website
- [ ] include `parent`, `children`, `siblings` in `file.data`, e.g. for breadcrumps and lists
- [ ] cleanup `dist` files not in `src`, e.g. from renames or deletes
- [ ] something to "like" or heart posts
