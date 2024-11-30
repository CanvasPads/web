<script lang="ts">
	import type { Snippet } from "svelte";

  let { 
    children,
    tooltip,
    onactive = () => {}
  }: {
    children: Snippet,
    tooltip?: string,
    onactive?: () => void
  } = $props();

  let isTooltipVisible = $state(false);

  const showTooltip = () => {
    isTooltipVisible = true;
  };

  const hideTooltip = () => {
    isTooltipVisible = false;
  };
</script>

<div class="menubar-menu-item" onmousedown={() => {
  onactive(); hideTooltip();
}} onmouseenter={showTooltip} onmouseleave={hideTooltip} role="button" tabindex=0>
  {@render children()}
  {#if isTooltipVisible && tooltip}
  <div class="menubar-menu-tooltip">{tooltip}</div>
  {/if}
</div>

<style>
  .menubar-menu-item :global(.menubar-menu-icon) {
    @apply w-5;
  }
  .menubar-menu-item {
    @apply flex items-center gap-1 cursor-pointer;

    position: relative;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .menubar-menu-tooltip {
    @apply bg-paper-white text-pencil-black border-[1px] border-theme-sky-dark border-b-2 px-2 py-0.5 rounded-md text-sm;

    animation: fadeIn .1s linear;
    animation-delay: .2s;
    animation-fill-mode: forwards;
    opacity: 0;
    
    position: absolute;
    top: 130%;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;

    white-space: nowrap;
    overflow: hidden;

    z-index: 2;
  }
</style>
