<template>
  <div id="flash-overlay" ref="flashOverlay" class="fixed inset-0 flex flex-col items-center justify-center" @click="closeFlash">
    <!-- Slide 1: Intro & Skills Summary -->
    <div id="slide-1" class="flash-slide active text-center" @click="closeFlash">
      <span class="text-primary font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">Professional Introduction</span>
      <h1 class="text-3xl md:text-5xl font-display font-extrabold text-white mb-6 animate-fade-in-up"
          style="animation-delay: 0.1s">
        I am Mutee.<br />
        <span class="text-slate-400 italic">Creative Developer.</span>
      </h1>
      <p class="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in-up font-light"
         style="animation-delay: 0.2s">
        I’m a Software developer with hands‑on experience in Web Development building performant, user‑focused
        applications. Analytical thinking and problem solving are my key skills. I'm a results-driven and
        innovative Developer with a proven track record of delivering impactful solutions and driving positive
        business outcomes. My passion lies in transforming complex business requirements into <span
          class="text-white font-medium">intuitive products that scale.</span>
      </p>
      <div class="flex flex-wrap justify-center gap-2 animate-fade-in-up max-w-2xl mx-auto"
           style="animation-delay: 0.3s">
        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs">Javascript(ES6+)/Typescript</span>
        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs">Nodejs/Expressjs</span>
        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs">React/Angular/Vue</span>
        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs">Azure DevOps</span>
        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs">CI/CD Jenkins</span>
        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs">Docker</span>
        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs">Playwright</span>
        <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs">PostgreSQL/Mongo</span>
      </div>
      <p class="text-slate-500 text-[10px] uppercase tracking-widest mt-8 opacity-50">click to skip</p>
    </div>

    <!-- Slide 2: Certifications and Awards -->
    <div id="slide-2" class="flash-slide text-center" @click="closeFlash">
      <span class="text-primary font-bold tracking-[0.2em] uppercase mb-4">Recognition</span>
      <h1 class="text-3xl md:text-5xl font-display font-extrabold text-white mb-8">
        Certifications<br />
        <span class="text-slate-400 italic">and Awards.</span>
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">
        <div class="space-y-3">
          <div class="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4">
            <div class="mt-1 p-2 bg-primary/10 rounded-lg text-primary"><Code class="w-5 h-5" /></div>
            <div>
              <p class="text-white font-semibold leading-tight text-sm">LLMs and Prompting Techniques</p>
              <p class="text-slate-500 text-[10px] uppercase tracking-wider mt-1">CodeSignal</p>
            </div>
          </div>
          <div class="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4">
            <div class="mt-1 p-2 bg-primary/10 rounded-lg text-primary"><Globe class="w-5 h-5" /></div>
            <div>
              <p class="text-white font-semibold leading-tight text-sm">Software Development for Enterprise Systems</p>
              <p class="text-slate-500 text-[10px] uppercase tracking-wider mt-1">The Open University</p>
            </div>
          </div>
          <div class="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4">
            <div class="mt-1 p-2 bg-primary/10 rounded-lg text-primary"><Award class="w-5 h-5" /></div>
            <div>
              <p class="text-white font-semibold leading-tight text-sm">Oracle Certified AI Foundation Associate</p>
              <p class="text-slate-500 text-[10px] uppercase tracking-wider mt-1">Oracle</p>
            </div>
          </div>
        </div>
        <div class="space-y-3">
          <div class="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4">
            <div class="mt-1 p-2 bg-yellow-500/10 rounded-lg text-yellow-500"><Medal class="w-5 h-5" /></div>
            <div>
              <p class="text-white font-semibold leading-tight text-sm">1st Place - High School</p>
              <p class="text-slate-500 text-[10px] uppercase tracking-wider mt-1">10th Grade 2012</p>
            </div>
          </div>
          <div class="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4">
            <div class="mt-1 p-2 bg-yellow-500/10 rounded-lg text-yellow-500"><Medal class="w-5 h-5" /></div>
            <div>
              <p class="text-white font-semibold leading-tight text-sm">1st Place - Middle High School</p>
              <p class="text-slate-500 text-[10px] uppercase tracking-wider mt-1">8th Grade 2010</p>
            </div>
          </div>
          <div class="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4">
            <div class="mt-1 p-2 bg-blue-500/10 rounded-lg text-blue-400"><Trophy class="w-5 h-5" /></div>
            <div>
              <p class="text-white font-semibold leading-tight text-sm">2nd Team Place - City Sports Club</p>
              <p class="text-slate-500 text-[10px] uppercase tracking-wider mt-1">Football Association 2011</p>
            </div>
          </div>
        </div>
      </div>
      <p class="text-slate-500 text-[10px] uppercase tracking-widest mt-8 opacity-50">click to skip</p>
    </div>

    <!-- Slide 3: Projects Preview (AI Thumbnails) -->
    <div id="slide-3" class="flash-slide text-center" @click="closeFlash">
      <span class="text-primary font-bold tracking-[0.2em] uppercase mb-4">Portfolio</span>
      <h1 class="text-3xl md:text-5xl font-display font-extrabold text-white mb-8">
        Impactful<br />
        <span class="text-slate-400 italic">Digital Products.</span>
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-4xl">
        <!-- Project 1 -->
        <div class="group/p">
          <div class="aspect-video mb-3 rounded-xl overflow-hidden ring-1 ring-white/10 bg-slate-900 relative ai-thumb-glow">
            <img src="../assets/Quiz.jpg" alt="Quiz Management System" class="w-full h-full object-cover opacity-80 group-hover/p:opacity-100 transition-opacity duration-500" />
          </div>
          <p class="text-white font-bold text-[10px] uppercase tracking-widest">Quiz Management System</p>
        </div>
        <!-- Project 2 -->
        <div class="group/p">
          <div class="aspect-video mb-3 rounded-xl overflow-hidden ring-1 ring-white/10 bg-slate-900 relative ai-thumb-glow">
            <img src="../assets/bluebird.png" alt="BlueBird Marketplace" class="w-full h-full object-cover opacity-80 group-hover/p:opacity-100 transition-opacity duration-500" />
          </div>
          <p class="text-white font-bold text-[10px] uppercase tracking-widest">BlueBird Marketplace</p>
        </div>
        <!-- Project 3 -->
        <div class="group/p">
          <div class="aspect-video mb-3 rounded-xl overflow-hidden ring-1 ring-white/10 bg-slate-900 relative ai-thumb-glow">
             <img src="../assets/Ratings.png" alt="Entertainment Ratings" class="w-full h-full object-cover opacity-80 group-hover/p:opacity-100 transition-opacity duration-500" />
          </div>
          <p class="text-white font-bold text-[10px] uppercase tracking-widest">Entertainment Ratings</p>
        </div>
      </div>
      <p class="text-slate-500 text-[10px] uppercase tracking-widest mt-8 opacity-50">click to skip</p>
    </div>

    <!-- Slide Navigation Dots -->
    <div class="absolute bottom-12 flex gap-3 z-[10001]">
      <div v-for="n in 3" :key="n"
           class="w-2 h-2 rounded-full transition-all duration-300"
           :class="currentSlide === n ? 'bg-white scale-125' : 'bg-white/20'">
      </div>
    </div>
  </div>
