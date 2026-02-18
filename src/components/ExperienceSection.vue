<template>
  <section id="experience" class="py-24 px-6 bg-slate-950 reveal border-y border-white/5">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-display font-extrabold text-white mb-16 text-center">Professional Experience
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Amazon -->
        <div class="p-8 bg-slate-900/50 rounded-3xl border border-white/5 flex flex-col items-center text-center hover:border-primary/30 transition-all group">
          <div class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <ShoppingCart class="text-primary w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">Amazon</h3>
          <p class="text-slate-500 text-sm italic mb-4">Software Engineering / E-commerce</p>
          <p class="text-slate-400 text-sm leading-relaxed">Contributed to high-scale cloud services and
            optimization of customer-centric digital platforms.</p>
        </div>
        <!-- PERI -->
        <div class="p-8 bg-slate-900/50 rounded-3xl border border-white/5 flex flex-col items-center text-center hover:border-primary/30 transition-all group">
          <div class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Building2 class="text-primary w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">PERI</h3>
          <p class="text-slate-500 text-sm italic mb-4">Industrial Technology Solutions</p>
          <p class="text-slate-400 text-sm leading-relaxed">Developed performant enterprise applications
            focusing on process automation and digital transformation.</p>
        </div>
        <!-- Fiverr -->
        <div class="p-8 bg-slate-900/50 rounded-3xl border border-white/5 flex flex-col items-center text-center hover:border-primary/30 transition-all group">
          <div class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Briefcase class="text-primary w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">Fiverr</h3>
          <p class="text-slate-500 text-sm italic mb-4">Freelance Software Development</p>
          <p class="text-slate-400 text-sm leading-relaxed">Delivered over dozen high-quality full-stack
            solutions for global clients, ensuring high customer satisfaction.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ShoppingCart, Building2, Briefcase } from 'lucide-vue-next';

export default {
  name: 'ExperienceSection',
  components: { ShoppingCart, Building2, Briefcase }
}
</script>
