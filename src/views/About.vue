<template>
  <div>
    <section class="hero is-medium is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-2 has-text-light">About Andrew Truex</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <h2 class="title is-3 has-text-weight-medium has-text-centered">
        My Skills
      </h2>
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium">Front End Focus</h3>
              <p>
                Focused on building user interfaces with JS (Vue.js), HTML, and
                CSS that are well designed and functional.
              </p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium">TDB</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat delectus eius esse, perspiciatis cumque ratione commodi
                rerum distinctio sunt. Ut aperiam perferendis eum, dolores
                quidem sit laborum minima maxime porro?
              </p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium">TBD</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati dolores illo nostrum molestiae architecto tempore
                ipsam dignissimos exercitationem ut, ducimus eligendi assumenda
                laudantium ad voluptate pariatur commodi consequatur sunt
                voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section has-background-light">
      <h2 class="title is-3 has-text-weight-medium has-text-centered">
        Experience
      </h2>
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-four-fifths">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              eum voluptate aut, nulla hic incidunt excepturi facilis, explicabo
              enim perferendis repellat animi ipsum sunt? Rem voluptas veritatis
              sint harum beatae!
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <h2 class="title is-3 has-text-weight-medium has-text-centered">
        Technologies I've Worked With
      </h2>
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-one-fifth">
            <div class="box">
              <figure class="image is-square">
                <img src="../assets/logo.png" alt="Placeholder image" />
              </figure>
              <h3
                class="tech-box-title title is-4 has-text-weight-medium has-text-centered"
              >
                Vue.js
              </h3>
              <p>Full production applications written in Vue</p>
            </div>
          </div>
          <div class="column is-one-fifth">
            <div class="box">
              <figure class="image is-square">
                <img src="../assets/js.png" alt="Placeholder image" />
              </figure>
              <h3
                class="tech-box-title title is-4 has-text-weight-medium has-text-centered"
              >
                JavaScript
              </h3>
              <p>Proficient in ES6 and ES5 JS</p>
            </div>
          </div>
          <div class="column is-one-fifth">
            <div class="box">
              <figure class="image is-square">
                <img src="../assets/node.png" alt="Placeholder image" />
              </figure>
              <h3
                class="tech-box-title title is-4 has-text-weight-medium has-text-centered"
              >
                Node.js
              </h3>
              <p>Back-ends written using Node and Express</p>
            </div>
          </div>
        </div>
        <!-- <p
          class="tech-box-title title is-4 has-text-weight-light has-text-centered"
        >
          Web API's • Mongodb • Angular • Ruby On Rails • Postgresql
        </p>-->
      </div>
    </section>
    <section class="section has-background-light">
      <h2 class="title is-3 has-text-weight-medium has-text-centered">
        What Drives Me
      </h2>
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half content">
            <!-- <ul>
              <li>
                <Strong>An innate desire to learn:</Strong>As the sole developer
                at Knotty Tie Co, my drive to learn is what has made me
                successful.
              </li>
              <li>
                <Strong>Compassion for users:</Strong>I strive to make products
                that give put users first.
              </li>
              <li>
                <Strong>A passion for justice:</Strong>I want to put my skills
                to work to make the world a better place for everyone.
              </li>
            </ul>-->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style type="text/css">
.box {
  height: 100%;
}
.tech-box-title {
  margin-top: 1.5rem;
}
.hero {
  background-color: #1a2b33;
}
</style>

<script>
export default {
  name: "about"
}
</script>
