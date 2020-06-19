export default {
  data() {
    return {
      api: null,
      loading: true
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true
      this.api = null
      fetch(`https://api-off-curso.herokuapp.com${url}`)
        .then((r) => r.json())
        .then((r) => {
          
          setTimeout(() => {
            this.api = r;
            this.loading = false
          }, 600);
            
        });
    },
  }
};
