const defaultConfig = {
  background_color: '#FFFFFF',
  surface_color: '#0B1437',
  text_color: '#1A1F36',
  primary_action_color: '#00D4AA',
  secondary_action_color: '#5A607F',
  font_family: 'DM Sans',
  font_size: 16,
  hero_title: 'Assuma o Controle do Seu Futuro Financeiro',
  hero_subtitle: 'Encontre a solução ideal para gerenciar suas finanças de forma simples e segura.',
  features_title: 'Recursos',
  feature_1_title: 'Visualização Simples',
  feature_2_title: 'Orçamentos Eficazes',
  feature_3_title: 'Análise Detalhada',
  cta_button_text: 'Começar Agora',
};

function applyConfig(config) {
  const c = key => config[key] || defaultConfig[key];
  const font = c('font_family');
  const fullFont = `${font}, sans-serif`;
  const baseSize = c('font_size');

  document.body.style.fontFamily = fullFont;

  const bg = c('background_color');
  const surface = c('surface_color');
  const primary = c('primary_action_color');
  const secondary = c('secondary_action_color');

  const heroSection = document.getElementById('hero');
  if (heroSection) heroSection.style.background = bg;

  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) {
    heroTitle.textContent = c('hero_title');
    heroTitle.style.color = surface;
    heroTitle.style.fontFamily = `Sora, ${fullFont}`;
    heroTitle.style.fontSize = `${baseSize * 3}px`;
  }

  const heroSub = document.getElementById('hero-subtitle');
  if (heroSub) {
    heroSub.textContent = c('hero_subtitle');
    heroSub.style.color = secondary;
    heroSub.style.fontSize = `${baseSize * 1.2}px`;
  }

  const ft = document.getElementById('features-title');
  if (ft) {
    ft.textContent = c('features_title');
    ft.style.color = surface;
    ft.style.fontFamily = `Sora, ${fullFont}`;
    ft.style.fontSize = `${baseSize * 2.8}px`;
  }

  const f1 = document.getElementById('feat1-title');
  if (f1) { f1.textContent = c('feature_1_title'); f1.style.color = surface; f1.style.fontSize = `${baseSize * 1.25}px`; }

  const f2 = document.getElementById('feat2-title');
  if (f2) { f2.textContent = c('feature_2_title'); f2.style.color = surface; f2.style.fontSize = `${baseSize * 1.25}px`; }

  const f3 = document.getElementById('feat3-title');
  if (f3) { f3.textContent = c('feature_3_title'); f3.style.color = surface; f3.style.fontSize = `${baseSize * 1.25}px`; }

  const ctaText = c('cta_button_text');
  document.querySelectorAll('.btn-cta').forEach(btn => {
    btn.textContent = ctaText;
    btn.style.background = `linear-gradient(135deg, ${primary}, ${primary}dd)`;
  });

  document.querySelectorAll('.feature-card i').forEach(el => {
    el.style.color = primary;
  });

  const logoText = document.getElementById('logo-text');
  if (logoText) logoText.querySelector('span').style.color = primary;

  document.querySelectorAll('.feature-card .group span').forEach(s => s.style.color = primary);
  document.querySelectorAll('.feature-card .group i').forEach(i => i.style.color = primary);

  const dashSection = document.getElementById('dashboard');
  if (dashSection) dashSection.style.background = surface;
}

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa ícones e módulos
  if (window.lucide) lucide.createIcons();
  if (typeof initAccessibility === 'function') initAccessibility();
  if (typeof initNavbar === 'function') initNavbar();

  // Animações ao rolar a página
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Ações dos botões principais
  const btnDemo = document.getElementById('btn-demo');
  if (btnDemo) {
    btnDemo.addEventListener('click', () => {
      document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
      if (typeof showToast === 'function') showToast('Visualizando painel demonstrativo!');
    });
  }

  ['nav-cta', 'hero-cta'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        window.location.href = 'cadastro.html';
      });
    }
  });
});