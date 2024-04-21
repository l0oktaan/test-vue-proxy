<template>
  <h4>{{ data }}</h4>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      data: null
    }
  },
  mounted(){
    this.fetchData();
  },
  methods: {
    async fetchData(){
      let path = await '/api/activity'
      const res = await axios.get(path)
      this.data = await res.data;
      await console.log(this.data);
    }
  }
}
</script>

<style>

</style>