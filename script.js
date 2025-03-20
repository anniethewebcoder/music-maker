let play = document.querySelector("#play");
let playing = document.querySelector("#playing");

// play.addEventListener("click", () => {
//   // HIDE THIS BUTTON
//   play.style = "display: none";
//   playing.style = "";

//   let audioCtx = new AudioContext();

//   let oscNode = audioCtx.createOscillator();
//   oscNode.frequency.value = 440;

//   let gainNode = audioCtx.createGain();
//   gainNode.gain.value = 0.5;

//   oscNode.connect(gainNode);
//   gainNode.connect(audioCtx.destination);

//   oscNode.start(audioCtx.currentTime);
//   oscNode.stop(audioCtx.currentTime + 2);
// });

// play.addEventListener("click", () => {
//   Tone.start();

//   let synth = new Tone.Synth({
//     // square, triangle, sine, sawtooth
//     oscillator: { type: "square" },
//     envelop: { attack: 0.8, decay: 0.3, sustain: 0.8, release: 1 },
//     volume: -6,
//   }).toDestination();

//   // synth.triggerAttackRelease("A4", 2, 0);
//   synth.triggerAttackRelease("A3", 0.9, 0);
//   synth.triggerAttackRelease("B3", 0.9, 1);
//   synth.triggerAttackRelease("C#4", 0.9, 2);
//   synth.triggerAttackRelease("D4", 0.9, 3);
//   synth.triggerAttackRelease("E4", 0.9, 4);
//   synth.triggerAttackRelease("F#4", 0.9, 5);
//   synth.triggerAttackRelease("G#4", 0.9, 6);
//   synth.triggerAttackRelease("A4", 0.9, 7);
// });

// play.addEventListener("click", () => {
//   Tone.start();

//   let synth = new Tone.PolySynth(Tone.Synth, {
//     oscillator: { type: "square" },
//     envelope: { attack: 0.1, decay: 0.3, sustain: 0.8, release: 0.1 },
//     volume: -6,
//   }).toDestination();

//   synth.triggerAttackRelease(["A3", "C#4"], 0.9, 0);
//   synth.triggerAttackRelease(["B3", "D4"], 0.9, 1);
//   synth.triggerAttackRelease(["C#4", "E4"], 0.9, 2);
//   synth.triggerAttackRelease(["D4", "F#4"], 0.9, 3);
//   synth.triggerAttackRelease(["E4", "G#4"], 0.9, 4);
//   synth.triggerAttackRelease(["F#4", "A4"], 0.9, 5);
//   synth.triggerAttackRelease(["G#4", "B4"], 0.9, 6);
//   synth.triggerAttackRelease(["E4", "A4"], 0.9, 7);
// });

// play.addEventListener("click", () => {
//   Tone.start();

//   let synth = new Tone.Synth().toDestination();

//   let loop = new Tone.Loop((time) => {
//     synth.triggerAttackRelease("C4", "16n", time);
//   }, "4n")
//     .start("0:0:0")
//     .stop("4:0:0");

//   Tone.Transport.start();
// });

// play.addEventListener("click", () => {
//   Tone.start();

//   let synth = new Tone.PolySynth(Tone.Synth, {
//     oscillator: { type: "triangle" },
//     volume: -9,
//   }).toDestination();

//   let notes = ["C4", "D4", "E4", "G4", "A4", "C5"];

//   new Tone.Loop((time) => {
//     for (let i = 0; i < 3; i++) {
//       if (Math.random() < 0.5) {
//         let note = notes[Math.floor(Math.random() * notes.length)];
//         synth.triggerAttackRelease(note, "32n", time);
//       }
//     }
//   }, "8n")
//     .start("0:0:0")
//     .stop("8:0:0");

//   Tone.Transport.start();
// });

// play.addEventListener("click", () => {
//   Tone.start();

//   let synth = new Tone.Synth().toDestination();

//   new Tone.Sequence(
//     (time, note) => {
//       synth.triggerAttackRelease(note, "16n", time);
//     },
//     ["G4", "C4", "C4", "C4"],
//     "4n"
//   )
//     .start("0:0:0")
//     .stop("4:0:0");

//   Tone.Transport.start();
// });

// play.addEventListener("click", () => {
//   Tone.start();

//   let synth = new Tone.Synth().toDestination();

//   new Tone.Sequence(
//     (time, note) => {
//       synth.triggerAttackRelease(note, "16n", time);
//     },
//     ["C4", null, "B3", "C4", "G3", "A3", null, "B3"],
//     "8n"
//   )
//     .start("0:0:0")
//     .stop("4:0:0");

//   Tone.Transport.start();
//   0;
// });

play.addEventListener("click", () => {
  Tone.start();

  let synth = new Tone.Synth().toDestination();

  new Tone.Part(
    (time, note) => {
      synth.triggerAttackRelease(note, "16n", time);
    },
    [
      ["0:0:0", ["C3", "E4"]],
      ["0:0:3", "D4"],
      ["0:1:0", "C4"],
      ["0:1:2", "D4"],
      ["0:2:0", ["E3", "E4"]],
      ["0:2:2", "E4"],
      ["0:3:0", "E4"],
      ["1:0:0", ["G3", "D4"]],
      ["1:0:2", "D4"],
      ["1:1:0", "D4"],
      ["1:2:0", ["E3", "E4"]],
      ["1:2:2", "G4"],
      ["1:3:0", "G4"],
    ]
  ).start("0:0:0");

  Tone.Transport.start();
});
