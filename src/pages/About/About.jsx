import React, { useRef } from 'react';
import styles from './About.module.css';
import bannerImage from '../../assets/Img/bannerpage.png';
import bgAbout from '../../assets/Img/bgabout.avif';
import bannerAbout from '../../assets/Img/banner_ab.png';

const AboutPage = () => {
  const milestonesRef = useRef([]);
  const [activeYear, setActiveYear] = React.useState('2007');

  const years = [
    '2007',
    '2008',
    '2009',
    '2010',
    '2012',
    '2013',
    '2015',
    '2019',
    '2020',
    '2023',
    '2025',
  ];

  const handleYearClick = year => {
    setActiveYear(year);
    const index = years.indexOf(year);
    if (milestonesRef.current[index]) {
      milestonesRef.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Removed auto-scroll on mount to allow ScrollToTop to work

  return (
    <div
      className={styles.mainContainer}
      style={{ backgroundImage: `url(${bgAbout})` }}
    >
      <div
        className={styles.banner}
        style={{ position: 'relative', textAlign: 'center' }}
      >
        <img
          src={bannerImage}
          alt="Banner"
          style={{ width: '100%', height: 'auto' }}
        />
        <h1
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '3rem',
            fontWeight: '500',
            margin: 0,
          }}
        >
          Về chúng tôi
        </h1>
      </div>

      {/* Section 1 */}
      <section className={styles.section1}>
        <div className={`${styles.contentWrapper} min-w-[1200px] md:min-w-[1440px]`}>
          <div className={`${styles.textContent} text-[676C6D] text-2xl`}>
            <h2>Về PalmTek</h2>
            <p>
              Với nhiều năm kinh nghiệm đồng hành cùng doanh nghiệp và các đơn
              vị trong lĩnh vực công nghệ,{' '}
              <span className={styles.highlight}>PalmTek</span> tự hào mang đến
              những giải pháp công nghệ tiên tiến, giúp tối ưu hiệu suất, nâng
              cao hiệu quả vận hành và góp phần thúc đẩy sự phát triển chung của
              tổ chức và đất nước.
            </p>
            <p>
              Chúng tôi tập trung vào các giải pháp trong tâm như chuyển đổi số
              ứng dụng AI, thiết bị giám sát thông minh, điện toán đám mây, bảo
              mật, thanh toán thông minh, ngân hàng và tài chính số, cùng những
              giải pháp{' '}
              <span className={styles.highlight}>"Made by Vietnam"</span> mang
              dấu ấn công nghệ trong nước.
            </p>
            <p>
              <span className={styles.highlight}>PalmTek</span> – đối tác tin
              cậy cho chuyển đổi số hiệu quả và an toàn.
            </p>
          </div>
          <div className={styles.imageContent}>
            <img src={bannerAbout} className="h-24" alt="Technology" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className={styles.section2}>
        <div className={styles.visionContent}>
          <h2>Tầm Nhìn Của Chúng Tôi</h2>
          <p>
            PalmTek hướng tới trở thành doanh nghiệp công nghệ hàng đầu, tiên
            phong đổi mới sáng tạo và phát triển bền vững.
          </p>
          <p>
            Chúng tôi cam kết tạo ra các giải pháp đột phá, đồng hành cùng quốc
            gia trong hành trình chuyển đổi số, xây dựng năng lực chất lượng
            cùng sống và thực tế phát triển xã hội.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <h1 className={styles.timelineHeader}>
            Hành trình <span>PalmTek</span>
          </h1>
          <div className={styles.timelineWrapper}>
            {/* Left: Milestones */}
            <div className={styles.timelineLeft}>
              {[
                {
                  year: '2007',
                  title: 'Thành lập VIEGRID',
                  content:
                    'Vào năm 2007, Công ty VIEGRID được thành lập, đánh dấu bước khởi đầu cho hành trình tiên phong trong lĩnh vực công nghệ thông tin và chuyển đổi số tại Việt Nam. Đây là tiền thân của Công ty Cổ Phần PalmTek Innovation, đặt nền móng cho các giải pháp sáng tạo và hiệu quả mà công ty theo đuổi sau này.',
                },
                {
                  year: '2008',
                  title: 'Đổi mới Dịch thuật với VIEGRID',
                  content: [
                    'Cung cấp sản phẩm phần mềm theo dõi ân nhân viên thông cho công ty tại Singapore.',
                    'Phát triển giải pháp dịch thuật Anh - Việt BOCOHAN V-LANG.',
                  ],
                },
                {
                  year: '2009',
                  title: 'Dự án Hệ thống làm việc từ xa',
                  content:
                    'Thực hiện dự án Xây dựng hệ thống làm việc từ xa qua mạng Internet an toàn cho UBND tỉnh Quảng Ninh – Dự án khởi nguồn cho các ý tưởng về an toàn, an ninh mạng và V-AZUR.',
                },
                {
                  year: '2010',
                  title: 'Phát hành giải pháp BOCOHAN/V-LANG',
                  content: [
                    '• Phát triển hoàn thiện giải pháp dịch thuật BOCOHAN/V-LANG với phiên bản tiếng Trung.',
                    '• Cung cấp BOCOHAN/ V-LANG cho dự án Dịch thuật của World Bank, Thống tấn Xã Việt Nam, Đài Truyền hình kỹ thuật số VTC để hỗ trợ quá trình phiên dịch, truyền hình.',
                    '• Bộ giải pháp An toàn an ninh mạng V-AZUR được hoàn thành giai đoạn nghiên cứu và phát triển.',
                  ],
                },
                {
                  year: '2012',
                  title: 'Kiểm thử sản phẩm V-AZUR',
                  content: [
                    'Cục Cảnh sát phòng, chống tội phạm sử dụng công nghệ cao (C50) đã tiến hành kiểm thử sản phẩm V-AZUR theo các danh mục hợp tác giữa C50, Viện CNTT - ĐHQG, VIEGRID.',
                    'C50 đã đánh giá về mức độ an toàn an ninh mạng cho giải pháp theo công văn số 1675/C50-P1.',
                  ],
                },
                {
                  year: '2013',
                  title: 'Phát hành giải pháp V-AZUR',
                  content: [
                    'Cung cấp V-AZUR cho Cục tin học - Bộ Tài Chính; Trung tâm thông tin - Bộ Xây Dựng, Tổng Cục Lưu trữ; Cục Tin học Ngân hàng – Ngân hàng nhà nước & Vụ Khoa học công nghệ - Bộ Công Thương.',
                    'Cung cấp phần mềm nghiệp vụ cho Sở Thông tin & Truyền thông TP Hà Nội, Thừa Thiên Huế, TP Hồ Chí Minh, Văn phòng UBND tỉnh Quảng Ninh, Bộ Công Thương, Bộ Tài Chính, Bộ Xây Dựng...',
                  ],
                },
                {
                  year: '2015',
                  title: 'Danh hiệu Sao Khuê',
                  content:
                    'Năm 2015, Công ty Cổ phần Truyền thông và Công nghệ VIEGRID vinh dự nhận giải thưởng Sao Khuê cho giải pháp V-AZUR, khẳng định vị thế trong lĩnh vực bảo mật mạng. Sản phẩm được đánh giá các nhà tình sáng tạo và hiệu quả, góp phần nâng cao an toàn thông tin cho doanh nghiệp và cơ quan nhà nước.',
                },
                {
                  year: '2019',
                  title: 'Giải pháp An toàn thông tin mạng',
                  content:
                    'VIEGRID được cấp Giấy phép kinh doanh sản phẩm, dịch vụ an toàn thông tin mạng theo Luật An toàn thông tin mạng 2015. Giấy phép xác nhận VIEGRID đủ điều kiện cung cấp giải pháp bảo mật mạng, nâng cao uy tín và đóng góp vào an toàn thông tin tại Việt Nam.',
                },
                {
                  year: '2020',
                  title: 'Phát triển Giải pháp V-TRANSFORM',
                  content:
                    'VIEGRID hợp tác phát triển bộ Giải pháp chuyển đổi số V-TRANSFORM cho các bộ, ban, ngành, cơ quan Nhà nước.',
                },
                {
                  year: '2023',
                  title: 'Phát hành giải pháp V-LAKE',
                  content:
                    'VIEGRID đã nghiên cứu, phát triển và ứng dụng thành công Nền tảng dữ liệu Data Platform V-LAKE, một giải pháp kho trữ dữ liệu lớn theo mô hình data lake hiện đại, cho phép tích hợp dữ liệu thô, bán cấu trúc và có cấu trúc từ nhiều nguồn khác nhau. Nền tảng này hỗ trợ phân tích dữ liệu thời gian thực, ứng dụng AI/ML và đảm bảo an toàn thông tin theo tiêu chuẩn quốc gia, góp phần nâng cao hiệu quả chuyển đổi số cho các tổ chức và doanh nghiệp Việt Nam.',
                },
                {
                  year: '2025',
                  title: 'PalmTek - Một chương mới',
                  content:
                    'Vào năm 2025, VIEGRID chính thức đổi tên thành PalmTek, đánh dấu một giai đoạn phát triển mới với trọng tâm mở rộng các giải pháp công nghệ và an toàn thông tin. Sự thay đổi này không chỉ phản ánh chiến lược tái định vị thương hiệu mà còn nhằm tăng cường khả năng cạnh tranh quốc tế, tiếp tục hỗ trợ chuyển đổi số cho cơ quan Nhà nước và doanh nghiệp Việt Nam.',
                },
              ].map((milestone, index) => (
                <div
                  key={milestone.year}
                  ref={el => (milestonesRef.current[index] = el)}
                  className={`${styles.milestone} gap-[10px] ${
                    activeYear === milestone.year ? styles.active : ''
                  }`}
                  data-year={milestone.year}
                >
                  <div
                    className={`${styles.milestoneYear} ${
                      activeYear === milestone.year ? styles.red : styles.gray
                    }`}
                  >
                    {milestone.year}
                  </div>
                  <div className={styles.milestoneContent}>
                    <h2 className="mt-10">{milestone.title}</h2>
                    {Array.isArray(milestone.content) ? (
                      milestone.content.map((p, i) => <p key={i}>{p}</p>)
                    ) : (
                      <p>{milestone.content}</p>
                    )}
                  </div>
                  {index < years.length - 1 && (
                    <hr className={styles.milestoneSeparator} />
                  )}
                </div>
              ))}
            </div>

            {/* Right: Year markers */}
            <div className={styles.timelineRight}>
              <div className={styles.yearLine}></div>
              {years.map(year => (
                <div
                  key={year}
                  className={`${styles.yearMarker} ${
                    activeYear === year ? styles.active : ''
                  }`}
                  data-year={year}
                  onClick={() => handleYearClick(year)}
                >
                  <div className={styles.dot}></div>
                  <div className={styles.yearLabel}>{year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
