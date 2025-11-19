import { ref } from "noctes.jsx"
import Page1 from "../slides/Page1";
import Page2 from "../slides/Page2";
import Page3 from "../slides/Page3";
import Page4 from "../slides/Page4";

const slides = [
  Page1,
  Page2,
  Page3,
  Page4
];

export default {
  onCreated(ctx) {
    ctx.slide = ref(0);
    ctx.back = ref(false);
  },

  methods: {
    next() {
      if (this.slide.value >= (slides.length - 1)) return;

      this.back.value = false;
      this.slide.value += 1;
    },

    prev() {
      if (this.slide.value === 0) return;

      this.back.value = true;
      this.slide.value -= 1;
    }
  },

  render(ctx) {
    const slideComponent = slides[ctx.slide.value];

    return <>
      <div key="presentation" style="display: flex; flex-direction: column; align-items: center; width: 100%; padding: 32px; overflow: auto; height: 100%;">
        <h1 style="margin: 0;">Oppsummering av Emne 2</h1>
        <h2 style="margin-top: 0; font-weight: 500; font-style: italic;">Bribery & Co.</h2>
        <span style="align-self: start; font-size: 20px">Bilde ${ctx.slide.value + 1}</span>
        <div style="width: 100%; height: 650px; background: #454545; border-radius: 16px; margin: 20px 0; position: relative; overflow: hidden;">
          <Transition name={ctx.back.value ? "presentation-back" : "presentation"}>
            {slideComponent ? <component is={slideComponent} /> : null}
          </Transition>
        </div>
        <div style="display: flex; width: 100%; justify-content: space-between">
          <button onClick={ctx.methods.prev} disabled={ctx.slide.value === 0}>Previous Slide</button>
          <button onClick={ctx.methods.next} disabled={ctx.slide.value >= slides.length}>Next Slide</button>
        </div>
      </div>
    </>
  }
}