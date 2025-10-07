import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import banner from '../../assets/Img/bannerpage.png';

const Contact = () => {
  const [submitMessage, setSubmitMessage] = useState('');
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    name: Yup.string().required(t('contact.validation.nameRequired')),
    email: Yup.string()
      .email(t('contact.validation.emailInvalid'))
      .required(t('contact.validation.emailRequired')),
    phone: Yup.string().required(t('contact.validation.phoneRequired')),
    message: Yup.string(),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch('https://api.example.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitMessage(t('contact.messages.success'));
        resetForm();
      } else {
        setSubmitMessage(t('contact.messages.error'));
      }
    } catch {
      setSubmitMessage(t('contact.messages.error'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <header
        className="relative bg-cover bg-center h-120 flex items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-white text-6xl font-medium">{t('contact.title')}</h1>
      </header>

      {/* Contact Form Section */}
      <section className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">
            {t('contact.helpQuestion')}
          </h2>
          <p className="text-gray-600 mb-6 text-sm font-normal">
            {t('contact.description')}
          </p>
          <Formik
            initialValues={{ name: '', email: '', phone: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder={t('contact.placeholders.name')}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <Field
                      type="email"
                      name="email"
                      placeholder={t('contact.placeholders.email')}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>
                  <div className="flex-1">
                    <Field
                      type="tel"
                      name="phone"
                      placeholder={t('contact.placeholders.phone')}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder={t('contact.placeholders.message')}
                    rows="5"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-2 border border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white transition disabled:opacity-50"
                >
                  {isSubmitting ? t('contact.button.sending') : t('contact.button.send')}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
                {submitMessage && (
                  <p className="text-green-600 mt-4">{submitMessage}</p>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 mb-12">
        <iframe
          title="PalmTek Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.091927927927!2d105.7879603153323!3d21.02851179302062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9c0a1a1a1a%3A0x123456789abcdef!2s3%20V%C5%A9%20Ph%C3%A1m%20H%C3%A0m%2C%20Trung%20H%C3%B2a%2C%20C%E1%BA%A7u%20Gi%E1%BA%A5y%2C%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
          width="100%"
          height="371"
          className="border-0 rounded-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
