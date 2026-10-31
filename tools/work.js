// Simulated work: prints a progress line every second for <seconds>.
const [project, target, seconds] = process.argv.slice(2);
const total = Number(seconds);
let done = 0;
console.log(`${project}:${target} starting (${total}s of work)`);
const timer = setInterval(() => {
  done += 1;
  console.log(`${project}:${target} ${'#'.repeat(done)}${'.'.repeat(total - done)} ${done}/${total}s`);
  if (done >= total) {
    clearInterval(timer);
    console.log(`${project}:${target} done`);
  }
}, 1000);
