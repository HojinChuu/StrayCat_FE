<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-8 col-md-offset-2">

        <!-- show -->
        <span v-if="editToggle == false">
          <div class="jumbotron">
            <h1>Title : {{ post.title }}</h1>
            <small>DATE : {{ post.createdAt }}</small>
          </div>
          <div class="p-4 mb-5">
            {{ post.content }}
          </div>
        </span>

        <!-- edit -->
        <span v-else>
          <form @submit="onSubmit">
            <div class="jumbotron">
              <input type="text" v-model="editPostData.title" class="form-control" placeholder="Title" >
              <small>DATE : {{ post.createdAt }}</small>
            </div>
            <div class="mb-5">
              <textarea rows="5" class="form-control" placeholder="Content" name="content" v-model="editPostData.content"></textarea>
            </div>
            <button type="submit" class="btn btn-block mb-5 btn-light">Save</button>
          </form>
        </span>

        <span v-if="post.user_id === userId">
          <button @click="editToggle = !editToggle" class="btn btn-secondary mr-2">
            <span v-if="editToggle == false">Edit</span>
            <span v-else>Cancle</span>
          </button>
          <button @click="deletePost" class="btn btn-danger mr-2">Delete</button>
        </span>
        
        <button @click="back" class="btn btn-secondary">Back</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import showAlert from '@/alert';

export default {
  name: 'PostDetail',
  data() {
    return {
      post: {},
      editToggle: false,
      editPostData: {
        title: '',
        content: ''
      }
    }
  },
  mounted() {
    this.FETCH_POST(this.$route.params.id)
    .then(res => {
      this.post = res.data
      this.editPostData = res.data
    })
  },
  computed: {
    ...mapGetters(['userId'])
  },
  methods: {
    ...mapActions([ 'FETCH_POST', 'REMOVE_POST', 'UPDATE_POST' ]),
    onSubmit(e) {
      e.preventDefault();

      this.editPostData.user_id = this.userId
      const editData = this.editPostData
      const post_id = this.$route.params.id
      const headers = { 
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json"
      };

      this.UPDATE_POST({ post_id, editData, headers })
      .then((res) => {
        showAlert.success('Great', res.messages[0])
        this.$router.push({ name: 'Community' })
      })
    },
    
    async deletePost() {
      await this.REMOVE_POST(this.$route.params)
      showAlert.success('Great', 'Deleted Post')
      this.$router.go(-1)
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>