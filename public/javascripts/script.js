var app = new Vue({
  el: '#app',
  data: {
    instruments: ["Piano", "Clarinet", "Trumpet", "Harmonica", "Organ"]
  },
  methods: {
    GetIntervalREST() {
      var url = "getinterval?instrument=" + this.instruments[4];
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((intervalInfo) => {
          console.log(intervalInfo);
          this.PlayNotes(intervalInfo);
        });
    },
    PlayNotes(intervalInfo) {
        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds));
        };
        this.PlayNote(intervalInfo.note1);
        sleep(2000).then(() => {
            this.PlayNote(intervalInfo.note2);
        });
    },
    PlayNote(note) {
        new Audio(note).play();
    }
  }
});