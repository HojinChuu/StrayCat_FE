<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-10 col-md-offset-2">
        <h1>Create post</h1>
        <form @submit="onSubmit">
          <div class="form-group has-error">
            <label for="title">Title <span class="text-danger">*</span></label>
            <input type="text" v-model="postData.title" class="form-control" name="title" />
          </div>
            
          <div class="form-group">
            <label for="content">Content <span class="text-danger">*</span></label>
            <textarea rows="10" v-model="postData.content" class="form-control" name="content" ></textarea>
          </div>
          
          <!-- <div class="form-group">
            <label for="tags">Tags</label>
            <select multiple class="form-control" name="tags[]" id="tags">
              <option value="<?= $tag->id ?>">sdf</option>
              <option value="<?= $tag->id ?>">sdf</option>
              <option value="<?= $tag->id ?>">sdf</option>
              <option value="<?= $tag->id ?>">sdf</option>
            </select> 
          </div> -->
          <button type="submit" class="btn btn-primary btn-lg">Create</button>
        </form>
        
        <button @click="back" class="btn btn-default btn-lg">Back</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import showAlert from '@/alert';

export default {
  name: 'PostCreate',
  data() {
    return {
      postData: {
        title: '',
        content: ''
      }
    }
  },
  computed: {
    ...mapGetters([ 'userId' ])
  },
  methods: {
    ...mapActions(['CREATE_POST']),

    onSubmit(e) {
      e.preventDefault();

      this.postData.user_id = this.userId
      const data = this.postData

      this.CREATE_POST({data})
      .then((res) => {
        showAlert.success('Great', res.messages[0])
        this.$router.push({ name: 'Community' })
      })
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>