const loadBtn = document.getElementById('load');
const list = document.getElementById('items-list');

loadBtn.addEventListener('click', async () => {
  list.innerHTML = '<li>Loading…</li>';
  try {
    const res = await fetch('http://127.0.0.1:8000/api/items/');
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    if (!data.length) list.innerHTML = '<li>No items found</li>';
    else list.innerHTML = data.map(i => `<li>${i.name}: ${i.description || ''}</li>`).join('\n');
  } catch (err) {
    list.innerHTML = `<li>Error: ${err.message}</li>`;
  }
});
