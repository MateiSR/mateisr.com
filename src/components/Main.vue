<script setup lang="ts">
import { computed } from 'vue';


// Assuming this is your social links data
const socialLinks = [
  { icon: ['fab', 'discord'], link: '@mateisr' },
  { icon: ['fab', 'linkedin'], link: 'https://www.linkedin.com/in/matei-radu-4a4718196/', linkText: "linkedin" },
  { icon: ['fab', 'github'], link: 'https://github.com/MateiSR', linkText: "github" },
  { icon: ['fas', 'screwdriver-wrench'], link: 'https://tools.mateisr.com/', linkText: "tools (wip)", },
  { icon: ['fas', 'key'], link: 'https://gist.githubusercontent.com/MateiSR/5bec7d2acca024f081d5dcb0b92786c6/raw/25b63ac75dd7544c240efa19582c01453ceaf9cd/gistfile1.txt', linkText: "public ssh key" }
  // Add more social links as needed
];

const rows = computed(() => {
  const itemsPerRow = 2;
  const rowsArray = [];

  for (let i = 0; i < socialLinks.length; i += itemsPerRow) {
    rowsArray.push(socialLinks.slice(i, i + itemsPerRow));
  }

  return rowsArray;
});
</script>

<template>
  <div class="flex-container">
    <div class="row">
      <div class="flex-item">
        <h1>mateisr</h1>
        <h2>Matei Radu</h2>
        <p>student <span class="text-blue-500">@</span> <span class="link"><a href="https://www.info.uaic.ro/">Faculty of
              Computer Science,
              Iasi</a></span></p>

        <template v-for="(row, rowIndex) in rows" :key="rowIndex">
          <template v-for="(link, linkIndex) in row" :key="linkIndex">
            <font-awesome-icon :icon="link.icon" class="mr-2" />
            <span v-if="link.link" class="link">
              <a :href="link.link" target="_blank">{{ link.linkText || link.link }}</a>
            </span>
            <span v-else class="link">{{ link.linkText || link.link }}</span>
            <!--<span class="dot" />-->
            <span v-if="linkIndex !== row.length - 1" class="dot" />
          </template>
          <br v-if="rowIndex !== rows.length - 1" />
        </template>
        <!--Add a email field-->
        <br />
        <div class="mt-4">
          <font-awesome-icon class="mr-2" :icon="['fas', 'envelope']" />
          <span class="link"><a href="mailto:mateisr@proton.me">mateisr@proton.me</a></span>
        </div>
      </div>
    </div>
  </div>
</template>
