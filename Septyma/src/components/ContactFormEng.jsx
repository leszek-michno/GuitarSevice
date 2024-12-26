import '../assets/styles/_ContactForm.scss';
import Swal from 'sweetalert2';

const ContactForm = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
    
        formData.append("access_key", "dcd734cd-b9c9-483c-9388-ec32bf5407e5");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Done!",
                text: "Your message has been sent!",
                icon: "success"
            }).then(() => {
                e.target.reset();
            });
        }
    };

    return (
        <section className="contactForm">
          <form onSubmit={onSubmit}>
            <h2>Write to us</h2>
            <div className="input-box">
              <label>your name</label>
              <input type="text" placeholder="enter your name" name='name' required/>
            </div>
            <div className="input-box">
              <label>your e-mail address</label>
              <input type="email" placeholder="enter your e-mail address" name='email' required/>
            </div>
            <div className="input-box">
              <label>your message</label>
              <textarea type="text" name="message" placeholder='enter your message' required/>
            </div>
            <button type='submit'>send a message</button>
          </form>
        </section>
    );
};

export default ContactForm;
