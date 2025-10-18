let use24Hour = true;
const timeEl = document.getElementById('time');
const ampmEl = document.getElementById('ampm');
const dateEl = document.getElementById('date');
const toggleBtn = document.getElementById('toggleFormat');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const body = document.body;

function pad(n) { return n < 10 ? '0' + n : n; }

function formatDate(d) {
  const hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
  const bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
  return `${hari[d.getDay()]}, ${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
}

function setThemeByTime(h) {
  if (h >= 6 && h < 18) {
    body.style.background = "linear-gradient(180deg, #A7C7E7, #FEEBC8)";
    sun.style.opacity = 1;
    moon.style.opacity = 0;
  } else {
    body.style.background = "linear-gradient(180deg, #1A1F3C, #0B132B)";
    sun.style.opacity = 0;
    moon.style.opacity = 1;
  }
}

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  setThemeByTime(h);

  if (use24Hour) {
    timeEl.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
    ampmEl.style.display = 'none';
    toggleBtn.textContent = '24-hour';
  } else {
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    timeEl.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
    ampmEl.textContent = ampm;
    ampmEl.style.display = 'inline';
    toggleBtn.textContent = '12-hour';
  }

  dateEl.textContent = formatDate(now);
}

toggleBtn.addEventListener('click', () => {
  use24Hour = !use24Hour;
  updateClock();
});

updateClock();
setInterval(updateClock, 1000);
