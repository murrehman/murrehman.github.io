<template>
  <section id="about" class="py-24 px-6 bg-slate-900/50 reveal">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-2 gap-16 items-start">
        <div class="relative">
          <div class="aspect-square rounded-3xl overflow-hidden bg-slate-800 ring-1 ring-white/10">
            <img src="../assets/my.png"
                 alt="Profile"
                 class="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          </div>
        </div>
        <div>
          <h2 class="text-4xl font-display font-extrabold text-white mb-8 leading-tight">
            Building for <span class="text-primary">Performance & Scale</span>.
          </h2>
          <p class="text-lg text-slate-300 mb-8 leading-relaxed">
            I’m a Software developer with hands‑on experience in Web Development building performant,
            user‑focused applications. Analytical thinking and problem solving are my key skills.
          </p>
          <p class="text-slate-400 mb-10 leading-relaxed">
            My approach combines technical excellence with a deep understanding of positive business
            outcomes. I transform requirements into intuitive digital ecosystems.
          </p>

          <div class="flex gap-4 mt-6">
            <a href="https://github.com/murrehman" target="_blank"
               class="p-3 bg-slate-800 rounded-xl hover:bg-primary transition-all group border border-white/5">
              <Github class="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
            </a>
            <a href="https://xing.com/profile/Mutee_UrRehman" target="_blank"
               class="p-3 bg-slate-800 rounded-xl hover:bg-primary transition-all group border border-white/5">
              <svg class="w-6 h-6 fill-slate-300 group-hover:fill-white transition-colors"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.45 13.224-7.702 13.657-.015.024-4.912-9.123-4.912-9.123-.217-.38-.482-.6-.998-.6H1.32c-.19 0-.358.15-.429.326-.07.175-.032.37.095.513l4.796 8.663-9.22 15.332c-.12.202-.11.454.03.645.14.192.376.303.614.303h3.513c.523 0 .794-.365.99-.72l9.22-15.332s4.664 8.513 4.8 8.765c.176.31.424.643.926.643h3.55c.19 0 .358-.15.429-.326.07-.175.032-.37-.095-.513l-4.685-8.337L22.692.962c.122-.202.112-.454-.03-.645-.14-.192-.376-.303-.614-.303h-3.86z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/mutee-urrehman/" target="_blank"
               class="p-3 bg-slate-800 rounded-xl hover:bg-primary transition-all group border border-white/5">
              <Linkedin class="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Github, Linkedin } from 'lucide-vue-next';

export default {
  name: 'AboutSection',
  components: { Github, Linkedin }
}
</script>
