var app = new Vue({
  el: '#app',
  data: {
    instruments: ["Piano", "Clarinet", "Trumpet", "Harmonica", "Organ"],
    selectedInstument: "",
    correct: "",
    total: "",
    intervalInfo: "",
    playButtonText: "Start"
  },
  methods: {
    GetIntervalREST() {
      var selection = document.getElementById("selector");
      this.selectedInstument = selection.value;
      var url = "getinterval?instrument=" + this.selectedInstument;
      fetch(url)
        .then((data) => {
          return (data.json());
        })
        .then((intervalInfo) => {
          console.log(intervalInfo);
          this.intervalInfo = intervalInfo;
          this.PlayNotes(intervalInfo);
        });
    },
    StartOrReplayInterval() {
        if (this.playButtonText == "Start") {
            this.playButtonText = "Replay Interval";
            this.GetIntervalREST();
        }
        else {
            this.PlayNotes(this.IntervalInfo);
        }
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
    },
    IntervalGuessed(guess) {
        if (guess == this.interval){
            this.correct += 1;
        }
        this.total += 1;
        // You might need to have a delay here.
        this.GetIntervalREST();
    },
    Interval1Guessed() {
        this.IntervalGuessed(1);
    },
    Interval2Guessed() {
        this.IntervalGuessed(2);
    },
    Interval3Guessed() {
        this.IntervalGuessed(3);
    },
    Interval4Guessed() {
        this.IntervalGuessed(4);
    },
    Interval5Guessed() {
        this.IntervalGuessed(5);
    },
    Interval6Guessed() {
        this.IntervalGuessed(6);
    },
    Interval7Guessed() {
        this.IntervalGuessed(7);
    },
    Interval8Guessed() {
        this.IntervalGuessed(8);
    },
    Interval9Guessed() {
        this.IntervalGuessed(9);
    },
    Interval10Guessed() {
        this.IntervalGuessed(10);
    },
    Interval11Guessed() {
        this.IntervalGuessed(11);
    },
    Interval12Guessed() {
        this.IntervalGuessed(12);
    }
  }
});