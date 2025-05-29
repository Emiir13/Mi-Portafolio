function App() {
  const projects = [
    { title: 'Landing Page', description: 'Sitio de ejemplo para práctica de diseño responsive.', link: '#' },
    { title: 'App de Tareas', description: 'CRUD completo en JavaScript puro.', link: '#' },
    { title: 'Clon de Google', description: 'HTML/CSS recreando la home de Google.', link: '#' },
  ];

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      <section>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>¡Hola! Soy Emir</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Desarrollador web junior apasionado por crear experiencias web modernas, limpias y funcionales.
        </p>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Proyectos</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
          {projects.map((project, idx) => (
            <div key={idx} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: 'calc(33% - 1rem)' }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>Ver proyecto</a>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Sobre mí</h2>
        <p>
          Me llamo Emir, tengo 18 años y estoy dando mis primeros pasos como desarrollador web junior. Vengo del mundo del Derecho,
          pero descubrí que mi vocación está en la tecnología. Estoy formándome como desarrollador full stack y construyendo este
          portafolio para mostrar mi progreso. Me interesa aprender frameworks modernos como React, seguir buenas prácticas y crecer
          profesionalmente para lograr independencia económica y poder ayudar a mi familia.
        </p>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Contacto</h2>
        <form action="https://formspree.io/f/xanorenb" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
          <input type="text" name="name" placeholder="Tu nombre" required />
          <input type="email" name="email" placeholder="Tu correo" required />
          <textarea name="message" placeholder="Tu mensaje" rows="4" required />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default App;


