# Tailwind Grid

> Basic CSS Grid-system for Tailwind-based architecture

[![npm version](https://badge.fury.io/js/tailwind-grid.svg)](https://npmjs.org/package/tailwind-grid "View this project on npm")
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/VeronQ/tailwind-grid/blob/master/LICENSE)

A basic CSS Grid-system built with Tailwind directives and Sass rules.
 
## Installation

```sh
$ npm install --saved-dev tailwind-grid
```

## Usage

```scss
@import '~tailwind-grid/lib/main';
```

```html
<div class="row">
  <div class="col-12 sm:col-6">
    
  </div>
  <div class="col-12 sm:col-6">
    
  </div>
</div>
```

## Core file

> Located in lib/main.scss

```scss
.row {
  min-width: 100%;
  display: flex;
  flex-flow: row wrap;
  @apply -mx-4;

  @responsive {
    &--collapse {
      @apply mx-0;
    }
  }
}

[class*="col-"] {
  width: 100%;
  min-height: 1px;
  @apply px-4;

  @responsive {
    .row.row--collapse > & {
      @apply px-0;
    }
  }
}

@responsive {
  @for $i from 1 through 12 {
    .col-#{$i} {
      flex: 0 0 percentage($i / 12);
      max-width: percentage($i / 12);
    }
  }
}
```

## License

[MIT](https://github.com/VeronQ/tailwind-grid/blob/master/LICENSE)
