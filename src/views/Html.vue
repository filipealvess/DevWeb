<template>
  <div @click="$emit('click')" class="view">
    <h2><i class="fab fa-html5 icon"></i> HTML5</h2>
    <p>
      <em>HTML</em> é uma linguagem de marcação para a <em>Web</em>
      e está atualmente na versão 5.
    </p>
    <p>
      É considerado o esqueleto dos sites, sendo responsável pela definição
      dos elementos que compõem a página.
    </p>

    <h3>Cursos gratuitos</h3>
    <ul>
      <li>-
        <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n" target="_blank">
          Curso em Vídeo
        </a>
      </li>
      <li>-
        <a href="https://www.ev.org.br/cursos/html-basico" target="_blank">
          Fundação Bradesco
        </a>
      </li>
      <li>-
        <a href="https://youtube.com/playlist?list=PLInBAd9OZCzydDFvm06EgbPXYylGVcyIL" target="_blank">
          RBtech
        </a>
      </li>
    </ul>

    <h3>Artigos</h3>
    <ul>
      <li>- Hostinger:
        <a href="https://www.hostinger.com.br/tutoriais/o-que-e-html-conceitos-basicos" target="_blank">
          "O Que é HTML? Guia Básico Para Iniciantes"
        </a>
      </li>
      <li>- Rockcontent:
        <a href="https://rockcontent.com/br/blog/html/" target="_blank">
          "O que é HTML e qual sua funcionalidade?"
        </a>
      </li>
      <li>- DevMedia:
        <a href="https://www.devmedia.com.br/html-basico-codigos-html/16596" target="_blank">
          "HTML básico - códigos HTML"
        </a>
      </li>
    </ul>

    <h3>Documentações</h3>
    <ul>
      <li>-
        <a href="https://www.w3schools.com/html/default.asp" target="_blank">
          W3schools
        </a>
      </li>
      <li>-
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">
          Mozilla Developer Network (MDN)
        </a>
      </li>
    </ul>

    <h3>Mapa de estudos</h3>
    <ul>
      <li>- O que é HTML</li>
      <li>- Estrutura básica</li>
      <li>- Tags e atributos</li>
      <li>- ID e class</li>
      <li>- Títulos e parágrafos</li>
      <li>- Links</li>
      <li>- Imagens</li>
      <li>- Áudio e vídeo</li>
      <li>- Listas</li>
      <li>- Tabelas</li>
      <li>- Formulários</li>
      <li>- Blocos (div e span)</li>
      <li>- Tags semânticas</li>
      <li>- Iframes</li>
      <li>- Tags "obsolete" e "deprecated"</li>
      <li>- Meta tags</li>
      <li>Continue estudando...</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Html',
    created() {
      this.$emit('currentPath', this.$route);
    }
  }
</script>

<style scoped>
  @import '../css/global-views.css';

  .icon {
    color: #F4A261;
  }
</style>
