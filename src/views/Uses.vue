<template>
  <div>
    <section class="hero is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-2 has-text-light">Uses</h1>
          <h2 class="subtitle is-4 has-text-light">
            List of things I use for development on a day to day basis
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium">
                Editor + Terminal
              </h3>
              <ul>
                <li>
                  I use
                  <a href="https://code.visualstudio.com/">VSCode</a>
                  with a custom theme I created called
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=TruBoo.truboo"
                    >TruBoo.</a
                  >
                  You can find all the extensions I use
                  <a href="https://howivscode.com/ajtruex">here.</a>
                </li>
                <li><a href="https://iterm2.com/">iTerm2</a> v3</li>
                <li>
                  <a href="https://brew.sh/">Homebrew</a>
                </li>
                <li>
                  <a href="https://ohmyz.sh/">Oh My Zsh</a> as my terminal app
                </li>
                <li>Google Chrome</li>
              </ul>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium">Desktop Apps</h3>
              <ul>
                <li>
                  <a href="https://www.alfredapp.com/">Alfred</a>
                </li>
                <li>
                  <a href="https://www.ergonis.com/products/typinator/"
                    >Typinator</a
                  >
                </li>
                <li>
                  <a href="https://magnet.crowdcafe.com/">Magnet</a>
                </li>
                <li>
                  <a href="https://fiplab.com/apps/copyclip-for-mac"
                    >CopyClip 2</a
                  >
                </li>
                <li>
                  <a href="https://www.macbartender.com/">Bartender 3</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium">Hardware</h3>
              <ul>
                <li>
                  Monitor:
                  <a
                    href="https://www.amazon.com/gp/product/B015WCV70W/ref=ppx_od_dt_b_asin_title_s00?ie=UTF8&psc=1"
                    >HP Pavilion 22cw 21.5-inch IPS LED Backlit Monitor</a
                  >
                </li>
                <li>
                  Laptop: MacBook Pro Retina, 13-inch, Early 2015 2.7 GHz
                  Dual-Core Intel Core i5
                </li>
                <li>
                  Mouse + Keyboard:
                  <a
                    href="https://www.logitech.com/en-us/product/mk850-wireless-keyboard-mouse-combo?crid=1759#specification-tabular"
                    >Logitech MK850 Performance Wireless Keyboard and Mouse
                    Combo</a
                  >(includes M720 Triathlon Multi-Device Mouse and K850
                  Performance Wireless Keyboard)
                </li>
                <li>External Hard Drive: WD My Passport Ultra 1TB</li>
                <li>iPhone 11 Pro Max</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style type="text/css" scoped>
.box {
  height: 100%;
}
.tech-box-title {
  margin-top: 1.5rem;
}
.hero {
  background-color: #1a2b33;
}
ul {
  margin: 0.75em 0;
  padding: 0 1em;
  list-style: none;
}
li:before {
  content: "";
  border-color: transparent #111;
  border-style: solid;
  border-width: 0.35em 0 0.35em 0.45em;
  display: block;
  height: 0;
  width: 0;
  left: -1em;
  top: 0.9em;
  position: relative;
}
</style>

<script>
export default {
  name: "uses"
}
</script>
