<template>
  <button
    data-type="button"
    data-name="xxx"
    data-a="x"
    data-b="==="
  >
    <img src="./logo.png">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>
