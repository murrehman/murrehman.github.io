<template>
  <section id="skills" class="py-24 px-6 bg-slate-900/30 reveal">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-display font-extrabold text-white mb-16 text-center">Technical Stack</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
        <div>
          <h4 class="text-primary font-bold uppercase text-xs tracking-widest mb-6">Frontend</h4>
          <ul class="text-slate-400 space-y-3 font-medium">
            <li>Javascript(ES6+) / Typescript</li>
            <li>Reactjs / Redux / Zustand</li>
            <li>Angular(2+) / NGXS</li>
            <li>Vuejs / Vuex / Vite</li>
            <li>HTML / CSS / Tailwindcss</li>
            <li>Material UI / Ant Design / Bootstrap</li>
          </ul>
        </div>
        <div>
          <h4 class="text-primary font-bold uppercase text-xs tracking-widest mb-6">Backend & APIs</h4>
          <ul class="text-slate-400 space-y-3 font-medium">
            <li>Nodejs / Expressjs</li>
            <li>REST API / React Query</li>
            <li>Postman</li>
          </ul>
        </div>
        <div>
          <h4 class="text-primary font-bold uppercase text-xs tracking-widest mb-6">Infrastructure & Cloud
          </h4>
          <ul class="text-slate-400 space-y-3 font-medium">
            <li>Azure DevOps / CI/CD Jenkins</li>
            <li>Docker / Git / Jira</li>
            <li>Confluence / Azure Wiki</li>
            <li>Azure Data Studio</li>
            <li>Azure AI search</li>
          </ul>
        </div>
        <div>
          <h4 class="text-primary font-bold uppercase text-xs tracking-widest mb-6">Database & Testing
          </h4>
          <ul class="text-slate-400 space-y-3 font-medium">
            <li>Postgresql / SQL Database</li>
            <li>MongoDb / Google Firebase</li>
            <li>Playwright / Jasmine</li>
            <li>Unit/Integration Testing</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection'
}
</script>
