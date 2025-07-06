function Contact() {
  return (
    <section>
      <h2>Have a coffee with Me</h2>
      <form>
        <label>Name:</label><br />
        <input type="text" placeholder="Your Name" /><br />

        <label>Email:</label><br />
        <input type="email" placeholder="Your Email" /><br />

        <label>Message:</label><br />
        <textarea placeholder="Write your message..." /><br />

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
