<script>
  import { markRaw, defineAsyncComponent } from 'vue'
  
  const iconUiux = markRaw(defineAsyncComponent(() => import('./iconUiux.vue')))
  const iconHtml5 = markRaw(defineAsyncComponent(() => import('./iconHtml5.vue')))
  const iconCss3 = markRaw(defineAsyncComponent(() => import('./iconCss3.vue')))
  const iconJs = markRaw(defineAsyncComponent(() => import('./iconJs.vue')))
  const iconAdobeIcons = markRaw(defineAsyncComponent(() => import('./iconAdobeIcons.vue')))
  const iconSass = markRaw(defineAsyncComponent(() => import('./iconSass.vue')))
  const iconVue = markRaw(defineAsyncComponent(() => import('./iconVue.vue')))
  const iconAffinityIcons = markRaw(defineAsyncComponent(() => import('./iconAffinityIcons.vue')))
  const iconTailwind = markRaw(defineAsyncComponent(() => import('./iconTailwind.vue')))
  const iconFigma = markRaw(defineAsyncComponent(() => import('./iconFigma.vue')))
  const iconNuxt = markRaw(defineAsyncComponent(() => import('./iconNuxt.vue')))
  const iconChelsea = markRaw(defineAsyncComponent(() => import('./iconChelsea.vue')))

  export { 
    iconUiux,
    iconHtml5,
    iconCss3,
    iconJs,
    iconAffinityIcons,
    iconSass,
    iconVue,
    iconAdobeIcons,
    iconTailwind,
    iconFigma,
    iconNuxt,
    iconChelsea
  }
</script>
