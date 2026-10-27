<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact | BrightPath Studio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="container nav">
        <a class="brand" href="index.html">BrightPath</a>
        <nav class="nav-links" aria-label="Main navigation">
          <a href="index.html">Home</a>
          <a href="services.html">Services</a>
          <a href="about.html">About</a>
          <a href="contact.html" class="active">Contact</a>
        </nav>
        <a class="btn btn-primary" href="contact.html">Book a Call</a>
      </div>
    </header>

    <main>
      <section class="page-hero">
        <div class="container">
          <p class="eyebrow">Get in touch</p>
          <h1>Let’s build something meaningful together.</h1>
        </div>
      </section>

      <section class="section">
        <div class="container contact-grid">
          <div class="page-card">
            <h2>Say hello</h2>
            <ul class="contact-list">
              <li>Email: hello@brightpathstudio.dev</li>
              <li>Phone: +1 (415) 555-0148</li>
              <li>Office: 420 Market Street, San Francisco, CA</li>
            </ul>
          </div>

          <div class="page-card">
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input id="name" type="text" placeholder="Your name" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div class="form-group">
                <label for="message">Project details</label>
                <textarea id="message" placeholder="Tell us about your idea"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-row">
        <div><a class="brand" href="index.html">BrightPath</a></div>
        <p>© 2026 BrightPath Studio</p>
      </div>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
