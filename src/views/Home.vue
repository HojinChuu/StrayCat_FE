<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  async created() {
    const response = await axios.get('http://localhost/straycat_server');
    console.log(response)
  }
}
</script>
