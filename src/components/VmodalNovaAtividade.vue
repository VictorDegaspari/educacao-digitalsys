<template>
  <modal :name="name">
  hello, world!
</modal>
</template>

<script>
export default {
 components: {
		VDropDownPesquisa,
	},
	props: {
		name: {
			type: String,
			required: true,
		},
	},

 
}
</script>

<style>

</style>