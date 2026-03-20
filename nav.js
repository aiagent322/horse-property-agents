// Shared nav — injected by each page
(function(){
  const path = window.location.pathname;
  const links = [
    { href: '/agents/', label: 'Find an Agent' },
    { href: 'https://horsepropertyguide.com/guides/', label: 'Horse Property Guide', external: true },
    { href: 'https://horsepropertyguide.com/qa/usda-loan-horse-property.html', label: 'Financing', external: true },
    { href: 'https://horsepropertyguide.com/glossary/water-rights.html', label: 'Glossary', external: true },
    { href: '/about/', label: 'About' },
  ];
  const navHTML = `
<nav id="site-nav">
  <div class="nav-inner">
    <a href="/" class="nav-logo">
      <span class="logo-mark">⬡</span>
      <span class="logo-text">Horse<strong>Property</strong>Agents</span>
    </a>
    <button class="nav-toggle" aria-label="Menu" onclick="document.getElementById('site-nav').classList.toggle('open')">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links">
      ${links.map(l => {
        const active = !l.external && path.startsWith(l.href) ? ' class="active"' : '';
        const ext = l.external ? ' target="_blank" rel="noopener"' : '';
        return `<li><a href="${l.href}"${ext}${active}>${l.label}</a></li>`;
      }).join('')}
    </ul>
  </div>
</nav>
<style>
#site-nav {
  background: #1a1410;
  position: sticky; top: 0; z-index: 200;
  border-bottom: 1px solid rgba(255,255,255,.06);
}
.nav-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center;
  padding: 0 20px; height: 56px;
  gap: 32px;
}
.nav-logo {
  text-decoration: none;
  display: flex; align-items: center; gap: 9px;
  flex-shrink: 0;
  color: #fff;
  font-family: 'Jost', sans-serif;
  font-size: .88rem; font-weight: 400;
  letter-spacing: .02em;
}
.nav-logo strong { font-weight: 700; }
.logo-mark { color: #c49a6c; font-size: 1.1rem; line-height: 1; }
.nav-links {
  list-style: none; display: flex; gap: 4px;
  margin: 0; padding: 0; margin-left: auto;
}
.nav-links a {
  font-family: 'Jost', sans-serif;
  font-size: .78rem; font-weight: 500;
  letter-spacing: .07em; text-transform: uppercase;
  color: rgba(255,255,255,.6);
  text-decoration: none;
  padding: 6px 12px; border-radius: 3px;
  transition: color .2s, background .2s;
  white-space: nowrap;
}
.nav-links a:hover, .nav-links a.active {
  color: #fff; background: rgba(255,255,255,.07);
}
.nav-toggle {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer;
  padding: 8px; margin-left: auto;
}
.nav-toggle span {
  display: block; width: 22px; height: 2px;
  background: rgba(255,255,255,.7); border-radius: 2px;
  transition: background .2s;
}
.nav-toggle:hover span { background: #fff; }
@media (max-width: 768px) {
  .nav-toggle { display: flex; }
  .nav-links {
    display: none; position: absolute;
    top: 56px; left: 0; right: 0;
    background: #1a1410;
    flex-direction: column; gap: 0;
    border-bottom: 1px solid rgba(255,255,255,.08);
    padding: 8px 0;
  }
  #site-nav.open .nav-links { display: flex; }
  .nav-links a { padding: 12px 24px; border-radius: 0; }
}
</style>`;
  document.write(navHTML);
})();
