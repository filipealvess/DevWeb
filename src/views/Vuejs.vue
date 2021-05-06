<template>
  <div @click="$emit('click')" class="view">
    <h2><i class="fab fa-vuejs icon"></i> Vue JS</h2>
    <p>
      <em>Vue.js</em> é um <em>framework JavaScript</em> de código-aberto, focado
      no desenvolvimento de interfaces de usuário e aplicativos de página única.
    </p>
    <p>
      Existem vários <em>frameworks</em>/bibliotecas <em>JavaScript</em> no
      mercado. Para facilitar na escolha de qual utilizar, a própria documentação
      do <em>Vue</em> disponibiliza comparações do <em>framework</em> com outros
      gigantes do mercado, como <em>React</em> e <em>Angular</em>
      (<a href="https://br.vuejs.org/v2/guide/comparison.html" target="_blank">
        veja aqui
      </a>).
    </p>

    <h3>Cursos gratuitos:</h3>
    <ul>
      <li>-
        <a href="https://www.udemy.com/courses/search/?lang=pt&price=price-free&q=vue&sort=relevance&src=ukw" target="_blank">
          Udemy
        </a>
      </li>
      <li>-
        <a href="https://www.youtube.com/playlist?list=PLJ_KhUnlXUPteacVhunyK5M8SKIadeED0" target="_blank">
          Victor Lima - Guia do Programador
        </a>
      </li>
      <li>-
        <a href="https://www.youtube.com/playlist?list=PLcoYAcR89n-qq1vGRbaUiV6Q9puy0qigW" target="_blank">
          Tiago Matos
        </a>
      </li>
      <li>-
        <a href="https://scrimba.com/allcourses?q=vue&price=free" target="_blank">
          Scrimba (inglês)
        </a>
      </li>
      <li>-
        <a href="https://vueschool.io/courses?filter=free-courses" target="_blank">
          Vue School (inglês)
        </a>
      </li>
    </ul>

    <h3>Artigos:</h3>
    <ul>
      <li>- GeekHunter:
        <a href="https://blog.geekhunter.com.br/vue-js-so-vejo-vantagens-e-voce/" target="_blank">
          "Vue JS: o que é, como funciona e vantagens"
        </a>
      </li>
      <li>- DevMedia:
        <a href="https://www.devmedia.com.br/vue-js-tutorial/38042" target="_blank">
          "Vue.js Tutorial"
        </a>
      </li>
      <li>- TreinaWeb:
        <a href="https://www.treinaweb.com.br/blog/o-que-e-o-vue-js/" target="_blank">
          "O que é o Vue.js?"
        </a>
      </li>
    </ul>

    <h3>Documentação:</h3>
    <ul>
      <li>-
        <a href="https://br.vuejs.org/v2/guide/index.html" target="_blank">
          Vue.js (documentação oficial)
        </a>
      </li>
      <li>-
        <a href="https://www.origamid.com/slide/vue-js-completo/#/0102-o-framework/1" target="_blank">
          Origamid
        </a>
      </li>
    </ul>

    <h3>Mapa de estudos:</h3>
    <ul>
      <li>- O que é</li>
      <li>- Como funciona</li>
      <li>- Estrutura básica</li>
      <li>- Condicionais e laços (<em>v-if</em>, <em>v-else</em>, <em>v-for</em>...)</li>
      <li>- Interação do usuário e eventos (<em>v-model</em>, <em>v-on</em>)</li>
      <li>- Instância <em>Vue</em></li>
      <li>- Dados e metódos</li>
      <li>- Ciclo de vida</li>
      <li>- Interpolação</li>
      <li>- Diretivas</li>
      <li>- Abreviação de diretivas</li>
      <li>- <em>Computed</em> vs <em>Methods</em> vs <em>Watch</em></li>
      <li>- Interligações de classe e estilo</li>
      <li>- Componentes</li>
      <li>- Nomeação de componentes</li>
      <li>- Propriedades</li>
      <li>- Eventos personalizados</li>
      <li>- <em>Vue CLI</em></li>
      <li>- <em>Single File Components</em></li>
      <li>- Transições e animações</li>
      <li>Continue estudando...</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Vuejs',
    created() {
      this.$emit('currentPath', this.$route);
    }
  }
</script>

<style scoped>
  @import '../css/global-views.css';

  .icon {
    color: #41B883;
  }
</style>
