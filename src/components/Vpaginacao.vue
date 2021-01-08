<template>
  <div class="overflow-auto pagination">
    <span class="material-icons">icone</span>
    <p class="selected">1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <span class="material-icons"> icone </span>
    <!-- <i class="fas fa-angle-right"></i> -->
   
  </div>
</template>

<script>
  export default {
    // data() {
    //   return {
    //     page: number,
    //   }
    // },
    // computed: {
    //   rows() {
    //     return this.items.length
    //   }
    // }
  }
</script>
<style scoped>
  .pagination{
    margin-top: 40px;
    display:flex;
    text-align: center;
    justify-content: center;
    color: black;
    
  }

  .pagination p{
    border: 1px solid black;
    padding: 5px 15px;
    margin: 0 2px;
  }

  .pagination p.selected{
    background: green;
  }

  .pagination span{
    padding: 5px 15px;
    margin: 0 2px;
  }
</style>