<template>
  <main>
    <section class="hero-section">
      <div>
        <h2 class="name-header">ETHAN SCHEYS </h2>
        <!-- or Ethan_scheys -->
        <h3 class="blurb"><span class="kenobi">Hello there</span>, welcome to my E-portfolio! Here you can find
          information about me, my class
          projects, my resume,
          and a way to contact me if you have any questions.
          <div class="gif-container">
            <img class="gif-image" src="/hello-there-general-kenobi.gif" alt="General Kenobi">
          </div>
        </h3>
      </div>
      <img src="/00388-4200796215.png" alt="Ethan's beautiful face <3" class="main-image">
    </section>
    <section class="stats-section">
      <h3 class="statistics-text">Statistics</h3>
      <div class="stats-area">
        <div class="stat">
          <h3>5</h3>
          <h4>projects completed</h4>
        </div>
        <div class="stat">
          <h3>5</h3>
          <h4>languages mastered</h4>
        </div>
        <div class="stat">
          <h3>3</h3>
          <h4>years dominating</h4>
          <!-- love it XD -->
        </div>
      </div>
    </section>

  </main>
</template>


<style scoped>
.hero-section {
  display: flex;
  margin-top: 60px;
  color: white;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap-reverse;
}

.blurb {
  width: 600px;
  line-height: 30px;
}

.blurb:hover .kenobi {
  cursor: pointer;
}

.gif-container {
  display: none;
  position: absolute;
}

.kenobi:hover+.gif-container,
.gif-container:hover {
  display: block;
}

.main-image {
  border-radius: 30px;
  width: 300px;
}

.name-header {
  font-family: 'Monoton', sans-serif;
  font-size: 60px;
  margin-bottom: 0px;
}

.stats-section {
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  align-items: center;
  flex-direction: column;
}

.statistics-text {
  font-size: 30px;
  font-weight: 500;
}

.stats-area {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
}

.stat h3 {
  font-size: 27px;
  font-weight: 600;
  margin-bottom: 10px;
}

.stat h4 {
  margin-top: 0px;
}
</style>