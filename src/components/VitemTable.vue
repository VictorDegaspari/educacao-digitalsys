<template>
  <tr class="linha-table">
      <td>{{paciente}}</td>
      <td>{{cpf}}</td>
      <td>{{data}}</td>
      <td>{{atividade}}</td>
      <td v-if="status">
        <Select />
      </td>
    </tr>
</template>

<script>
import Select from '@/components/Vselect.vue' 
export default {
  components:{
    Select,
  },

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
			type: Boolean,
			required: true,
		},
	},

 
}
</script>

<style>

</style>