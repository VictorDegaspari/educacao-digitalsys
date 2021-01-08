<template>
  <div>
    <ContainerBotoes :style="'background: #ffff; justify-content: space-between'">
      <p>Amparo Saúde</p> <p class="atividade">Atividades</p>
   </ContainerBotoes>

    <ContainerBotoes :style="'background: gray; justify-content: space-between'">
      <p>Lista de Atividades</p>
      <div>
      <Botao @click.prevent="modalNovoPaciente" mensagem="Novo Paciente" :style="'background: #3CB371'"/>
      <Botao @click.prevent="modalNovoPaciente" mensagem="Nova Atividade" :style="'background: #3CB371'"/>
      </div>
   </ContainerBotoes>
    <ContainerBotoes :style="'background: #FFF0F5'">
      <Input type="text" placeholder="CPF do Paciente"/>
      <Input type="text" placeholder="Status do Aprazamento"/>
      <Input type="date" placeholder="Data"/>
      <Botao mensagem="Filtrar" :style="'background: #3CB371'"/>
    </ContainerBotoes>
    <ModalNovo title="Nova Atividade"  v-show="mostrarModal"/>
    <Paginacao />
    
  </div>

</template>

<script>
import Botao from '@/components/Vbotao.vue'
import ContainerBotoes from '@/components/VcontainerBotoes.vue'
import Paginacao from '@/components/Vpaginacao.vue'
import Input from '@/components/Vinput.vue'
import ModalNovo from '@/components/Vmodal.vue';

export default {
  components: {
    Botao,
    ContainerBotoes,
    Paginacao,
    Input,
    ModalNovo
  },
  data() {
    return {
      mostrarModal: false,
      title : String
      };
  },
  methods: {
    modalNovoPaciente(){
      this.mostrarModal = true
    }
    
    }
  }

</script>

<style scoped>
.atividade{
  border-bottom: 1px solid green;
}
</style>