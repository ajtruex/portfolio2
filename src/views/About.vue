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
              <h3 class="title is-4 has-text-weight-medium">
                Full Stack Proficiency
              </h3>
              <p>
                Proficient in working across the application stack using APIs,
                Node, and Netlify to deliver production applications from design
                to deployment.
              </p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h3 class="title is-4 has-text-weight-medium">
                Eager and Willing to Learn
              </h3>
              <p>
                Ability to pick up new concepts quickly. If I am not familiar
                with a concept or idea I am more than willing to research and
                learn whatever is necessary.
              </p>
            </div>
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
        <p
          class="tech-box-title title is-4 has-text-weight-light has-text-centered"
        >
          Web API's • MariaDB • Python • MySQL • PHP
        </p>
      </div>
    </section>
    <section class="section">
      <h2 class="title is-3 has-text-weight-medium has-text-centered">
        What Drives Me
      </h2>

      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half content">
            <ul>
              <li>
                <Strong>A thirst for knowledge: </Strong>My desire to learn
                anything that will improve my web development skills is the
                driving force behind my work.
              </li>
              <li>
                <Strong>Technological Advancement: </Strong>I love being on the
                bleeding edge of technology.
              </li>
              <li>
                <Strong>Search for original ideas: </Strong>I believe technology
                advances through the identification and development of original
                ideas.
              </li>
            </ul>
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
