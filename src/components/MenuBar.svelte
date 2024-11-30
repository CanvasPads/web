<script lang="ts">
	import LogoCompact from "$lib/assets/LogoCompact.svelte";
	import { ArrowLeft, Plus, Share, Cog, Undo2, Redo2, GitBranch, Menu } from "lucide-svelte";
	import DropdownMenuItem from "./DropdownMenuItem.svelte";
	import MenuItem from "./MenuItem.svelte";
</script>

<div class="menubar-container">
  <div class="flex gap-6 items-center">
    <nav>
      <ul class="menubar-menu">
        <li>
          <a href="/browse">
            <MenuItem tooltip="Browse files">
              <ArrowLeft class="menubar-menu-icon" />Browse files
            </MenuItem>
          </a>
        </li>
      </ul>
    </nav>
    <MenuItem tooltip="Project configuration">
    <div class="menubar-commandbar"><span class="opacity-75 text-sm select-auto">上高地旅行スケジュール.cpad</span></div>
    </MenuItem>
    <nav>
      <ul class="menubar-menu">
        <li>
          <MenuItem tooltip="Undo">
            <Undo2 class="menubar-menu-icon" />
          </MenuItem>
        </li>
        <li class="menubar-menu-item">
          <MenuItem tooltip="Redo">
            <Redo2 class="menubar-menu-icon" />
          </MenuItem>
        </li>
        <li class="menubar-menu-item">
          <DropdownMenuItem tooltip="History">
            {#snippet button()}
              <GitBranch class="menubar-menu-icon" />      
            {/snippet}
            {#snippet popup()}
              <div>Show version history</div>
              <div>Delete version history</div>
            {/snippet}
          </DropdownMenuItem>
        </li>
      </ul>
    </nav>
  </div>
  <nav>
    <ul class="menubar-menu">
      <li class="menubar-menu-item">
        <MenuItem tooltip="New">
          <Plus class="menubar-menu-icon" />
        </MenuItem>
      </li>
      <li class="menubar-menu-item">
        <MenuItem tooltip="Share">
          <Share class="menubar-menu-icon" />
        </MenuItem>
      </li>
      <li class="menubar-menu-item">
        <MenuItem tooltip="Settings">
          <Cog class="menubar-menu-icon" />
        </MenuItem>
      </li>
      <li class="menubar-menu-item">
        <MenuItem tooltip="🎨">
          <LogoCompact width=120 />
        </MenuItem>
      </li>
    </ul>
  </nav>
</div>

<style>
  .menubar-container {
    @apply bg-paper-white bg-opacity-70 text-pencil-black border-t-2 border-t-white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    backdrop-filter: blur(10px);
    padding: 10px 20px;
  }
  .menubar-menu {
    @apply flex items-center justify-between gap-5 text-sm select-none;
  }
  .menubar-commandbar {
    @apply block cursor-pointer px-3 py-0.5 text-center min-w-[150px]
      rounded-sm bg-theme-sky bg-opacity-30 border-b-[1px] border-b-pencil-black;
  }
</style>
