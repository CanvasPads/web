<script lang="ts">
	import { setContext, type Snippet } from "svelte";
	import MenuItem from "./MenuItem.svelte";

  let isOpen = $state(false);
  
  let { button, popup, tooltip }: { button: Snippet, popup: Snippet, tooltip?: string } = $props();
</script>

<MenuItem tooltip={tooltip} onactive={() => {isOpen = !isOpen}}>
  <div class="menubar-menu-popup-wrapper">
    {@render button()}
    {#if isOpen}
    <div class="menubar-menu-popup">
      {@render popup()}
    </div>
    {/if}
  </div>
</MenuItem>

<style>
  .menubar-menu-popup-wrapper {
    position: relative;
  }

  .menubar-menu-popup {
    @apply bg-paper-white text-pencil-black px-5 py-3 min-w-[200px] shadow-lg shadow-theme-sky-shadow border-[1px] border-theme-sky-dark border-t-[5px] border-t-theme-sky rounded-lg;
    position: absolute;
    top: 130%;
    left: 50%;
    transform: translateX(-50%);

    z-index: 5;
  }
</style>
