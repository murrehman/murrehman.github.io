<template>
  <div class="text-slate-300 overflow-x-hidden no-scroll" :class="{ 'no-scroll': showWelcome || showFlash }">
    <!-- Welcome Screen -->
    <WelcomeScreen v-if="showWelcome" @welcome-complete="onWelcomeComplete" />

    <!-- Flash Banner Overlay -->
    <FlashOverlay v-show="showFlash" :start="startFlash" @flash-complete="onFlashComplete" />

    <!-- Main Content -->
    <main id="main-content" :class="{ 'blurred': showFlash }" class="transition-all duration-1000 bg-slate-950">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <AchievementsSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  </div>
</template>

<script>
import WelcomeScreen from './components/WelcomeScreen.vue'
import FlashOverlay from './components/FlashOverlay.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import AchievementsSection from './components/AchievementsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    WelcomeScreen,
    FlashOverlay,
    NavBar,
    HeroSection,
    AboutSection,
    ExperienceSection,
    AchievementsSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
    SiteFooter
  },
  data() {
    return {
      showWelcome: true,
      showFlash: false,
      startFlash: false
    }
  },
  methods: {
    onWelcomeComplete() {
      this.showWelcome = false;
      this.showFlash = true;
      // Start flash sequence
      this.startFlash = true;
    },
    onFlashComplete() {
      this.showFlash = false;
      this.startFlash = false;
      // Trigger reveal check initially
      setTimeout(this.reveal, 200);
    },
    reveal() {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;
      reveals.forEach(r => {
        const top = r.getBoundingClientRect().top;
        if (top < windowHeight - 100) r.classList.add("active");
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.reveal);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.reveal);
  }
}
</script>

<style>
/* Global styles are in style.css, but we can add component specific ones here */
</style>
