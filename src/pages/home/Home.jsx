import React from 'react';
import styles from './Home.module.css';
import { NavLink } from 'react-router-dom';
import ThreeDSlider from '../../components/ThreeDSlider';

const Home = () => {
  return (
    <>
      <div className={`${styles.banner} relative`}>
        <img
          src="src/assets/Img/banner.png"
          alt=""
          className={styles.bannerImg}
        />
        <NavLink to="/about" className={styles.contactButton}>
          <button className={styles.bannerButton}>Khám Phá Ngay</button>
        </NavLink>
      </div>
      <div className={styles.containerSince}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>THÀNH LẬP NĂM 2007</h2>
            <p className={styles.cardText}>
              PalmTek tự hào là một trong những doanh nghiệp tiên phong trong
              lĩnh vực công nghệ thông tin và chuyển đổi số tại Việt Nam cũng
              như khu vực Đông Nam Á.
            </p>
            <p className={styles.cardText}>
              Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi hỗ trợ các tổ
              chức tối ưu hóa quy trình vận hành, nâng cao hiệu quả hoạt động và
              đảm bảo an toàn thông tin thông qua các giải pháp AI và dữ liệu
              lớn - thông minh, an toàn, linh hoạt.
            </p>
            <NavLink to="/about" className={styles.cardButton}>
              <button className="mt-6">VỀ CHÚNG TÔI</button>
            </NavLink>
          </div>
          <div className={styles.cardImage}>
            <img
              src="src/assets/Img/since2007.png"
              alt="Hình ảnh mạng lưới công nghệ"
              className={styles.cardImageImg}
            />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {/* Mục tiêu & Tầm nhìn Section */}
        <section className={styles.section} id="goals">
          <h2 className={styles.sectionTitle}>Mục tiêu & Tầm nhìn</h2>
          <div className={styles.goalsGrid}>
            <div className={styles.goalCard}>
              <img
                src="src/assets/Img/communityservice.svg"
                alt="Community Services"
                className={styles.goalCardImg}
              />
              <h3 className={styles.goalCardTitle}>Phục vụ cộng đồng</h3>
              <p className={styles.goalCardText}>
                PalmTek luôn luôn coi đổi mới sáng tạo là động lực phát triển
                cốt lõi; Chúng tôi cam kết đồng hành cùng quốc gia trong hành
                trình chuyển đổi số, hướng tới việc tạo ra các giải pháp công
                nghệ đột phá để thúc đẩy sự phát triển đất nước
              </p>
            </div>
            <div className={styles.goalCard}>
              <img
                src="src/assets/Img/idea.svg"
                alt="Creating New Ideas"
                className={styles.goalCardImg}
              />
              <h3 className={styles.goalCardTitle}>Sáng tạo đổi mới</h3>
              <p className={styles.goalCardText}>
                PalmTek luôn luôn coi đổi mới sáng tạo là động lực phát triển
                cốt lõi; Chúng tôi cam kết đồng hành cùng quốc gia trong hành
                trình chuyển đổi số, hướng tới việc tạo ra các giải pháp công
                nghệ đột phá để thúc đẩy sự phát triển đất nước
              </p>
            </div>
            <div className={styles.goalCard}>
              <img
                src="src/assets/Img/growup.svg"
                alt="Development & Improvement"
                className={styles.goalCardImg}
              />
              <h3 className={styles.goalCardTitle}>Phát triển bền vững</h3>
              <p className={styles.goalCardText}>
                PalmTek hướng đến mục tiêu phát triển bền vững thông qua các
                giải pháp công nghệ tiên tiến đồng hành cùng các tổ chức thực
                hiện các mục tiêu chiến lược dài hạn, đảm bảo chất lượng và đáp
                ứng các yêu cầu phát triển của xã hội.
              </p>
            </div>
          </div>
        </section>
        {/* Giải pháp nổi bật Section */}
        <ThreeDSlider />

        {/* Đối tác chiến lược Section */}
        <section className={`${styles.section} mt-12`} id="partners">
          <h2 className={styles.sectionTitle}>Đối tác chiến lược</h2>
          <div className={styles.partnersGrid}>
            <div className={styles.partnerLogo}>
              <img
                src="src/assets/Img/palmcap.png"
                alt="Palms Capital"
                className={styles.partnerLogoImg}
              />
            </div>
            <div className={styles.partnerLogo}>
              <img
                src="src/assets/Img/mobile.png"
                alt="Mobifone"
                className={styles.partnerLogoImg}
              />
            </div>
            <div className={styles.partnerLogo}>
              <img
                src="src/assets/Img/logo_gtel.svg"
                alt="Viettel"
                className={styles.partnerLogoImg}
              />
            </div>
            <div className={styles.partnerLogo}>
              <img
                src="src/assets/Img/bocauservice.png"
                alt="Techcombank"
                className={styles.partnerLogoImg}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
