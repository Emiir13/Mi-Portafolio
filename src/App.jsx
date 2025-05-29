function App() {
  const projects = [
    {
      title: 'CasaPoints',
      description: 'App gamificada para registrar tareas del hogar con puntajes.',
      link: 'https://casa-points-hw47umwm3-emiir13s-projects.vercel.app'
    },
    {
      title: 'GitHub',
      description: 'Repositorio con mis proyectos y código fuente.',
      link: 'https://github.com/Emiir13'
    },
    {
      title: 'LinkedIn',
      description: 'Perfil profesional donde comparto mis avances y experiencia.',
      link: 'https://www.linkedin.com/in/emir-midlell-60074b368/'
    }
  ];

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem', maxWidth: '900px', margin: 'auto', color: '#f0f0f0', backgroundColor: '#1e1e1e' }}>
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
            <div key={idx} style={{ backgroundColor: '#2a2a2a', padding: '1rem', borderRadius: '10px', width: 'calc(33% - 1rem)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{project.title}</h3>
              <p style={{ fontSize: '0.95rem' }}>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#4ea8de' }}>Ver proyecto</a>
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
          <input type="text" name="name" placeholder="Tu nombre" required style={{ padding: '0.5rem', borderRadius: '6px', border: 'none', backgroundColor: '#2a2a2a', color: '#f0f0f0' }} />
          <input type="email" name="email" placeholder="Tu correo" required style={{ padding: '0.5rem', borderRadius: '6px', border: 'none', backgroundColor: '#2a2a2a', color: '#f0f0f0' }} />
          <textarea name="message" placeholder="Tu mensaje" rows="4" required style={{ padding: '0.5rem', borderRadius: '6px', border: 'none', backgroundColor: '#2a2a2a', color: '#f0f0f0' }} />
          <button type="submit" style={{ padding: '0.6rem', backgroundColor: '#4ea8de', border: 'none', borderRadius: '6px', cursor: 'pointer', color: '#fff' }}>Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default App;
