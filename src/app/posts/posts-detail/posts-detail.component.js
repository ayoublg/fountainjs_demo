/**
 * Created by Ayoub on 24/06/2017.
 */
class PostDetailController {
  constructor(PostService, $stateParams) {
    this.$stateParams = $stateParams;
    this.PostService = PostService;
    this.getPost(this.$stateParams.postId);
  }

  getPost(postId) {
    this.PostService.getPostById(postId).then(response => {
      this.post = response.data;
    });
  }
  editPost(post) {
    this.PostService.setPost(post).then(response => {
      this.valid = 'poste modifié';
      this.response = response.data;
    });
  }
}
export const PostDetailComponent = {
  bindings: {
  },
  template: require('./posts-detail.template.html'),
  controller: PostDetailController,
  controllerAs: 'pdctrl'
};
