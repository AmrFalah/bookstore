var app = new Vue({
  el: "#app-view",
  data() {
    return {
      books: [],
      search: ""
    };
  },

  methods: {
    getData() {
      fetch("https://api.myjson.com/bins/zyv02", {
        method: "GET"
      })
        .then(function(response) {
          if (response.ok) {
            return response.json();
          }
        })
        .then(function(json) {
          app.books = json.books;
          console.log(app.books);
        });
    }
  },

  computed: {
    filters: function() {
      return this.books.filter(book => {
        return book.title.match(this.search);
      });
    }
  },
  created() {
    this.getData();
  }
});
