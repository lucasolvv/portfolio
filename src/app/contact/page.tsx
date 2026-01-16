export default function Contact() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Contact</h1>

      <p className="text-neutral-400">
        Feel free to reach out through any of the platforms below.
      </p>

      <ul className="space-y-2 text-neutral-300">
        <li>
          <a
            href="https://github.com/your-username"
            target="_blank"
            className="hover:underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="mailto:your@email.com"
            className="hover:underline"
          >
            Email
          </a>
        </li>
      </ul>
    </section>
  );
}
