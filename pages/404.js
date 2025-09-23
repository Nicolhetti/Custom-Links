import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Perfil no encontrado</title>
        <meta name="description" content="El perfil que buscas no existe" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <div className="error-container">
        <div className="error-content">
          <h1>404</h1>
          <h2>Perfil no encontrado</h2>
          <p>El perfil que buscas no existe o ha sido eliminado.</p>
          <Link href="/" className="button button-default">
            Volver al inicio
          </Link>
        </div>
      </div>

      <style jsx>{`
        .error-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: "Press Gothic", sans-serif;
        }

        .error-content {
          text-align: center;
          color: white;
          padding: 2rem;
        }

        .error-content h1 {
          font-size: 6rem;
          margin: 0;
          font-weight: 800;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .error-content h2 {
          font-size: 2rem;
          margin: 1rem 0;
          font-weight: 600;
        }

        .error-content p {
          font-size: 1.2rem;
          margin: 2rem 0;
          opacity: 0.9;
        }

        .button {
          display: inline-block;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          text-decoration: none;
          border-radius: 10px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          font-family: inherit;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .button:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}
