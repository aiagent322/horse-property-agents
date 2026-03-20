(function(){
  const path = window.location.pathname;
  const links = [
    { href: '/agents/',    label: 'Find an Agent' },
    { href: 'https://horsepropertyguide.com/guides/', label: 'Horse Property Guide', external: true },
    { href: 'https://horsepropertyguide.com/qa/usda-loan-horse-property.html', label: 'Financing', external: true },
    { href: 'https://horsepropertyguide.com/glossary/water-rights.html', label: 'Glossary', external: true },
    { href: '/about/', label: 'About' },
  ];
  const html = `
<nav id="site-nav">
  <div class="nav-inner">
    <a href="/" class="nav-logo">HorsePropertyAgents.com</a>
    <button class="nav-toggle" aria-label="Menu" onclick="document.getElementById('site-nav').classList.toggle('open')">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links">
      ${links.map(l => {
        const active = !l.external && path.startsWith(l.href) ? ' class="active"' : '';
        const ext = l.external ? ' target="_blank" rel="noopener"' : '';
        return '<li><a href="' + l.href + '"' + ext + active + '>' + l.label + '</a></li>';
      }).join('')}
    </ul>
  </div>
</nav>
<style>
#site-nav {
  background: #2c5f2e;
  position: sticky; top: 0; z-index: 200;
  border-bottom: 1px solid rgba(0,0,0,.15);
  box-shadow: 0 1px 4px rgba(0,0,0,.12);
}
.nav-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center;
  padding: 0 24px; height: 54px; gap: 8px;
}
.nav-logo {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: .95rem; font-weight: 700;
  color: #fff; text-decoration: none;
  letter-spacing: .01em; flex-shrink: 0;
  margin-right: 16px;
  white-space: nowrap;
}
.nav-links {
  list-style: none; display: flex; gap: 2px;
  margin: 0; padding: 0; margin-left: auto;
}
.nav-links a {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: .82rem; font-weight: 400;
  color: rgba(255,255,255,.85);
  text-decoration: none;
  padding: 6px 13px; border-radius: 3px;
  transition: background .15s, color .15s;
  white-space: nowrap;
}
.nav-links a:hover { background: rgba(255,255,255,.12); color: #fff; }
.nav-links a.active { color: #fff; font-weight: 700; }
.nav-links li:last-child a {
  background: rgba(255,255,255,.15);
  font-weight: 700; color: #fff;
}
.nav-links li:last-child a:hover { background: rgba(255,255,255,.25); }
.nav-toggle {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer;
  padding: 8px; margin-left: auto;
}
.nav-toggle span {
  display: block; width: 22px; height: 2px;
  background: rgba(255,255,255,.8); border-radius: 2px;
}
@media (max-width: 768px) {
  .nav-toggle { display: flex; }
  .nav-links {
    display: none; position: absolute;
    top: 54px; left: 0; right: 0;
    background: #2c5f2e; flex-direction: column;
    gap: 0; border-top: 1px solid rgba(255,255,255,.1);
    padding: 6px 0; box-shadow: 0 4px 12px rgba(0,0,0,.2);
  }
  #site-nav.open .nav-links { display: flex; }
  .nav-links a { padding: 12px 24px; border-radius: 0; }
}
</style>`;
  document.write(html);
})();
