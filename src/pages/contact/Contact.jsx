import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import bannerImage from '../../assets/Img/bannerpage.png';
import iconsArrowLeft from '../../assets/Img/icons_arrow_left.png';

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
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Banner Section */}
      <div className="relative text-center mt-20 overflow-hidden">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-[400px] object-cover block"
        />
        <h1
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl md:text-2xl font-medium text-shadow-lg whitespace-nowrap"
        >
          {t('contact.title')}
        </h1>
      </div>

      {/* Contact Form Section */}
      <section className="bg-white py-20 px-5 flex items-center justify-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-10 mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {t('contact.helpQuestion')}
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-normal max-w-2xl">
              {t('contact.description')}
            </p>
          </div>
          <Formik
            initialValues={{ name: '', email: '', phone: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="w-full max-w-3xl space-y-6">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder={t('contact.placeholders.name')}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                  <div className="flex-1">
                    <Field
                      type="email"
                      name="email"
                      placeholder={t('contact.placeholders.email')}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-red-600"
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
                      className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-red-600"
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
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>
                <div className="flex justify-end items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-6 py-3 border border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white transition disabled:opacity-50"
                  >
                    {isSubmitting
                      ? t('contact.button.sending')
                      : t('contact.button.send')}
                    <img src={iconsArrowLeft} alt="Arrow" className="ml-4 w-5 h-5" />
                  </button>
                  {submitMessage && (
                    <p className="text-green-600 ml-4">{submitMessage}</p>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-12 px-5">
        <div className="max-w-7xl mx-auto">
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
        </div>
      </section>
    </div>
  );
};

export default Contact;