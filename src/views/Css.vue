<template>
  <div @click="$emit('click')" class="view">
    <h2><i class="fab fa-css3-alt icon"></i> CSS3</h2>
    <p>
      <em>CSS</em> é uma folha de estilos para páginas <em>web</em>.
    </p>
    <p>
      <em>CSS</em> é a pele do site, o visual. Descreve como os elementos
      <em>HTML</em> devem ser exibidos, aplicando cores, definindo
      posicionamento, tamanho, fontes, animações, transições e muito mais.
    </p>

    <h3>Cursos gratuitos</h3>
    <ul>
      <li>-
        <a href="https://www.youtube.com/playlist?list=PLwXQLZ3FdTVGf7GUtiOFLc_9AXO25iIzG" target="_blank">
          Node Studio Treinamentos
        </a>
      </li>
      <li>-
        <a href="https://www.youtube.com/playlist?list=PLirko8T4cEmx5eBb1-9j6T6Gl4aBtZ_5x" target="_blank">
          Marco Bruno
        </a>
      </li>
      <li>-
        <a href="https://pt.khanacademy.org/computing/computer-programming/html-css/intro-to-css/pt/css-basics" target="_blank">
          Khan Academy
        </a>
      </li>
      <li>-
        <a href="https://www.ev.org.br/cursos/inovando-com-css" target="_blank">
          Fundação Bradesco
        </a>
      </li>
    </ul>

    <h3>Artigos</h3>
    <ul>
      <li>- WebLink:
        <a href="https://www.weblink.com.br/blog/programacao/o-que-e-css/" target="_blank">
          "O Que é CSS e Como Funciona?"
        </a>
      </li>
      <li>- Hostinger:
        <a href="https://www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css" target="_blank">
          "O que é CSS? Guia Básico para Iniciantes"
        </a>
      </li>
      <li>- DevMedia:
        <a href="https://www.devmedia.com.br/introducao-pratica-ao-css/40682" target="_blank">
          "Introdução prática ao CSS"
        </a>
      </li>
    </ul>

    <h3>Documentações</h3>
    <ul>
      <li>-
        <a href="https://www.w3schools.com/css/" target="_blank">
          W3schools
        </a>
      </li>
      <li>-
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank">
          Mozilla Developer Network (MDN)
        </a>
      </li>
      <li>-
        <a href="https://css-tricks.com/guides/" target="_blank">
          CSS Tricks
        </a>
      </li>
    </ul>

    <h3>Mapa de estudos</h3>
    <ul>
      <li>- O que é CSS</li>
      <li>- Estrutura básica</li>
      <li>- Seletores</li>
      <li>- Cores</li>
      <li>- Unidades absolutas e relativas</li>
      <li>- Fundos (<em>background</em>)</li>
      <li>- <em>Box model</em></li>
      <li>- Abreviações</li>
      <li>- Textos</li>
      <li>- Combinadores</li>
      <li>- Pseudo-classes</li>
      <li>- Pseudo-elementos</li>
      <li>- Ordem dos seletores</li>
      <li>- Posicionamento (<em>position</em>)</li>
      <li>- <em>Flexbox</em></li>
      <li>- <em>Grid layout</em></li>
      <li>- Sombras</li>
      <li>- Responsividade (<em>media query</em>)</li>
      <li>- Animações</li>
      <li>- Prefixos</li>
      <li>Continue estudando...</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Css',
    created() {
      this.$emit('currentPath', this.$route);
    }
  }
</script>

<style scoped>
  @import '../css/global-views.css';

  .icon {
    color: #219EBC;
  }
</style>
