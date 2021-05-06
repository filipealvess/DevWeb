<template>
  <div @click="$emit('click')" class="view">
    <h2><i class="fab fa-sass icon"></i> Sass</h2>
    <p>
      <em>Sass</em> é um pré-processador, uma extensão de <em>CSS</em> que
      adiciona novas possibilidades e elegância à linguagem base.
    </p>
    <p>
      <em>Sass</em> pretende oferecer ajuda onde <em>CSS</em> demonstra falhas,
      adicionando funcionalidades como condicionais, estruturas de repetição e
      funções em cima da linguagem.
    </p>

    <h3>Cursos gratuitos:</h3>
    <ul>
      <li>-
        <a href="https://www.youtube.com/playlist?list=PL97KElaimHeGRtfkksKwxg6IGVZi_cR7J" target="_blank">
          Amanda Vilela
        </a>
      </li>
      <li>-
        <a href="https://www.youtube.com/playlist?list=PLMy95_4XE08OmaSd_GOLKNkqhoJFvg7w7" target="_blank">
          Vida FullStack
        </a>
      </li>
      <li>-
        <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9iEwigam3gTjU_7IA3W2WZA" target="_blank">
          The Net Ninja (inglês)
        </a>
      </li>
    </ul>

    <h3>Artigos:</h3>
    <ul>
      <li>- Sass Guidelines:
        <a href="https://sass-guidelin.es/pt/" target="_blank">
          "Um guia de estilo opinado para escrever Sass com pés e cabeça,
          escalável e de fácil manutenção"
        </a>
      </li>
      <li>- Tableless:
        <a href="https://tableless.com.br/sass-um-outro-metodo-de-escrever-css/" target="_blank">
          "O que é Sass? Entenda esse outro método de escrever CSS"
        </a>
      </li>
      <li>- Desenvolvimento Para Web (dpw):
        <a href="https://desenvolvimentoparaweb.com/css/o-basico-de-sass/" target="_blank">
          "O básico de Sass para se virar nas webs"
        </a>
      </li>
    </ul>

    <h3>Documentações:</h3>
    <ul>
      <li>-
        <a href="https://sass-lang.com/guide" target="_blank">
          Sass Lang (oficial)
        </a>
      </li>
      <li>-
        <a href="https://www.w3schools.com/sass/default.php" target="_blank">
          W3Schools
        </a>
      </li>
    </ul>

    <h3>Mapa de estudos:</h3>
    <ul>
      <li>- Como o <em>Sass</em> funciona</li>
      <li>- Sintaxe básica</li>
      <li>- <em>Sass</em> vs <em>Scss</em></li>
      <li>- Exibição de mensagens (<em>@error</em>, <em>@warn</em>, <em>@debug</em>)</li>
      <li>- Aninhamento de seletores</li>
      <li>- Seletor pai ("&#38;")</li>
      <li>- Seletor "placeholder" ("%")</li>
      <li>- Variáveis</li>
      <li>- Interpolação</li>
      <li>- Tipos de valores</li>
      <li>- Operadores</li>
      <li>- Funções e <em>mixins</em></li>
      <li>- Controle de fluxo (<em>@if</em>, <em>@else</em>, <em>@each</em>, <em>@for</em>, <em>@while</em>)</li>
      <li>- Módulos embutidos (<em>sass:color</em>, <em>sass:math</em>, <em>sass:string</em>...)</li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'Sass',
    created() {
      this.$emit('currentPath', this.$route);
    }
  }
</script>

<style scoped>
  @import '../css/global-views.css';

  .icon {
    color: #FFAFCC;
  }
</style>
