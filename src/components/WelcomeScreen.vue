<template>
  <div id="welcome-screen" ref="welcomeScreen">
    <div id="welcome-text-el" ref="welcomeText" class="welcome-text animate-tracking-in-expand animate-shimmer">
      WELCOME HOME
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeScreen',
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      // Logic from index1.html
      const textEl = this.$refs.welcomeText;
      const welcome = this.$refs.welcomeScreen;

      setTimeout(() => {
        textEl.style.opacity = '0';
        setTimeout(() => {
          textEl.innerHTML = 'MUTEE UR REHMAN';
          textEl.style.opacity = '1';
          textEl.classList.remove('animate-tracking-in-expand');
          void textEl.offsetWidth; // Trigger reflow
          textEl.classList.add('animate-tracking-in-expand');

          setTimeout(() => {
            welcome.style.opacity = '0';
            setTimeout(() => {
              welcome.style.display = 'none';
              this.$emit('welcome-complete');
            }, 1000);
          }, 2500);
        }, 600);
      }, 2000);
    }
  }
}
</script>

<style scoped>
/* Scoped styles if needed, but global styles handle most */
</style>
