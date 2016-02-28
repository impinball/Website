## My homegrown build/development system

This is a combination of two things, with their associated modules:

1. An experiment with a truly concurrent build system in pure JavaScript.
2. A fairly simple dev server.

Everything here is written using much of what
[ES6 has to offer](https://kangax.github.io/compat-table/es6/) (that's
[implemented in Node 4](https://nodejs.org/en/docs/es6/)).

Everything here except for the server is callable at some point by the build
system. It was also not made to be particularly general-purpose, although it is
scalable to a degree (it conceptually shares genes with
[ShellJS's make tool](http://documentup.com/shelljs/shelljs#make-tool)). Here's
a quick description of several of the more important files:

- make.js

  The entry script for the build system. This is loaded directly from make.js
  in the root.

- server.js

  The entry script for the server. Likewise, this is loaded directly from
  server.js in the root.

- exec-limit.js

  Because I don't want to kill a computer, I want to limit how many threads are
  running at a time. This is a simple first-come, first-serve job scheduler for
  spawning processes.

- run.js

  This is the async, promise-based task runner I created for the build system.
  It's relatively simple, but I aimed for clarity, not micro-optimizations.

- promise.js

  This is a basic promise wrapper utility for Node-style callbacks to be
  converted into ES6 promises.

- jade-locals.js

  This holds the Jade locals available within the Jade files in src/

- generate-blog-posts.js, compile-markdown-preview.js

  These generate and compile all the blog posts, written in Markdown. The latter
  of the two was a bit more complicated, since I had to implement my own parser
  on top of their lexers because I wanted to cap the length (not to parse and
  generate thousands of characters just to take less than 200) and I wanted to
  strip most of the non-textual stuff out (HTML tags, newlines, other markup,
  etc.).

  The other is a slightly optimized (to avoid race conditions) directory
  iterator that caches its compilation results for the server instead of making
  most of its API awkwardly open.

  These combined are more or less a back-end, with the server and
  compile-blog-posts.js calling it as front-ends.

  This could be easily refactored to allow posts in folders and copy other
  non-markdown files, without requiring any changes to the site itself.

- walk.js

  A simple directory walker like `ls -R` on Unix-like operating systems or
  `dir /S` on Windows that also supports ignoring files *and* directories via a
  function argument. This is how \*.mixin.\* and \*.ignore.\* are implemented in
  the build system. It's not very optimized, but it's not a bottleneck.