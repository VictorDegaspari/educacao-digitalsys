<template>
  <tr class="linha-table">
      <td>{{paciente}}</td>
      <td>{{cpf}}</td>
      <td>{{data}}</td>
      <td>{{atividade}}</td>
      <td>{{status}}</td>
    </tr>
</template>

<script>
export default {

	props: {
		paciente: {
			type: String,
			required: true,
    },
    cpf: {
			type: String,
			required: true,
    },
    data: {
			type: String,
			required: true,
    },
    atividade:{
      type: String,
      required: true,
    },
    status: {
			type: String,
			required: true,
		},
	},

 
}
</script>

<style>

</style>