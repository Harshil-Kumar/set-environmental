import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

const Contact = () => {
  return (
    <div>
      <main className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;
