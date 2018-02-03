<template>
  <div id="test">
    <svg>
      <g id="box-svg">
        <line x1="46" y1="136" x2="46" y2="376" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />
        <line x1="256" y1="256" x2="256" y2="496" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />
        <line x1="466" y1="136" x2="466" y2="376" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />

        <line x1="46" y1="136" x2="256" y2="16" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />
        <line x1="466" y1="136" x2="256" y2="16" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />

        <line x1="256" y1="256" x2="46" y2="136" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />
        <line x1="256" y1="256" x2="466" y2="136" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />

        <line x1="46" y1="376" x2="256" y2="496" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />
        <line x1="466" y1="376" x2="256" y2="496" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />
      </g>

      <g id="boxes-svg">
        <path fill="#ff8f00" d="M46 136 L256 256 L256 496 L46 376 Z" />
        <line x1="46" y1="136" x2="46" y2="376" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />
        <line x1="256" y1="256" x2="256" y2="496" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />
        <line x1="466" y1="136" x2="466" y2="376" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />

        <line x1="46" y1="136" x2="256" y2="16" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />
        <line x1="466" y1="136" x2="256" y2="16" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />

        <line x1="256" y1="256" x2="46" y2="136" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />
        <line x1="256" y1="256" x2="466" y2="136" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />

        <line x1="46" y1="376" x2="256" y2="496" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />
        <line x1="466" y1="376" x2="256" y2="496" class="color" style="stroke:#282f54;stroke-width:25" stroke-linecap="round" />
        <text x="90" y="190" fill="white" transform="rotate(29) skewX(29)" font-size="100" font-family="bebas">BO</text>
        <text x="90" y="280" fill="white" transform="rotate(29) skewX(29)" font-size="100" font-family="bebas">XES</text>
      </g>
    </svg>
  </div>
</template>

<style lang="sass" scoped>
  #test
    position: absolute
    width: 0
    height: 0
    visibility: hidden
    opacity: 0
</style>

<script>
  export default {
    name: 'svgcomponents'
  }
</script>
