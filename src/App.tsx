function App() {
  return (
    <>
    <a href="#main-content" className="skip-link">İçeriğe atla</a>
      <header>
        <h1>Seval Poze - Portföy</h1>

        <nav aria-label="Ana menü">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <p>Kısa bir tanıtım yazısı buraya gelecek.</p>
        </section>

        <section id="projeler">
          <h2>Projeler</h2>
          <p>Proje listesi buraya gelecek.</p>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <p>E-posta / sosyal medya linkleri buraya gelecek.</p>
        </section>
      </main>

      <footer>
        <p>© 2026 Seval Poze</p>
      </footer>
    </>
  )
}

export default App