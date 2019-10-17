<template>
  <button
    dataType="button"
    data-name="xxx"
    data-a="x"
    data-a="x"
    data-b="==="
  >
        <img src="./logo.png"/>
    <slot/>
    <div></div>
  </button>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>