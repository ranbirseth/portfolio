import './App.css'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Github, Linkedin, Menu, X, Database, LayoutDashboard, Server, Workflow } from 'lucide-react'

const links = { github: 'https://github.com/ranbirseth', linkedin: 'https://www.linkedin.com/in/ranbir-seth-02a0471b3/', email: 'mailto:ranbirseth001@gmail.com' }
const projects = [
  { number: '01', title: 'GYMZA', category: 'SaaS / Operations', description: 'A gym management platform for members, trainers, subscriptions and attendance, with role-based portals and real-time updates.', tags: ['React', 'Node.js', 'MongoDB', 'Socket.IO'], repo: 'https://github.com/ranbirseth/gymza', tone: 'project-lime', visual: 'MEMBER\nCONTROL' },
  { number: '02', title: 'ATR Restaurant', category: 'POS / Hospitality', description: 'An end-to-end restaurant system connecting customer ordering, kitchen operations, billing and analytics in real time.', tags: ['MERN', 'Socket.IO', 'jsPDF', 'Printers'], repo: 'https://github.com/ranbirseth/Atr_Resturant', tone: 'project-coral', visual: 'ORDER\nFLOW' },
  { number: '03', title: 'LPG Distribution', category: 'Logistics / Workflow', description: 'A booking and delivery platform with stock management, status updates, receipts and role-based dashboards.', tags: ['React', 'Express', 'MongoDB', 'Multer'], repo: 'https://github.com/ranbirseth/lpg-distribution-system', tone: 'project-blue', visual: 'DELIVERY\nDESK' },
]
const services = [
  ['01', LayoutDashboard, 'Business websites', 'Focused, responsive websites that give a business a clear digital home.'],
  ['02', Server, 'Full-stack applications', 'Complete products across interface, API, authentication and database.'],
  ['03', Database, 'Admin dashboards', 'Operational tools for orders, members, payments, analytics and teams.'],
  ['04', Workflow, 'Business automation', 'POS, booking, billing and workflow systems shaped around real operations.'],
]
const stack = ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Next.js', 'Tailwind CSS', 'Socket.IO']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formState, setFormState] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })


  useEffect(() => {
    document.title = 'Ranbir Seth | Full-Stack Developer'
  }, []);

  const submitForm = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Project enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`)
    window.location.href = `${links.email}?subject=${subject}&body=${body}`
    setFormState('ready')
  }

  return <div className="site-shell">
    <header className="site-nav">
      <a className="brand" href="#top" aria-label="Ranbir Seth home"><span>R</span><strong>Ranbir Seth</strong></a>
      <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
        {['about', 'services', 'work', 'contact'].map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        <a className="nav-cta" href={links.email}>Let&apos;s talk <ArrowUpRight size={15} /></a>
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main id="top">
      <section className="hero section-pad"><div className="hero-copy reveal"><div className="eyebrow"><i /> Available for freelance work</div><p className="hero-kicker">Full-stack developer / product builder</p><h1>Digital products<br /><em>with a purpose.</em></h1><p className="hero-intro">Hi, I&apos;m Ranbir Seth. I build modern websites and full-stack business applications that solve real-world problems.</p><div className="hero-actions"><a className="button button-light" href="#work">View my work <ArrowUpRight size={17} /></a><a className="text-link" href={links.email}>Start a conversation <ArrowUpRight size={15} /></a></div></div><div className="hero-art reveal delay-one" aria-label="Abstract product interface visual"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core"><span>BUILD</span><strong>01</strong><small>FROM IDEA TO INTERFACE</small></div><div className="art-note note-top">01 / product systems</div><div className="art-note note-bottom">React + Node.js + MongoDB</div></div></section>
      <div className="marquee" aria-hidden="true"><span>PRODUCT THINKING</span><b>+</b><span>FULL-STACK CRAFT</span><b>+</b><span>BUSINESS LOGIC</span><b>+</b><span>PRODUCT THINKING</span></div>
      <section id="about" className="section-pad split-section reveal"><div><p className="section-label">01 / About</p><h2>Code is the medium.<br /><em>Clarity is the goal.</em></h2></div><div className="section-copy"><p>I work across frontend, backend and database layers to turn messy business requirements into calm, usable products.</p><p>From a member portal to a restaurant kitchen workflow, I care about the details that make software feel dependable in the hands of real people.</p><div className="capability-grid">{[['Frontend', 'React / Next.js'], ['Backend', 'Node / Express'], ['Data', 'MongoDB / MySQL'], ['Systems', 'Auth / APIs']].map(([title, detail]) => <div key={title}><span>{title}</span><small>{detail}</small></div>)}</div></div></section>
      <section id="services" className="section-pad services-section"><div className="section-heading reveal"><div><p className="section-label">02 / Capabilities</p><h2>What I build</h2></div><p>Useful software for the work happening behind the scenes.</p></div><div className="service-grid">{services.map(([number, Icon, title, description]) => <article className="service-card reveal" key={title}><span className="card-number">{number}</span><Icon size={25} strokeWidth={1.4} /><h3>{title}</h3><p>{description}</p><ArrowUpRight className="card-arrow" size={18} /></article>)}</div></section>
      <section id="work" className="section-pad work-section"><div className="section-heading reveal"><div><p className="section-label">03 / Selected work</p><h2>Built for the real world.</h2></div><a className="text-link" href={links.github}>More on GitHub <ArrowUpRight size={15} /></a></div><div className="project-list">{projects.map((project) => <article className={`project-card ${project.tone} reveal`} key={project.title}><div className="project-visual"><span className="project-index">{project.number}</span><div className="visual-grid"><span>{project.visual.split('\n')[0]}</span><strong>{project.visual.split('\n')[1]}</strong></div><div className="visual-footer">SYSTEM / 2024-26</div></div><div className="project-info"><div><p className="project-category">{project.category}</p><h3>{project.title}</h3></div><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="project-link" href={project.repo} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} /></a></div></article>)}</div></section>
      <section className="section-pad stack-section reveal"><div><p className="section-label">04 / Toolkit</p><h2>A considered<br /><em>stack.</em></h2></div><div className="stack-cloud">{stack.map((item, index) => <span className={index === 0 ? 'stack-pill primary-pill' : 'stack-pill'} key={item}>{item}</span>)}</div></section>
      <section id="contact" className="section-pad contact-section"><div className="contact-intro reveal"><p className="section-label">05 / Contact</p><h2>Have a project<br /><em>in mind?</em></h2><p>Tell me what you are trying to make better. I will get back to you at <a href={links.email}>ranbirseth001@gmail.com</a>.</p><div className="social-row"><a href={links.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></div></div><form className="contact-form glass-panel reveal delay-one" onSubmit={submitForm}><label>Name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label><label>Email<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></label><label>What are you building?<textarea required rows="4" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} /></label><button className="button button-light" type="submit">Open email draft <ArrowUpRight size={17} /></button>{formState === 'ready' && <p className="form-note"><Check size={15} /> Your email client should open with the message ready to send.</p>}</form></section>
    </main>
    <footer className="site-footer"><a className="brand" href="#top"><span>R</span><strong>Ranbir Seth</strong></a><p>Full-stack developer building useful things.</p><small>© {new Date().getFullYear()} Ranbir Seth</small></footer>
  </div>
}

export default App
