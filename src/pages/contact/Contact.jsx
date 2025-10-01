import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <header
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/src/assets/Img/bannerpage.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-white text-4xl font-semibold">Liên hệ</h1>
      </header>

      {/* Contact Form Section */}
      <section className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-2">Chúng tôi có thể giúp gì cho bạn?</h2>
          <p className="text-gray-600 mb-6">
            Vui lòng để lại thông tin, chúng tôi sẽ liên lạc trong thời gian sớm nhất.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Họ và tên *"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Email *"
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
              <input
                type="tel"
                placeholder="Điện thoại *"
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>
            <textarea
              placeholder="Nội dung"
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
            ></textarea>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-2 border border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-600 hover:text-white transition"
            >
              GỬI YÊU CẦU
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 mb-12">
        <iframe
          title="PalmTek Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.091927927927!2d105.7879603153323!3d21.02851179302062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9c0a1a1a1a%3A0x123456789abcdef!2s3%20V%C5%A9%20Ph%C3%A1m%20H%C3%A0m%2C%20Trung%20H%C3%B2a%2C%20C%E1%BA%A7u%20Gi%E1%BA%A5y%2C%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
          width="100%"
          height="300"
          className="border-0 rounded-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-6 md:mb-0 max-w-xs">
            <img src="/src/assets/Img/logo.png" alt="PalmTek Logo" className="mb-4 w-32" />
            <p className="text-sm font-semibold mb-1">CÔNG TY CỔ PHẦN PALMTEK INNOVATION</p>
            <p className="text-xs mb-1">Thành viên Palms Capital Group</p>
            <p className="text-xs mb-1">
              Địa chỉ: Tầng 1, CT1 Viễn Hòa Parkview, Số 03 Vũ Phạm Hàm, P. Yên Hòa, Q. Cầu Giấy, Hà Nội
            </p>
            <p className="text-xs mb-1">Liên hệ: +84 28 2200 2980</p>
            <p className="text-xs mb-1">Email: office@palmtek.vn</p>
          </div>

          {/* Links */}
          <div className="mb-6 md:mb-0 flex flex-col space-y-2 text-sm font-semibold text-red-600">
            <a href="#" className="hover:underline">Về chúng tôi</a>
            <a href="#" className="hover:underline">Giải pháp</a>
            <a href="#" className="hover:underline">Liên hệ</a>
          </div>

          {/* Newsletter */}
          <div className="max-w-xs">
            <p className="text-sm font-semibold mb-2">Đăng ký email để nhận tin tức mới nhất từ PalmTek</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Nhập email của bạn..."
                className="flex-grow border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded-r-md font-semibold hover:bg-red-700 transition"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-6">
          © 2027 PalmTek
        </div>
      </footer>
    </div>
  );
};

export default Contact;
