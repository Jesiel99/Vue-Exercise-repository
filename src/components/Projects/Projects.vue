<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
  <div class="container">
    <header>
      <input type="text" />
      <button v-on:click="goToNewProject()">Add Project
      </button>
      <!-- <router-link to="/newproject">Go to Foo</router-link> -->

    </header>
    <main>
      <div id="project" v-for="(project, index) in projects" :key="index">
        <img v-bind:src="project.profilePhotoLink" />
        <div id='project-title'>
          <h1 id="project-title">{{project.nome}}</h1>
          <p>made by: {{project.autor}}</p>
        </div>
        <p>{{project.description}}</p>
        <p class="no-line-break">made with: </p>
        <div class="no-line-break" v-for="tecnologia in project.tecnologias" :key="tecnologia">
          <button class="no-line-break">{{tecnologia}}</button>
        </div>
        <a v-bind:href="project.link">see on github</a>
        <!-- <button v-on:click="removeProject()" type="submit" value>Excluir</button> -->
      </div>
    </main>
  </div>
</template>

<script>

export default {
  data() {
    return {
      projects: [
        {
            autor: "Jesiel R Lofhagen",
            profilePhotoLink:
            "https://lh3.googleusercontent.com/b-jesLBy4NotFQeAnCVAz9ubWd4CPwYUG0Rb2pLcsDtwWidnQa6n4t4472lI3rQvv_VKpouy9iA8-QtnXvbZGe9dvlq9YI5U3Cb3YQ0TtYqvEP4UugEw9Yy3WXN6IbICb1sRtRae8A=w2400",
            nome: "Maze Generator",
            tecnologias: ["Flutter", "SQL Firebird"],
            link: "https://github.com/Jesiel99/randomMazeGeneration-pathFiding",
            description: "Generates a maze and print with characters"
        },
        {
          autor: 'Your Mother',
          profilePhotoLink: 'https://images.uncyc.org/pt/2/2e/Suamaejovem-.jpg',
          nome: 'Vibrator',
          tecnologias: ['plastic-cock'],
          link: 'none',
          description: 'Very pleasuring'
        },
        {
          autor: 'Henrique Elias',
          profilePhotoLink: 'https://lh3.googleusercontent.com/yYB_QGptkmLoCsDFl-oC_Jg-Ed6CfFn7CrxUjmBRZigvGQfp885cIF6d0XZ9E8vK2f9xFDhlfGkVy7RlTs_3o0OYoXZWyllWOa0k487chtTrelf-37uGuD2vAPeEX7mGKABp6P3__Q=w2400',
          nome: '//TO DO',
          tecnologias: ['none'],
          description: 'Not finished'
        }
      ],
      autor: "",
      nome: "",
      tecnologias: "",
      link: "",
      profilePhotoLink: "",
      description: "",
    };
  },
  methods: {
    addProject() {
      this.projects.push({
        autor: this.autor,
        nome: this.nome,
        tecnologias: this.tecnologias.split(","),
        link: this.link,
        profilePhotoLink: this.profilePhotoLink,
        description: this.description,
      });
      this.autor = "";
      this.nome = "";
      this.tecnologias = "";
      this.link = "";
      this.profilePhotoLink = ""
      this.description = ""
    },

    removeProject(index) {
      if (window.confirm("Deseja mesmo excluir?"))
        this.projects.splice(index, 1);
    },

    goToNewProject() {
      this.$router.push('/newproject')
    }
  }
};
</script>

<style scoped src='./Projects.css'></style>

