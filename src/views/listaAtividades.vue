<template>
  <div>
    <ContainerBotoes :style="'background: #ffff; justify-content: space-between'">
      <p>Amparo Saúde</p> <p>Atividades</p>
   </ContainerBotoes>

    <ContainerBotoes :style="'background: gray; justify-content: space-between'">
      <p>Lista de Atividades</p>
      <div>
      <Botao mensagem="Novo Paciente" :style="'background: #3CB371'"/>
      <Botao @click.prevent="show()"  mensagem="Nova Atividade" :style="'background: #3CB371'"/>
      </div>
   </ContainerBotoes>
    <ContainerBotoes :style="'background: #FFF0F5'">
      <Input type="text" placeholder="CPF do Paciente"/>
      <Input type="text" placeholder="Status do Aprazamento"/>
      <Input type="date" placeholder="Data"/>
      <Botao mensagem="Filtrar" :style="'background: #3CB371'"/>
    </ContainerBotoes>
    
    <Paginacao />
    
  </div>

</template>

<script>
import Botao from '@/components/Vbotao.vue'
import ContainerBotoes from '@/components/VcontainerBotoes.vue'
import Paginacao from '@/components/Vpaginacao.vue'
import Input from '@/components/Vinput.vue'

export default {
  components: {
    Botao,
    ContainerBotoes,
    Paginacao,
    Input
  }
}
</script>

<style>

</style>