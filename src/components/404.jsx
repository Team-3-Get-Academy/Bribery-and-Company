export default {
  methods: {
    goBack() {
      window.history.back();
    },

    goHome(){
      this.$router.navigate("/")
    }
  },

  render() {
    return <>
      <div style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px;">
        <h2 style="margin-bottom: 0">Error 404</h2>
        <h3 style="margin-top: 0; font-weight: 500;">Page not Found</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
          <button onClick={this.methods.goBack}>Gå tilbake</button>
          <button onClick={this.methods.goHome}>Gå til hjemmside</button>
        </div>
      </div>
    </>
  }
}