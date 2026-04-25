<template>
  <header class="groovy-header topDown">
    <!-- Outer row: avatar bleeds left, content fills right -->
    <div class="header-inner">
      <!-- Avatar: the groovy circle with the mug photo -->
      <div class="avatar-wrap">
        <div
          class="groovyCircle shadow-pre-trans"
          :class="{ 'shadow-transition': isMounted }"
        >
          <div class="mug jelloHorizontal" @click="$emit('toggleExtras')" />
        </div>
      </div>

      <!-- Content: CQ container — everything scales off this width -->
      <div class="content-cq" @click="$emit('toggleExtras')">
        <!--
          3-row stacked layout at all sizes:
          Row 1: DREW HARPER (biggest)
          Row 2: ui/ux designer + visual designer (matches name width)
          Row 3: email + Resume buttons (centered, or stacked on tiny mobile)
        -->
        <!-- name-wrap constrains subtitle to same width as DREW HARPER -->
        <div class="name-wrap">
          <div class="name-block">
            <mastDrew class="name-svg drew-svg" />
            <mastHarper class="name-svg harper-svg" />
          </div>

          <div class="subtitle-block">
            <span class="subtitle-line line1">{{ copy.uiuxDesigner }} +</span>
            <span class="subtitle-line line2">{{ copy.vizDesigner }}</span>
          </div>
        </div>

        <!-- Buttons -->
        <div class="buttons-row" @click.stop>
          <div class="groovyOvalBtn email-btn">
            <a :href="`mailto:` + `${copy.druEmail}`" class="btn-link">
              {{ copy.druEmail }}
            </a>
          </div>
          <div class="resume-group">
            <span class="resume-label">Resume:</span>
            <div class="groovyOvalBtn resumeBtn">
              <a
                :href="copy.resumeWord"
                target="_blank"
                title="Word Resume"
                aria-label="Word Resume"
                class="resumeIconLink"
              >
                <IconWordMini class="resumeIcon" />
              </a>
            </div>
            <div class="groovyOvalBtn resumeBtn">
              <a
                :href="copy.resumePDF"
                target="_blank"
                title="PDF Resume"
                aria-label="PDF Resume"
                class="resumeIconLink"
              >
                <IconPDF class="resumeIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  import IconWordMini from '~/components/Icons/iconWordMini.vue';
  import IconPDF from '~/components/Icons/iconPDF.vue';
  import mastDrew from './masthead/mastDrew.vue';
  import mastHarper from './masthead/mastHarper.vue';
  defineEmits(['toggleExtras']);
  const copy = useCopy();

  const isMounted = ref(false);

  onMounted(() => {
    setTimeout(() => {
      isMounted.value = true;
    }, 1500);
  });
</script>

