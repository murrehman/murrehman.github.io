<template>
  <section id="achievements" class="py-24 px-6 bg-slate-950 reveal border-b border-white/5">
    <div class="max-w-7xl mx-auto text-center mb-16">
      <h2 class="text-4xl font-display font-extrabold text-white">Certifications & Awards</h2>
    </div>
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 text-sm">
      <!-- Column 1: Certifications -->
      <div class="space-y-4">
        <div class="p-5 bg-slate-900/50 rounded-2xl border border-white/5 flex gap-4 hover:border-primary/30 transition-all group">
          <Award class="text-primary group-hover:scale-110 transition-transform shrink-0 w-6 h-6" />
          <div>
            <p class="font-bold text-white">Microsoft Foundational C#</p>
            <p class="text-slate-500 text-xs uppercase mt-1">Microsoft</p>
          </div>
        </div>

        <div class="p-5 bg-slate-900/50 rounded-2xl border border-white/5 flex gap-4 hover:border-primary/30 transition-all group">
          <Code class="text-primary group-hover:scale-110 transition-transform shrink-0 w-6 h-6" />
          <div>
            <p class="font-bold text-white">Javascript Data Structures and Algorithms</p>
            <p class="text-slate-500 text-xs uppercase mt-1">FreeCodeCamp</p>
          </div>
        </div>
        <div class="p-5 bg-slate-900/50 rounded-2xl border border-white/5 flex gap-4 hover:border-primary/30 transition-all group">
          <Code class="text-primary group-hover:scale-110 transition-transform shrink-0 w-6 h-6" />
          <div>
            <p class="font-bold text-white">Google Digital Marketing</p>
            <p class="text-slate-500 text-xs uppercase mt-1">Certificate</p>
          </div>
        </div>
        <div class="p-5 bg-slate-900/50 rounded-2xl border border-white/5 flex gap-4 hover:border-primary/30 transition-all group">
          <Globe class="text-primary group-hover:scale-110 transition-transform shrink-0 w-6 h-6" />
          <div>
            <p class="font-bold text-white">Software Development for Enterprise Systems</p>
            <p class="text-slate-500 text-xs uppercase mt-1">The Open University</p>
          </div>
        </div>
        <div class="p-5 bg-slate-900/50 rounded-2xl border border-white/5 flex gap-4 hover:border-primary/30 transition-all group">
          <Code class="text-primary group-hover:scale-110 transition-transform shrink-0 w-6 h-6" />
          <div>
            <p class="font-bold text-white">LLMs and Prompting Techniques</p>
            <p class="text-slate-500 text-xs uppercase mt-1">CodeSignal</p>
          </div>
        </div>
      </div>
      <!-- Column 2: Awards -->
      <div class="space-y-4">
        <div class="p-5 bg-slate-900/50 rounded-2xl border border-white/5 flex gap-4 hover:border-yellow-500/30 transition-all group">
          <Medal class="text-yellow-500 group-hover:scale-110 transition-transform shrink-0 w-6 h-6" />
          <div>
            <p class="font-bold text-white">1st Place - High School</p>
            <p class="text-slate-500 text-xs uppercase mt-1">10th Grade Achievement 2012</p>
          </div>
        </div>
        <div class="p-5 bg-slate-900/50 rounded-2xl border border-white/5 flex gap-4 hover:border-yellow-500/30 transition-all group">
          <Medal class="text-yellow-500 group-hover:scale-110 transition-transform shrink-0 w-6 h-6" />
          <div>
            <p class="font-bold text-white">1st Place - Middle High School</p>
            <p class="text-slate-500 text-xs uppercase mt-1">8th Grade Achievement 2010</p>
          </div>
        </div>
        <div class="p-5 bg-slate-900/50 rounded-2xl border border-white/5 flex gap-4 hover:border-blue-500/30 transition-all group">
          <Trophy class="text-blue-400 group-hover:scale-110 transition-transform shrink-0 w-6 h-6" />
          <div>
            <p class="font-bold text-white">2nd Team Place - City Sports Club</p>
            <p class="text-slate-500 text-xs uppercase mt-1">Football Association 2011</p>
          </div>
        </div>
        <div class="p-5 bg-slate-900/50 rounded-2xl border border-white/5 flex gap-4 hover:border-primary/30 transition-all group">
          <Award class="text-primary group-hover:scale-110 transition-transform shrink-0 w-6 h-6" />
          <div>
            <p class="font-bold text-white">Oracle Certified AI Foundation Associate</p>
            <p class="text-slate-500 text-xs uppercase mt-1">Oracle</p>
          </div>
        </div>
        <div class="p-5 bg-slate-900/50 rounded-2xl border border-white/5 flex gap-4 hover:border-primary/30 transition-all group">
          <Code class="text-primary group-hover:scale-110 transition-transform shrink-0 w-6 h-6" />
          <div>
            <p class="font-bold text-white">Node.js Backend</p>
            <p class="text-slate-500 text-xs uppercase mt-1">HackerRank</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Award, Code, Globe, Medal, Trophy } from 'lucide-vue-next';

export default {
  name: 'AchievementsSection',
  components: { Award, Code, Globe, Medal, Trophy }
}
</script>
