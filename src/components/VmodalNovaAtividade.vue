<template>
  <div class="geral" v-show="mostrarModalAtividade">
        <div class="modal"> 
          <div class="titles"><p>Nova Atividade</p> <button class="close-modal">X</button></div>
            <div>
            <Input type="text" :style="'width:91%; margin: 0'" placeholder="Busque o paciente por nome ou cpf(autocomplete)"/>
            <div class="input-modais">
           <Input type="date"/> <Select/>
            </div>
           <textarea name="" id="" cols="50" rows="6" placeholder="Atividade"></textarea>
            </div>
        </div>
  </div>
</template>

<script>
import Input from '@/components/Vinput.vue'
import Select from '@/components/Vselect.vue'
export default {
    components:{
Input,
Select
    },
  
    Props:{
        mostrarModalAtividade :{
            type: Boolean,
        default: false,
            },  
        title: {
            type: String
        },
    },
    data(){
return{
    mostrarModalAtividade: false
}
    },
    methods: {
    
    },

}
</script>

<style scoped>
p{
    color: black;
}
.close-modal{
    background: none;
    border: none;
    cursor: pointer;
}
.geral{
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.247);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999999;
}
.modal{
    min-width: 450px;
    height: auto;
    background: #ffffff;
    border-radius:3px;
    padding: 15px;
    box-shadow:   0 3px 7px rgba(0, 0, 0, 0.3);;
}
.titles{
    display: flex;
    justify-content: space-between;
}
.input-modais{
    display: flex;
    justify-content: space-between;
}
</style>