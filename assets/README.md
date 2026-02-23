# Assets for Anbessa Elite website

Place your images here to use them on the site:

- **hero.jpg** or **hero.png** – Hero section background (trade show / tactical gear).
- **about.jpg** – About section (optional).
- **products/** – Product category images (e.g. vests, bags, apparel).

In `css/style.css`, you can set a hero background with:

```css
.hero-bg {
  background-image: url('../assets/hero.jpg');
  background-size: cover;
  background-position: center;
}
```

Product cards in `index.html` use placeholders; you can replace the `.product-placeholder` divs with `<img>` tags pointing to files in this folder.
