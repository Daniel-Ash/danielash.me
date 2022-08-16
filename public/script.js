const cards = document.querySelectorAll(".section")

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })},
  {
    threshold: .35,
  }
)

cards.forEach(card => {
  observer.observe(card)
})

/* Show/hide sections */
const hiddenSection = document.querySelector('.hiddenSection');

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  console.log('Clicked')
  if (hiddenSection.style.display === 'none') {
    hiddenSection.style.display = 'block';

    btn.textContent = 'Hide div';
  } else {
    hiddenSection.style.display = 'none';

    btn.textContent = 'Show div';
  }
});