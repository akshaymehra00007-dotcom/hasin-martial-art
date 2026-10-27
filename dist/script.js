const body=document.body,menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');
menu?.addEventListener('click',()=>{const open=body.classList.toggle('menu-open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{body.classList.remove('menu-open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open navigation')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const lightbox=document.querySelector('#lightbox'),content=lightbox?.querySelector('.lightbox-content');
document.querySelectorAll('[data-image],[data-video]').forEach(item=>item.addEventListener('click',()=>{if(!lightbox||!content)return;content.innerHTML=item.dataset.video?`<video src="${item.dataset.video}" controls autoplay playsinline></video>`:`<img src="${item.dataset.image}" alt="${item.querySelector('img').alt}">`;lightbox.showModal()}));
lightbox?.querySelector('button').addEventListener('click',()=>lightbox.close());
lightbox?.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
lightbox?.addEventListener('close',()=>{if(content)content.innerHTML=''});
document.querySelector('#trial-form')?.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget),name=data.get('name'),program=data.get('program');const text=`Hi Hasin Martial Arts Academy, I am ${name}. I would like to enquire about ${program}. Please share the available classes, timings and fees.`;window.open(`https://wa.me/918474917161?text=${encodeURIComponent(text)}`,'_blank','noopener')});
document.querySelector('#year').textContent=new Date().getFullYear();


document.addEventListener('keydown',e=>{if(e.key==='Escape'){body.classList.remove('menu-open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open navigation');menu?.setAttribute('aria-label','Open navigation')}});
window.matchMedia('(min-width:1101px)').addEventListener('change',e=>{if(e.matches){body.classList.remove('menu-open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open navigation')}});
