<template>
  <section id="contact" class="py-24 px-6 reveal">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-5xl md:text-6xl font-display font-extrabold text-white mb-8 leading-tight">
        Let's work <span class="text-primary italic">together.</span>
      </h2>
      <div class="flex flex-col items-center gap-4">
        <a href="mailto:muteeurrehmanbajwa@gmail.com"
           class="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-950 rounded-xl font-bold hover:bg-primary hover:text-white transition-all text-lg shadow-lg shadow-white/5 hover:scale-105 transform duration-300">
          <Mail class="w-5 h-5" /> Connect!
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { Mail } from 'lucide-vue-next';

export default {
  name: 'ContactSection',
  components: { Mail }
}
</script>
