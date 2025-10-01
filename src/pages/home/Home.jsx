import React, { useRef, useEffect } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const wrapperRef = useRef(null);

  const solutions = [
    {
      img: 'src/assets/Img/V-Lake.jpg', // Assuming images are in publicsrc/assets/Img/
      alt: 'vLe',
      title: 'Giải pháp V-Lake: ',
      text: 'Nền tảng xử lý dữ liệu'
    },
    {
      img: 'src/assets/Img/V-Transform.jpg',
      alt: 'V-Transform',
      title: 'Giải pháp V-Transform:',
      text: 'Nền tảng Chuyển đổi số'
    },
    {
      img: 'src/assets/Img/V-Lang.jpg',
      alt: 'v-Lang',
      title: 'Giải pháp V-Lang:',
      text: 'công nghệ tiên tiến để hỗ trợ dịch thuật và biên tập nội dung.'
    },
    {
      img: 'src/assets/Img/V-lab.jpg',
      alt: 'v-Lab',
      title: 'Giải pháp V-Lab:',
      text: 'Thiết kế và phát triển các phần mềm tùy chỉnh cao .'
    },
    {
      img: 'src/assets/Img/V-Azur.jpg',
      alt: 'vAzure',
      title: 'Giải pháp V-Azur:',
      text: 'Giải pháp An toàn an ninh mạng.'
    }
  ];

  const cloneCount = 3;
  const cardWidth = 400; // Use 400 to match center size, but adjust logic
  const gap = 30;
  const stepSize = 300 + gap; // Base card width + gap
  const originalLength = solutions.length;
  const totalClonesWidth = originalLength * stepSize * cloneCount;

  const renderSolutionCards = (offset = 0) => (
    solutions.map((solution, index) => (
      <div
        key={`solution-${offset + index}`}
        className={styles.solutionCard}
      >
        <img
          src={solution.img}
          alt={solution.alt}
          className={styles.solutionCardImg}
        />
        <h3 className={styles.solutionCardTitle}>{solution.title}</h3>
        <p className={styles.solutionCardText}>{solution.text}</p>
      </div>
    ))
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Get all cards after render
    const allCards = wrapper.querySelectorAll(`.${styles.solutionCard}`);
    const totalOriginalWidth = originalLength * stepSize;

    // Set vị trí ban đầu ở giữa (after front clones)
    wrapper.scrollLeft = totalOriginalWidth * cloneCount;

    let isScrolling = false;
    let rafId;
    let scrollTimeout;

    const updateCenterCard = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const viewportCenter = window.innerWidth / 2;
        let closestCard = null;
        let closestDistance = Infinity;

        allCards.forEach(card => {
          card.classList.remove(styles.center);

          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distance = Math.abs(cardCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestCard = card;
          }
        });

        if (closestCard) {
          closestCard.classList.add(styles.center);
        }
      });
    };

    const handleInfiniteScroll = () => {
      if (isScrolling) return;

      const scrollLeft = wrapper.scrollLeft;
      const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;

      // Nếu scroll gần cuối, jump về giữa
      if (scrollLeft >= maxScroll - 100) {
        isScrolling = true;
        wrapper.scrollLeft = totalOriginalWidth * cloneCount;
        setTimeout(() => { isScrolling = false; }, 50);
      }

      // Nếu scroll gần đầu, jump về giữa
      if (scrollLeft <= 100) {
        isScrolling = true;
        wrapper.scrollLeft = totalOriginalWidth * cloneCount;
        setTimeout(() => { isScrolling = false; }, 50);
      }
    };

    const scrollStep = (direction) => {
      if (isScrolling) return;
      isScrolling = true;
      const currentScroll = wrapper.scrollLeft;
      const newScroll = direction === 'next' ? currentScroll + stepSize : currentScroll - stepSize;
      wrapper.scrollTo({ left: newScroll, behavior: 'smooth' });
      setTimeout(() => { isScrolling = false; }, 300);
      updateCenterCard();
    };

    // Event cho scroll tự động
    const handleScroll = () => {
      handleInfiniteScroll();
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateCenterCard, 0);
    };

    wrapper.addEventListener('scroll', handleScroll);

    // Event cho nút điều hướng
    const nextBtn = wrapper.parentElement.querySelector(`.${styles.navBtnNext}`);
    const prevBtn = wrapper.parentElement.querySelector(`.${styles.navBtnPrev}`);

    if (nextBtn) nextBtn.addEventListener('click', () => scrollStep('next'));
    if (prevBtn) prevBtn.addEventListener('click', () => scrollStep('prev'));

    // Resize và load
    const handleResize = updateCenterCard;
    window.addEventListener('resize', handleResize);

    // Initial update
    setTimeout(updateCenterCard, 100);

    // Cleanup
    return () => {
      wrapper.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (nextBtn) nextBtn.removeEventListener('click', () => scrollStep('next'));
      if (prevBtn) prevBtn.removeEventListener('click', () => scrollStep('prev'));
    };
  }, []); // No deps change since solutions is static

  return (
    <>
      <div className={styles.banner}>
        <img src="src/assets/Img/banner.png" alt="" className={styles.bannerImg} />
      </div>
      <div className={styles.containerSince}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>THÀNH LẬP NĂM 2007</h2>
            <p className={styles.cardText}>
              PalmTek tự hào là một trong những doanh nghiệp tiên phong trong lĩnh vực công nghệ thông tin và chuyển đổi số tại Việt Nam cũng như khu vực Đông Nam Á.
            </p>
            <p className={styles.cardText}>
              Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi hỗ trợ các tổ chức tối ưu hóa quy trình vận hành, nâng cao hiệu quả hoạt động và đảm bảo an toàn thông tin thông qua các giải pháp AI và dữ liệu lớn - thông minh, an toàn, linh hoạt.
            </p>
            <button className={styles.cardButton}>VỀ CHÚNG TÔI</button>
          </div>
          <div className={styles.cardImage}>
            <img src="src/assets/Img/since2007.png" alt="Hình ảnh mạng lưới công nghệ" className={styles.cardImageImg} />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {/* Mục tiêu & Tầm nhìn Section */}
        <section className={styles.section} id="goals">
          <h2 className={styles.sectionTitle}>Mục tiêu & Tầm nhìn</h2>
          <div className={styles.goalsGrid}>
            <div className={styles.goalCard}>
              <img src="src/assets/Img/communityservice.svg" alt="Community Services" className={styles.goalCardImg} />
              <h3 className={styles.goalCardTitle}>Phục vụ cộng đồng</h3>
              <p className={styles.goalCardText}>PalmTek luôn luôn coi đổi mới sáng tạo là động lực phát triển cốt lõi; Chúng tôi cam kết đồng hành cùng quốc gia trong hành trình chuyển đổi số, hướng tới việc tạo ra các giải pháp công nghệ đột phá để thúc đẩy sự phát triển đất nước</p>
            </div>
            <div className={styles.goalCard}>
              <img src="src/assets/Img/idea.svg" alt="Creating New Ideas" className={styles.goalCardImg} />
              <h3 className={styles.goalCardTitle}>Sáng tạo đổi mới</h3>
              <p className={styles.goalCardText}>PalmTek luôn luôn coi đổi mới sáng tạo là động lực phát triển cốt lõi; Chúng tôi cam kết đồng hành cùng quốc gia trong hành trình chuyển đổi số, hướng tới việc tạo ra các giải pháp công nghệ đột phá để thúc đẩy sự phát triển đất nước</p>
            </div>
            <div className={styles.goalCard}>
              <img src="src/assets/Img/growup.svg" alt="Development & Improvement" className={styles.goalCardImg} />
              <h3 className={styles.goalCardTitle}>Phát triển bền vững</h3>
              <p className={styles.goalCardText}>PalmTek hướng đến mục tiêu phát triển bền vững thông qua các giải pháp công nghệ tiên tiến đồng hành cùng các tổ chức thực hiện các mục tiêu chiến lược dài hạn, đảm bảo chất lượng và đáp ứng các yêu cầu phát triển của xã hội.</p>
            </div>
          </div>
        </section>

        {/* Giải pháp nổi bật Section */}
        <section className={`${styles.section} ${styles.solutionsSection}`} id="solutions">
          <h2 className={styles.sectionTitle}>Giải pháp nổi bật</h2>
          <div className={styles.solutionsWrapper} id="solutionsWrapper" ref={wrapperRef}>
            {/* Front clones */}
            {[...Array(cloneCount)].map((_, cloneIndex) =>
              renderSolutionCards(cloneIndex * originalLength)
            )}
            {/* Original */}
            {renderSolutionCards()}
            {/* Back clones */}
            {[...Array(cloneCount)].map((_, cloneIndex) =>
              renderSolutionCards((cloneCount + cloneIndex) * originalLength)
            )}
          </div>
          <button className={`${styles.navBtn} ${styles.navBtnPrev}`} aria-label="Previous">
            <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button className={`${styles.navBtn} ${styles.navBtnNext}`} aria-label="Next">
            <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
        </section>

        {/* Đối tác chiến lược Section */}
        <section className={styles.section} id="partners">
          <h2 className={styles.sectionTitle}>Đối tác chiến lược</h2>
          <div className={styles.partnersGrid}>
            <div className={styles.partnerLogo}>
              <img src="src/assets/Img/palmcap.png" alt="Palms Capital" className={styles.partnerLogoImg} />
            </div>
            <div className={styles.partnerLogo}>
              <img src="src/assets/Img/mobile.png" alt="Mobifone" className={styles.partnerLogoImg} />
            </div>
            <div className={styles.partnerLogo}>
              <img src="src/assets/Img/logo_gtel.svg" alt="Viettel" className={styles.partnerLogoImg} />
            </div>
            <div className={styles.partnerLogo}>
              <img src="src/assets/Img/bocauservice.png" alt="Techcombank" className={styles.partnerLogoImg} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;