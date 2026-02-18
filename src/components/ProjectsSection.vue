<template>
  <section id="work" class="py-24 px-6 bg-slate-950 reveal">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-5xl font-display font-extrabold text-white mb-16 text-center">Selected Projects</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Quiz System -->
        <div class="group relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/5 bg-slate-900">
          <div class="h-64 overflow-hidden relative">
            <img src="../assets/Quiz.jpg" 
                 alt="Quiz Management System" 
                 class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
          </div>
          <div class="p-8 border-t border-white/5 relative z-10 bg-slate-900">
            <h3 class="text-xl font-bold text-white mb-2">Quiz Management System</h3>
            <p class="text-slate-500 text-sm">Scalable Assessment Engine for enterprise training and
              academic testing.</p>
          </div>
        </div>
        <!-- BlueBird -->
        <div class="group relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/5 bg-slate-900">
          <div class="h-64 overflow-hidden relative">
            <img src="../assets/bluebird.png" 
                 alt="BlueBird Marketplace" 
                 class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
             <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
          </div>
          <div class="p-8 border-t border-white/5 relative z-10 bg-slate-900">
            <h3 class="text-xl font-bold text-white mb-2">BlueBird Marketplace</h3>
            <p class="text-slate-500 text-sm">A full-featured buying and selling platform with real-time
              inventory management.</p>
          </div>
        </div>
        <!-- Ratings -->
        <div class="group relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/5 bg-slate-900 lg:col-span-1 md:col-span-2">
          <div class="h-64 overflow-hidden relative">
            <img src="../assets/Ratings.png" 
                 alt="Entertainment Ratings" 
                 class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
             <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
          </div>
          <div class="p-8 border-t border-white/5 relative z-10 bg-slate-900">
            <h3 class="text-xl font-bold text-white mb-2">Entertainment Ratings</h3>
            <p class="text-slate-500 text-sm">Community-driven platform for reviewing movies, games, and
              digital media.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection'
}
</script>