<style scoped>
  @reference "../../../assets/css/tailwind.css";

  /* ═══════════════════════════════════════════════════════════
     HEADER SHELL — flexible height, overflows for circle bleed
     ═══════════════════════════════════════════════════════════ */
  .groovy-header {
    @apply text-base-ivory bg-groovy-red;
    overflow: visible; /* let circle bleed top, bottom, and left */
    position: relative;
  }

  /* ═══════════════════════════════════════════════════════════
     OUTER ROW: avatar | content
     Negative bottom margin so circle bleeds below the red box.
     ═══════════════════════════════════════════════════════════ */
  .header-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    /* Pull up AND down so circle overflows header top & bottom */
    margin-top: -1.5625rem; /* -25px */
    margin-bottom: -1.5625rem; /* -25px */
  }

  /* ═══════════════════════════════════════════════════════════
     AVATAR WRAP + CIRCLE
     ═══════════════════════════════════════════════════════════ */
  .avatar-wrap {
    position: relative;
    flex-shrink: 0;
    /* Default (desktop): 210px circle */
    width: 13.125rem;
    height: 13.125rem;
    /* Bleed left off the edge */
    left: -2.75rem;
    /* Pull content in — overlap only the clipped (invisible) left zone */
    margin-right: -2.75rem;
    top: -0.3125rem;

    /* Tablet / large phone */
    @media (max-width: 768px) {
      width: 11rem;
      height: 11rem;
      left: -2.25rem;
      margin-right: -2.25rem;
      top: -0.25rem;
    }

    /* Small phone */
    @media (max-width: 500px) {
      width: 9.5rem;
      height: 9.5rem;
      left: -1.75rem;
      margin-right: -1.75rem;
      top: -0.2rem;
    }

    @media (max-width: 375px) {
      width: 8.5rem;
      height: 8.5rem;
      left: -1.5rem;
      margin-right: -1.5rem;
    }

    @media (max-width: 340px) {
      width: 7.5rem;
      height: 7.5rem;
      left: -1.25rem;
      margin-right: -1.25rem;
    }
  }

  .shadow-pre-trans {
    @apply shadow-[1px_1px_0px_0px_hsl(0,0%,0%,50%)];
  }
  .shadow-transition {
    @apply transition duration-500 ease-out shadow-[8px_6px_0px_0px_hsl(0,0%,0%,25%)];
  }

  .groovyCircle {
    @apply w-full h-full rounded-[10em] z-10 block;
    /* Clip right side into a half-moon pointing right */
    clip-path: polygon(21% 0, 100% 0, 110% 50%, 100% 100%, 21% 110%);
    background-image: radial-gradient(
      #99f1ec 0%,
      #99f1ec 35%,
      #ffdd4b 35%,
      #ffdd4b 47%,
      #ff9f00 47%,
      #ff9f00 59%,
      #ff1a22 59%,
      #ff1a22 100%
    );
  }

  /* Mug photo inside circle */
  .mug {
    @apply absolute bg-[url('/img/drew_mug_sepia.webp')] bg-no-repeat bg-cover cursor-pointer;
    width: 6.125rem;
    height: 7.4375rem;
    left: 3.5rem;
    top: 2.8rem;

    @media (max-width: 768px) {
      width: 5.25rem;
      height: 6.375rem;
      left: 3rem;
      top: 2.4rem;
    }

    @media (max-width: 500px) {
      width: 4.5rem;
      height: 5.5rem;
      left: 2.5rem;
      top: 2rem;
    }

    @media (max-width: 375px) {
      width: 3.8rem;
      height: 4.6rem;
      left: 2rem;
      top: 1.7rem;
    }
  }

  /* ═══════════════════════════════════════════════════════════
     CONTENT — CQ CONTAINER
     3 stacked rows: name | subtitle | buttons
     ═══════════════════════════════════════════════════════════ */
  .content-cq {
    container-type: inline-size;
    container-name: masthead;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* children don't stretch — name-wrap stays intrinsic width */
    justify-content: center;
    cursor: pointer;
    padding-right: 1.5rem; /* more horizontal breathing room */
    padding-left: 1rem;
    min-width: 0;
    gap: 0.1rem; /* tighter vertical gap between the 3 rows */
  }

  /* ── name-wrap: inline column so subtitle matches name width ── */
  .name-wrap {
    display: inline-flex;
    flex-direction: column;
    align-items: stretch;
    flex-shrink: 0;
    gap: 0.05rem; /* tight gap between name and subtitle */
  }

  /* ── ROW 1: DREW HARPER name SVGs ── */
  .name-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;
    /* Gap between DREW and HARPER — always two distinct words */
    gap: 0.45rem;
  }

  /* SVG height — base, overridden by CQ below */
  .name-svg {
    height: 2rem;
    width: auto;
    display: block;
    transition: height 0.3s ease-out;
    flex-shrink: 0;
  }

  /* ── ROW 2: subtitle — stretches to match name-wrap width ── */
  .subtitle-block {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
    flex-shrink: 0;
    gap: 0.3em; /* minimum gap even when space-between is tight */
  }

  .subtitle-line {
    @apply text-base-ivory font-normal lowercase tracking-wide;
    font-size: 0.9rem;
    white-space: nowrap;
    display: block;
    transition: font-size 0.3s ease-out;
  }

  /* ── ROW 3: buttons — centered ── */
  .buttons-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 0.4rem 0.75rem;
    margin-top: 0.15rem;
  }

  .resume-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
  }

  .resume-label {
    @apply text-sm text-base-ivory;
  }

  /* ── Oval buttons ── */
  .groovyOvalBtn {
    @apply w-fit py-[.1rem] px-3 pb-[.2rem] border border-groovy-orange border-solid rounded-full leading-normal tracking-wide hover:bg-groovy-red-dk hover:text-white hover:cursor-pointer;

    &.email-btn a.btn-link {
      @apply text-base-ivory no-underline;
      white-space: nowrap;
      font-size: 0.85rem;
    }

    &.resumeBtn {
      @apply text-[0.75rem] flex items-center gap-1;

      &:hover a.resumeIconLink .resumeIcon {
        @apply fill-base-ivory text-black;
      }

      a.resumeIconLink {
        @apply inline-flex items-center gap-1 no-underline text-base-ivory text-[0.75rem] mr-1;

        &:hover {
          @apply underline underline-offset-3;
        }

        .resumeIcon {
          @apply w-3.5 fill-black text-base-ivory;

          &:hover {
            @apply fill-base-ivory text-black;
          }
        }
      }
    }
  }

  /* ═══════════════════════════════════════════════════════════
     CONTAINER QUERIES
     All sizes use the same 3-row stacked layout.
     Only sizes change — name gets bigger, subtitle scales up.
     ═══════════════════════════════════════════════════════════ */

  /* ── LARGE ≥600cqi: Desktop / wide tablet landscape ── */
  @container masthead (width >= 600px) {
    .name-block {
      gap: 0.6rem;
    }

    .name-svg {
      height: 3.4rem;
    }

    .subtitle-line {
      font-size: 1.45rem;
    }

    .buttons-row {
      justify-content: flex-start;
      margin-top: 0.3rem;
    }

    .email-btn a.btn-link {
      font-size: 0.85rem;
    }
  }

  /* ── MEDIUM 380–599cqi: Tablet portrait / large phone landscape ── */
  @container masthead (width >= 380px) and (width < 600px) {
    .name-block {
      gap: 0.5rem;
    }

    .name-svg {
      height: 2.5rem;
    }

    .subtitle-line {
      font-size: 1.05rem;
    }

    .buttons-row {
      justify-content: flex-start;
      margin-top: 0.2rem;
    }

    .email-btn a.btn-link {
      font-size: 0.8rem;
    }
  }

  /* ── SMALL 220–379cqi: Large phone portrait ── */
  @container masthead (width >= 220px) and (width < 380px) {
    .name-block {
      gap: 0.35rem;
    }

    .name-svg {
      height: 1.7rem;
    }

    .subtitle-line {
      font-size: 0.75rem;
    }

    .buttons-row {
      justify-content: flex-start;
      margin-top: 0.15rem;
      gap: 0.3rem 0.5rem;
    }

    .email-btn a.btn-link {
      font-size: 0.72rem;
    }
  }

  /* ── TINY <220cqi: Small phone — stack email + resume on separate lines ── */
  @container masthead (width < 220px) {
    .name-block {
      gap: 0.25rem;
    }

    .name-svg {
      height: 1.3rem;
      flex-shrink: 1;
      min-width: 0;
    }

    .subtitle-line {
      font-size: 0.6rem;
    }

    .buttons-row {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: 0.15rem;
      gap: 0.2rem;
    }

    .email-btn a.btn-link {
      font-size: 0.65rem;
    }
  }
</style>
