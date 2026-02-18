<template>
  <nav class="fixed w-full z-50 glass">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="#" class="text-2xl font-extrabold tracking-tight text-white">
        MUTEE<span class="text-primary">.</span>
      </a>
      <div class="hidden md:flex items-center space-x-10 text-sm font-semibold text-slate-400">
        <a href="#about" class="hover:text-primary transition-colors">About</a>
        <a href="#experience" class="hover:text-primary transition-colors">Experience</a>
        <a href="#skills" class="hover:text-primary transition-colors">Skills</a>
        <a href="#achievements" class="hover:text-primary transition-colors">Achievements</a>
        <a href="#work" class="hover:text-primary transition-colors">Work</a>
        <a href="#contact"
           class="px-5 py-2.5 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-all">Get
          in touch</a>
      </div>
      <button class="md:hidden p-2 text-slate-400" @click="toggleMenu">
        <Menu class="w-6 h-6" />
      </button>
    </div>
    <!-- Mobile Menu -->
    <div v-show="isMobileMenuOpen" id="mobile-menu"
         class="md:hidden absolute w-full bg-slate-900 border-b border-white/5 px-6 py-8 flex flex-col space-y-6 text-lg font-medium shadow-xl">
      <a href="#about" @click="toggleMenu" class="text-slate-300">About</a>
      <a href="#experience" @click="toggleMenu" class="text-slate-300">Experience</a>
      <a href="#skills" @click="toggleMenu" class="text-slate-300">Skills</a>
      <a href="#achievements" @click="toggleMenu" class="text-slate-300">Achievements</a>
      <a href="#work" @click="toggleMenu" class="text-slate-300">Work</a>
      <a href="#contact" @click="toggleMenu" class="text-primary font-bold">Contact</a>
    </div>
  </nav>
</template>

<script>
import { Menu } from 'lucide-vue-next';

export default {
  name: 'NavBar',
  components: { Menu },
  data() {
    return {
      isMobileMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }
}
</script>
