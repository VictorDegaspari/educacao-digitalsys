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

    <table class="tabela" margin="10">
        
         <TituloTable titulo1="Paciente" titulo2="CPF" titulo3="Data" titulo4="Atividade" titulo5="Status"/> 

         <ItemTable paciente="Kael - The Invoker" cpf="09393675996" data="08/01/21" atividade="Verificar com o paciente se o remedio fez efeito" status="aberto"/>
         <ItemTable paciente="Kael - The Invoker" cpf="09393675996" data="08/01/21" atividade="Verificar com o paciente se o remedio fez efeito" status="aberto"/>
         <ItemTable paciente="Kael - The Invoker" cpf="09393675996" data="08/01/21" atividade="Verificar com o paciente se o remedio fez efeito" status="aberto"/>
    </table>
    
  </div>

</template>

<script>
import Botao from '@/components/Vbotao.vue'
import ContainerBotoes from '@/components/VcontainerBotoes.vue'
import Paginacao from '@/components/Vpaginacao.vue'
import Input from '@/components/Vinput.vue'
import ItemTable from '@/components/VitemTable.vue'
import TituloTable from '@/components/VtituloTable.vue'

export default {
  components: {
    Botao,
    ContainerBotoes,
    Paginacao,
    Input,
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
    
    },

    ItemTable,
    TituloTable,
  }

</script>

<style>
.tabela{
  background: white;
  width:90%;
  margin: 0 auto;
  font-size: 14px;
  
}
.tabela tr td{
    border-bottom: 1px solid black;
    margin: 0;
    padding: 5px 0;
}
.tabela tr.titulo-table{
  font-weight: 700;
}

.atividade{
  border-bottom: 1px solid green;
}
</style>