<template>
  <div @click="$emit('click')" class="view">
    <h2><i class="fab fa-js icon"></i> JavaScript</h2>
    <p>
      <em>JavaScript</em> é uma linguagem de programação de alto nível que dá a
      liberdade para criar e implementar itens complexos em páginas <em>web</em>.
      Juntamente com <em>HTML</em> e <em>CSS</em>, o <em>JavaScript</em>
      é uma das três principais tecnologias da <em>Web</em>.
    </p>
    <p>
      Além de ser a única linguagem de programação que os navegadores "entendem",
      o JavaScript pode ser usado em vários outros ambientes, tais como aplicativos
      para dispositivos móveis (com <strong>React Native</strong>,
      <strong>Ionic</strong>, <strong>Native Script</strong> e outros),
      aplicações do lado do servidor (principalmente com <strong>Node.js</strong>)
      e sistemas <em>desktop</em> (com <strong>Electron</strong>,
      <strong>Proton Native</strong> e outros).
    </p>

    <h3>Cursos gratuitos:</h3>
    <ul>
      <li>-
        <a href="https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1" target="_blank">
          Curso em Vídeo
        </a>
      </li>
      <li>-
        <a href="https://www.udemy.com/courses/search/?lang=pt&price=price-free&q=javascript&sort=relevance&src=ukw" target="_blank">
          Udemy
        </a>
      </li>
      <li>-
        <a href="https://scrimba.com/allcourses?q=javascript&price=free" target="_blank">
          Scrimba (inglês)
        </a>
      </li>
      <li>-
        <a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET" target="_blank">
          The Net Ninja (inglês)
        </a>
      </li>
    </ul>

    <h3>Artigos:</h3>
    <ul>
      <li>- Tableless:
        <a href="https://tableless.github.io/iniciantes/manual/js/" target="_blank">
          "O que é JavaScript? Controlando o comportamento do HTML e o CSS"
        </a>
      </li>
      <li>- Cronapp blog:
        <a href="https://blog.cronapp.io/aprender-javascript/" target="_blank">
          "JavaScript: entenda porque é importante aprender essa linguagem"
        </a>
      </li>
      <li>- DevMedia:
        <a href="https://www.devmedia.com.br/javascript-tutorial/37257" target="_blank">
          "JavaScript Tutorial"
        </a>
      </li>
      <li>- Tecnoblog:
        <a href="https://tecnoblog.net/406946/o-que-e-javascript-guia-para-iniciantes/" target="_blank">
          "O que é JavaScript? [Guia para iniciantes]"
        </a>
      </li>
    </ul>

    <h3>Documentações:</h3>
    <ul>
      <li>-
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">
          Mozilla Developer Network (MDN)
        </a>
      </li>
      <li>-
        <a href="https://www.w3schools.com/js/default.asp" target="_blank">
          W3Schools
        </a>
      </li>
      <li>-
        <a href="https://learnxinyminutes.com/docs/pt-br/javascript-pt/" target="_blank">
          Aprenda JavaScript em Y minutos
        </a>
      </li>
    </ul>

    <h3>Mapa de estudos:</h3>
    <ul>
      <li>- Variáveis</li>
      <li>- Tipos de dados</li>
      <li>- Escopos</li>
      <li>- Interação com o DOM (<em>Document Object Model</em>)</li>
      <li>- Operadores (aritméticos, lógicos, relacionais, de atribuição...)</li>
      <li>- Estruturas de decição (<em>if</em>, <em>else</em>, <em>switch</em>)</li>
      <li>- Operador ternário</li>
      <li>
        - Estruturas de repetição (<em>for</em>, <em>foreach</em>,
        <em>while</em>, <em>do while</em>...)
      </li>
      <li>- Funções (<em>function declaration</em>, <em>arrow function</em>)</li>
      <li>- Operador <em>rest</em></li>
      <li>- <em>Closure</em></li>
      <li>- <em>Hoisting</em></li>
      <li>- <em>Arrays</em> e objetos</li>
      <li>- Métodos de <em>array</em></li>
      <li>- <em>This</em></li>
      <li>- Operador <em>spread</em></li>
      <li>- Desestruturação</li>
      <li>- Objetos nativos (<em>Date</em>, <em>Math</em>...)</li>
      <li>- Eventos</li>
      <li>- Assincronismo (<em>async/await</em>, <em>promises</em>, <em>fetch</em>)</li>
      <li>- Tratamento de erros (<em>try/catch/finally</em>)</li>
      <li>- Operador <em>OR</em></li>
      <li>- <em>Nullish coalescing</em></li>
      <li>- <em>JSON</em></li>
      <li>- Expressão regular</li>
      <li>- <em>Web API's</em></li>
      <li>Continue estudando...</li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'Js',
    created() {
      this.$emit('currentPath', this.$route);
    }
  }
</script>

<style scoped>
  @import '../css/global-views.css';

  .icon {
    color: #FFD265;
  }
</style>
