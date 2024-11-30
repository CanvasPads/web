<script lang="ts">
	import MenuBar from "../../components/MenuBar.svelte";
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<MenuBar />

<div class="a"></div>

<h1>{data.path}</h1>

<style>
.a {
  position: fixed;
  top: 0;
  left: 0;
  width: 160px;
  height: 100px;
  background-color: red;
  z-index: -1;
}
</style>
