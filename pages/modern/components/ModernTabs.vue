<template>
  <div class="flex flex-row flex-wrap justify-center gap-4 mx-0 mb-3 font-modernCopy mt-7">
    <nuxt-link :to="{ name: 'ModernProjects' }" class="btn projectsTab">
      Projects
    </nuxt-link>
    <nuxt-link :to="{ name: 'ModernSkills' }" class="btn skillsTab">
      Skills
    </nuxt-link>
    <nuxt-link :to="{ name: 'ModernAbout' }" class="btn aboutTab">
      About
    </nuxt-link>
  </div>
</template>

<!-- <nuxt-link :to="{ name: 'Bourbon' }" -->

<script setup></script>

<style scoped>

  .btn {
    @apply text-black pt-[.55rem] px-5 pb-[.4rem] rounded-[2rem] no-underline uppercase text-[.6rem] font-semibold tracking-[0.075ch] bg-modern-ruby bg-gradient-to-b from-[#D71D5B] to-[#871239] hover:bg-modern-ruby hover:text-white hover:bg-gradient-to-b hover:from-[#D71D5B] hover:to-[#871239];
  }
  body.modern.projects a.projectsTab,
  body.modern.skills a.skillsTab,
  body.modern.about a.aboutTab {
    @apply text-white;
  }

</style>
