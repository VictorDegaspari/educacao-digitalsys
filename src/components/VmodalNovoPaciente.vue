<template>
  <div class="geral" v-show="mostrarModal">
        <div class="modal"> 
          <div class="titles"><p>Novo Paciente</p> <button class="close-modal">X</button>
            </div>
            <slot/>
        </div>
  </div>
</template>

<script>

export default {
  
    Props:{
        mostrarModal :{
            type: Boolean,
        default: false,
            },  
        title: {
            type: String
        },
    },
    data(){
return{
    mostrarModal: false
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
    height: 100px;
    background: #ffffff;
    border-radius:3px;
    padding: 15px;
    box-shadow:   0 3px 7px rgba(0, 0, 0, 0.3);;
}
.titles{
    display: flex;
    justify-content: space-between;
}
</style>