</template>

<script>
import { Award, Code, Globe, Medal, Trophy } from 'lucide-vue-next';

export default {
  name: 'FlashOverlay',
  components: { Award, Code, Globe, Medal, Trophy },
  props: {
    start: { type: Boolean, default: false }
  },
  data() {
    return {
      currentSlide: 1,
      totalSlides: 3,
      slideInterval: 3500,
      flashTimer: null
    };
  },
  watch: {
    start(val) {
      if (val) {
        this.runSequence();
      }
    }
  },
  methods: {
    runSequence() {
      // Show overlay
      const overlay = this.$refs.flashOverlay;
      overlay.style.opacity = '1';
      overlay.style.pointerEvents = 'auto';

      this.showSlide(1);
      this.flashTimer = setInterval(this.nextSlide, this.slideInterval);
    },
    showSlide(n) {
      // Logic adapted for Vue - we use class binding mostly but for slide transitions
      // existing CSS uses .active and .exit classes on specific IDs.
      // We can replicate logic by manually manipulating DOM or using Vue data to drive classes.
      // For simplicity/direct port, let's use DOM manip or clearer Vue way.
      // The CSS relies on IDs #slide-1 etc. I kept IDs.
      
      // But Vue way: :class="{ active: currentSlide === n, exit: currentSlide > n }" won't exactly match "slide < n" logic for exit.
      // The original logic:
      // if (slideNum === n) slide.classList.add('active');
      // else if (slideNum < n) slide.classList.add('exit');
      // So if I am on slide 2: slide 1 is exit, slide 2 is active, slide 3 is normal (hidden by CSS default? No, default is translate 100vw)

      // Let's use direct DOM manipulation here to match original exactly or bind classes carefully.
      // Trying class binding:
      // Slide 1: active if currentSlide == 1, exit if 1 < currentSlide (i.e. Slide 2 or 3)
      for (let i = 1; i <= this.totalSlides; i++) {
        const slide = this.$el.querySelector(`#slide-${i}`);
        if(slide) {
            slide.classList.remove('active', 'exit');
            if (i === this.currentSlide) slide.classList.add('active');
            else if (i < this.currentSlide) slide.classList.add('exit');
        }
      }
    },
    nextSlide() {
      if (this.currentSlide < this.totalSlides) {
        this.currentSlide++;
      } else {
        this.currentSlide = 1;
      }
      this.showSlide(this.currentSlide);
    },
    closeFlash() {
      if (this.flashTimer) clearInterval(this.flashTimer);
      const overlay = this.$refs.flashOverlay;
      
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.style.display = 'none';
        this.$emit('flash-complete');
      }, 800);
    }
  },
  beforeUnmount() {
    if (this.flashTimer) clearInterval(this.flashTimer);
  }
}
</script>

<style scoped>
/* Styles already in global css */
</style>
