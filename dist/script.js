const body=document.body,menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');
menu?.addEventListener('click',()=>{const open=body.classList.toggle('menu-open');menu.setAttribute('aria-expanded',String(open))});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{body.classList.remove('menu-open');menu?.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const lightbox=document.querySelector('#lightbox'),content=lightbox?.querySelector('.lightbox-content');
document.querySelectorAll('[data-image],[data-video]').forEach(item=>item.addEventListener('click',()=>{if(!lightbox||!content)return;content.innerHTML=item.dataset.video?`<video src="${item.dataset.video}" controls autoplay playsinline></video>`:`<img src="${item.dataset.image}" alt="MMA Madness Academy gallery photo">`;lightbox.showModal()}));
lightbox?.querySelector('button').addEventListener('click',()=>lightbox.close());
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
lightbox?.addEventListener('close',()=>{if(content)content.innerHTML=''});
document.querySelector('#trial-form')?.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget),name=data.get('name'),program=data.get('program');const text=`Hi MMA Madness Academy, I am ${name}. I want to enquire about ${program} training and book a trial class.`;window.open(`https://wa.me/919819721138?text=${encodeURIComponent(text)}`,'_blank','noopener')});
document.querySelector('#year').textContent=new Date().getFullYear();

// Reveal only after playback begins; leave the matching poster visible on autoplay failure.
const heroVideo = document.querySelector('.hero-video');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if (heroVideo) {
  const startHero = () => {
    if (motionPreference.matches) { heroVideo.pause(); heroVideo.classList.remove('is-playing'); return; }
    heroVideo.muted = true;
    heroVideo.play().catch(() => heroVideo.classList.remove('is-playing'));
  };
  heroVideo.addEventListener('playing', () => heroVideo.classList.add('is-playing'));
  heroVideo.addEventListener('error', () => heroVideo.classList.remove('is-playing'));
  motionPreference.addEventListener('change', startHero);
  startHero();
}
