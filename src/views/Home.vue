<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      title: ''
    }
  },
  async created() {
    const res = await axios.get('http://localhost/straycat_server/');
    this.title = res.data;
  }
}
</script>
