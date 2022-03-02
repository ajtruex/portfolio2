<template>
  <div>
    <section class="hero is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-2 has-text-light">Contact</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-third">
            <div class="box">
              <figure class="image is-rounded is-32x32">
                <img src="../assets/email.svg" alt="Placeholder image" />
              </figure>
              <!-- <h3 class="is-size-4 has-text-weight-medium">Email</h3> -->
              <p>
                <a href="mailto:andrewtruex@gmail.com">andrewtruex@gmail.com</a>
              </p>
              <figure class="image is-rounded is-32x32">
                <img src="../assets/twitter.svg" alt="Placeholder image" />
              </figure>
              <p>
                <a href="https://twitter.com/ATrueDev">@ATrueDev</a>
              </p>
              <figure class="image is-rounded is-32x32">
                <img src="../assets/github.svg" alt="Placeholder image" />
              </figure>
              <p>
                <a href="https://github.com/ajtruex">github.com/ajtruex</a>
              </p>

              <div>
                <figure class="image is-rounded is-32x32">
                  <img src="../assets/dev-rainbow.svg" alt="Placeholder image" />
                </figure>
                <p>
                  <a href="https://dev.to/ajtruex">dev.to/ajtruex</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "contact"
}
</script>
<style type="text/css">
.hero {
  background-color: #1a2b33;
}
</style>
