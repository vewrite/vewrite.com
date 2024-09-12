export default defineNuxtPlugin(() => {
  const { initialize } = useHotjar()
  initialize()
})