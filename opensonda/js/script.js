
window.addEventListener('scroll',()=>{
        document.querySelector('nav').style.boxShadow=window.scrollY>40?'0 4px 40px rgba(0,0,0,0.7)':'none';
});

const obs=new IntersectionObserver((entries)=>{
        entries.forEach(el=>{
                if(el.isIntersecting){el.target.style.opacity='1';el.target.style.transform='translateY(0)'}
        });
},{threshold:0.08});

document.querySelectorAll('.feature-card,.sector-card,.plan-card,.stat-box,.contact-item,.sensor-item').forEach(el=>{
        el.style.opacity='0';
        el.style.transform='translateY(18px)';
        el.style.transition='opacity 0.6s ease, transform 0.6s ease, border-color 0.4s, background 0.4s';
        obs.observe(el);
});

function sendContact(){
        const inputs=document.querySelectorAll('.form-input,.form-select,.form-textarea');
        let valid=true;
        
        inputs.forEach(i=>{if(!i.value.trim())valid=false});

        if(!valid){alert('Por favor preenche todos os campos.');return}

        const btn=document.querySelector('#contacto .btn-primary');

        btn.textContent='Mensagem Enviada ✓';
        btn.style.background='linear-gradient(135deg,#1a4a2d,#2d6b45,#1a4a2d)';

        setTimeout(()=>{
                btn.textContent='Enviar Mensagem';
                btn.style.background='';
                inputs.forEach(i=>i.value='');
        },3000);
}