<template>
  <p>
    <input placeholder="nome" type="text" name="nome" class="form-control" v-model="nome" />
    <input placeholder="autor" type="text" name="autor" class="form-control" v-model="autor" />
    <input
      placeholder="tecnologias"
      type="text"
      name="tecnologias"
      class="form-control"
      v-model="tecnologias"
    />
    <input placeholder="link" type="text" name="link" class="form-control" v-model="link" />
    <button
      v-on:click="addProject"
      :disabled="nome.length < 1"
      type="submit"
      class="btn btn-primary"
    >Enviar</button>
  </p>
</template>