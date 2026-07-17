import { useState } from 'react';
import css from './BookForm.module.css';

const BookForm = ({ camperId }) => {
  const [formData, setFormData] = useState({ name: '', email: '', date: '', comment: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут логіка відправки запиту через Axios за потреби
    alert('Booking successful! We will contact you soon.');
    setFormData({ name: '', email: '', date: '', comment: '' });
  };

  return (
    <div className={css.formWrapper}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formSubtitle}>Stay connected! We are always ready to help you.</p>
      
      <form onSubmit={handleSubmit} className={css.form}>
        <input type="text" name="name" placeholder="Name*" required value={formData.name} onChange={handleChange} className={css.input} />
        <input type="email" name="email" placeholder="Email*" required value={formData.email} onChange={handleChange} className={css.input} />
        <input type="date" name="date" required value={formData.date} onChange={handleChange} className={css.input} />
        <textarea name="comment" placeholder="Comment" value={formData.comment} onChange={handleChange} className={css.textarea} />
        <button type="submit" className={css.submitBtn}>Send</button>
      </form>
    </div>
  );
};

export default BookForm;