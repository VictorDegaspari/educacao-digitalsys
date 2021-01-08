<template>
  <tr class="titulo-table">
      <td>{{titulo1}}</td>
      <td>{{titulo2}}</td>
      <td>{{titulo3}}</td>
      <td>{{titulo4}}</td>
      <td>{{titulo5}}</td>
    </tr>
</template>

<script>
export default {

	props: {
		titulo1: {
			type: String,
			required: true,
    },
        titulo2: {
            type: String,
            required: true,
        },
        titulo3: {
            type: String,
            required: true,
        },
        titulo4: {
            type: String,
            required: true,
        },
        titulo5:{
            type: String,
            required: true,
        }

	},

 
}
</script>

<style>

</style>