import React, { useState } from "react";
import images from "./assets";
import { prizes, faqs, rawTimeline, industries } from "./data/constants";
import { Fade, Slide } from "react-awesome-reveal";
import { motion } from "framer-motion";
import {
  ChevronRight,
  X,
  Trophy,
  Menu,
  CheckCircle,
  Target,
  Globe,
  ChevronDown
} from "lucide-react";

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  industry: string;
  employeeCount: string;
  businessDescription: string;
  currentChallenges: string;
  twinTransitionIdeas: string;
}

function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const getTimelineStatus = (dateString: string) => {
    const currentDate = new Date();
    const dateParts = dateString.split(" ")[0].split("/");
    let eventDate: Date;

    if (dateParts.length === 3) {
      // Format DD/MM/YYYY
      const day = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]) - 1; // Month is 0-indexed
      const year = parseInt(dateParts[2]);
      eventDate = new Date(year, month, day);
    } else if (dateParts.length === 2) {
      // Format MM/YYYY (for ranges like 06/10)
      const month = parseInt(dateParts[0]) - 1;
      const year = parseInt(dateParts[1]);
      eventDate = new Date(year, month, 1); // Assume start of month for comparison
    } else {
      return "upcoming"; // Default for unrecognized date formats
    }

    // For ranges, we assume it's active if current date is within the range or past the start
    if (dateString.includes("-")) {
      const [startDateStr, endDateStr] = dateString.split(" - ");
      const startDateParts = startDateStr.split("/");
      const endDateParts = endDateStr.split(" ")[0].split("/");

      const startDay = parseInt(startDateParts[0]);
      const startMonth = parseInt(startDateParts[1]) - 1;
      const startYear = parseInt(
        startDateParts[2] || currentDate.getFullYear().toString()
      );
      const startDate = new Date(startYear, startMonth, startDay);

      const endDay = parseInt(endDateParts[0]);
      const endMonth = parseInt(endDateParts[1]) - 1;
      const endYear = parseInt(
        endDateParts[2] || currentDate.getFullYear().toString()
      );
      const endDate = new Date(endYear, endMonth, endDay);

      if (currentDate >= startDate && currentDate <= endDate) {
        return "active";
      } else if (currentDate > endDate) {
        return "completed";
      } else {
        return "upcoming";
      }
    } else {
      // Single date event
      if (currentDate.toDateString() === eventDate.toDateString()) {
        return "active";
      } else if (currentDate > eventDate) {
        return "completed";
      } else {
        return "upcoming";
      }
    }
  };

  const timeline = rawTimeline.map((item) => ({
    ...item,
    status: getTimelineStatus(item.date),
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Menu */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a
            href="#"
            className="font-bold text-lg sm:text-xl text-blue-700 tracking-wide transition-transform duration-300 transform hover:scale-105"
          >
            Twin Transition Challenge
          </a>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
            <li><a href="#about" className="hover:text-blue-600">Giới thiệu</a></li>
            <li><a href="#prizes-section" className="hover:text-blue-600">Quyền lợi</a></li>
            <li><a href="#timeline-section" className="hover:text-blue-600">Lộ trình</a></li>
            <li><a href="#q&a-section" className="hover:text-blue-600">Q&A</a></li>
            <li><a href="#contact-section" className="hover:text-blue-600">Liên hệ</a></li>
            <li>
              <a
                href="#register"
                className="bg-green-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition-transform transform hover:scale-105 font-semibold"
              >
                Đăng ký
              </a>
            </li>
          </ul>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur shadow-lg">
            <ul className="flex flex-col items-center space-y-4 py-6 font-medium text-gray-700">
              <li><a href="#about" onClick={() => setOpen(false)}>Giới thiệu</a></li>
              <li><a href="#prizes-section" onClick={() => setOpen(false)}>Quyền lợi</a></li>
              <li><a href="#timeline-section" onClick={() => setOpen(false)}>Lộ trình</a></li>
              <li><a href="#q&a-section" onClick={() => setOpen(false)}>Q&A</a></li>
              <li><a href="#contact-section" onClick={() => setOpen(false)}>Liên hệ</a></li>
              <li>
                <a
                  href="#register"
                  className="bg-green-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: `url(${images.hero_bg})` }}
        className="relative overflow-hidden text-white bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-green-500 z-0"></div>

        <div className="relative container mx-auto px-4 pt-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-start mb-6"
          >
            <img
              src={images.logo}
              alt="Logo"
              className="h-28 w-auto object-contain rounded-lg"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="block">TWIN TRANSITION</span>
                <span className="block">CHALLENGE</span>
              </h1>

              <div className="space-y-4 border-l-8 border-lime-500 pl-4">
                <p className="text-xl leading-relaxed">
                  Chuyển đổi số và Đổi mới sáng tạo nhằm <br />  bảo vệ môi trường và khí hậu tại Việt Nam
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-2">
                <motion.a
                  href="#register"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-lg"
                >
                  Đăng ký tham gia thử thách
                  <ChevronRight className="w-5 h-5 ml-2" />
                </motion.a>

                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/80 text-white font-semibold rounded-xl backdrop-blur-sm"
                >
                  Tìm hiểu dự án
                </motion.a>
              </div>
            </motion.div>

            {/* Poster */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center mb-3"
            >
              <img
                src={images.poster}
                alt="Poster"
                className="h-full max-h-[600px] w-auto object-contain rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* About Project Section */}
      <section id="about" className="relative bg-gray-50 pt-12 sm:pt-20 lg:pt-32">
        {/* Wave nằm trên cùng */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00C351" />
                <stop offset="100%" stopColor="#00aaff" />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGradient)"
              fillOpacity="1"
              d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,32C960,32,1056,32,1152,58.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>
        </div>

        {/* Nội dung */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Về Cuộc thi{" "}
                <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                  Twin Transition Challenge
                </span>
              </h2>
              <p className="text-xl text-gray-900 max-w-4xl mx-auto leading-relaxed mb-3">
                Đồng hành cùng doanh nghiệp nhỏ và vừa Việt Nam kiến tạo tương lai xanh - số hóa.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Thẻ Mục Tiêu */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <Target className="w-12 h-12 text-yellow-300 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Mục Tiêu</h3>
                <p className="text-lg text-white leading-relaxed">
                  Tăng cường năng lực cạnh tranh cho DNNVV Việt Nam dựa trên việc sử dụng năng lượng và nguồn lực đầu vào hiệu quả thông qua chuyển đổi số và chuyển đổi xanh hướng tới giảm phát thải, phát triển bền vững.
                </p>
              </div>

              {/* Thẻ Đối tượng tham gia */}
              <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <Target className="w-12 h-12 text-blue-500 mb-6" />
                <h3 className="text-2xl font-bold text-black mb-4">Đối tượng tham gia</h3>
                <p className="text-lg text-black leading-relaxed mb-6">
                  Doanh nghiệp là doanh nghiệp nhỏ và vừa Việt Nam theo tiêu chuẩn sau:
                </p>

                <ul className="space-y-4">
                  {[
                    "Số lao động có tham gia bảo hiểm xã hội bình quân năm: Không quá 200 lao động",
                    "Doanh thu: Doanh thu hàng năm không vượt quá 200 tỷ VNĐ",
                    "Doanh nghiệp có mô hình chuyển đổi kép (chuyển đổi số và xanh) đang hoặc đã triển khai",
                    "Các công ty do phụ nữ làm chủ được khuyến khích đặc biệt.",
                    "Cuộc thi tập trung vào các doanh nghiệp nhỏ và vừa hoạt động trong ba lĩnh vực ưu tiên Chế biến nông sản, Dệt may và da giày, Chế biến gỗ và giấy"
                  ].map((text, i) => (
                    <li key={i} className="grid grid-cols-[auto_1fr] gap-3">
                      <CheckCircle className="w-5 h-5 text-black-300 mt-1" />
                      <span dangerouslySetInnerHTML={{ __html: text.includes("công ty") || text.includes("ba lĩnh vực") ? text.replace(/(công ty|ba lĩnh vực)/g, `<b class="text-blue-500">$1</b>`) : text }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Grid industries */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-gray-500/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 flex flex-col items-center"
                >
                  <img
                    src={industry.image}
                    className="h-16 sm:h-24 lg:h-48 w-auto object-contain mb-2"
                  />
                  <h3 className="text-xs sm:text-lg font-semibold text-center">{industry.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* Target Section */}
      {/* <Fade triggerOnce >
        <section
          id="target-section"
          className="py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Đối tượng tham gia
                </h2>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-5">
                <h3 className="text-2xl font-bold text-center mb-8">
                  Doanh nghiệp là doanh nghiệp nhỏ và vừa Việt Nam theo tiêu chuẩn sau:
                </h3>
                <div className="grid md:grid-cols-1 gap-8">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                      Số lao động có tham gia bảo hiểm xã hội bình quân năm: Không quá 200 lao động
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                      Doanh thu: Doanh thu hàng năm không vượt quá 200 tỷ VNĐ
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                      Doanh nghiệp có mô hình chuyển đổi kép (chuyển đổi số và xanh) đang hoặc đã triển khai
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                      Các&nbsp;<b className="text-yellow-300">công ty do phụ nữ làm chủ</b>&nbsp;được khuyến khích đặc biệt.
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                      Cuộc thi tập trung vào các doanh nghiệp nhỏ và vừa hoạt động trong&nbsp;<b className="text-yellow-300">ba lĩnh vực ưu tiên:</b>&nbsp;
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
      </Fade> */}

      {/* Prizes Section */}
      <Slide direction="up" triggerOnce >
        <section
          id="prizes-section"
          style={{ backgroundImage: `url(${images.bg})` }}
          className="relative overflow-hidden text-white bg-cover bg-center bg-no-repeat pt-10 pb-10"
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-700/60 via-emerald-600/40 to-green-500/40 z-10"></div>

          {/* content */}
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-8xl mx-auto">
              <div className="text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                  Quyền lợi khi tham gia chương trình
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-1">
                {prizes.map((prize, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center shadow-lg hover:shadow-2xl transition duration-300"
                  >
                    <div className="flex justify-center mb-4 text-green-300">
                      {prize.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-white">
                      {prize.title}
                    </h3>
                    <p className="text-base text-white">{prize.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Slide>

      {/* Timeline Section */}
      <Fade triggerOnce >
        <section id="timeline-section" className="py-10 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
                  Lộ trình triển khai
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Quy trình rõ ràng, minh bạch từ đăng ký đến trao giải
                </p>
              </div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start group">
                    {/* Số thứ tự với gradient và bóng */}
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-white z-10 flex-shrink-0 shadow-lg transition-transform duration-300 ${item.status === "active"
                        ? "bg-gradient-to-tr from-blue-600 to-blue-400 group-hover:scale-110"
                        : item.status === "completed"
                          ? "bg-gradient-to-tr from-green-600 to-green-400 group-hover:scale-110"
                          : "bg-gray-300"
                        }`}
                    >
                      {item.status === "completed" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                    {/* Nội dung chính */}
                    <div className="ml-10 flex-1 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition-shadow duration-300 group-hover:shadow-2xl">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <span
                            className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3 tracking-wide ${item.status === "active"
                              ? "bg-blue-100 text-blue-700"
                              : item.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-500"
                              }`}
                          >
                            {item.phase}
                          </span>
                          <h3 className="text-3xl font-extrabold text-gray-900 mb-3 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="mt-6 lg:mt-0 text-lg font-semibold text-gray-500 tracking-wide min-w-[120px] text-right">
                          {item.date}
                        </div>
                      </div>
                    </div>
                    {/* Đường nối giữa các bước */}
                    {index < timeline.length - 1 && (
                      <div className="absolute left-8 top-20 w-1 bg-gray-300 rounded-full h-20"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Fade>


      <section
        id="register"
        className="py-12 bg-gradient-to-r from-blue-600 to-green-600 flex flex-col items-center justify-center"
      >
        {/* Form */}
        <iframe
          src="https://airtable.com/embed/appwQsjmzzh0RDaXr/pagByLmsjmGIl7xey/form"
          frameBorder="0"
          width="100%"
          className="w-full rounded-lg shadow-lg 
             h-[3850px] sm:h-[3600px] lg:h-[3350px] 
             max-w-full sm:max-w-4xl lg:max-w-6xl"
          style={{ background: "transparent", border: "1px solid #ccc" }}
          title="Twin Transition Challenge Registration Form"
        />
      </section>


      {/* FAQ Section */}
      <Fade triggerOnce>
        <section id="q&a-section" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-5">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Câu hỏi thường gặp
                </h2>
                <p className="text-xl text-gray-600">
                  Giải đáp những thắc mắc phổ biến về Twin Transition Challenge
                </p>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-bold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-6 h-6 text-gray-500 transition-transform ${openFAQ === index ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {openFAQ === index && (
                      <div className="px-8 pb-6">
                        <p className="mb-4">{faq.intro}</p>
                        {faq.answer && (
                          <ul className="list-disc list-inside space-y-2">
                            {faq.answer.map((item, idx) => (
                              <li key={idx}>
                                {/* Trường hợp item là string */}
                                {typeof item === "string" && item}

                                {/* Trường hợp item là object */}
                                {typeof item === "object" && (
                                  <>
                                    {item.title}
                                    {item.subAnswer && (
                                      <ul className="list-none ml-6 mt-1 space-y-1">
                                        {item.subAnswer.map((sub, subIdx) => (
                                          <li
                                            key={subIdx}
                                            className="before:content-['-'] before:mr-2"
                                          >
                                            {sub}
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <section className="relative bg-gray-50 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h1 className="text-white text-2xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-lg">
            Tham gia 3 cộng đồng chuyển đổi kép cho các ngành liên quan <br />
            <span className="text-white">(Zalo group)</span>
          </h1>

          {/* QR Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 text-center">
            {/* Item */}
            <div className="backdrop-blur-md shadow-lg hover:scale-105 transform transition duration-300 bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-lg">
              <p className="text-xl sm:text-2xl font-semibold text-white mb-4">
                CHẾ BIẾN NÔNG SẢN
              </p>
              <img
                src={images.qr_agri}
                alt="Chế biến nông sản"
                className="w-44 sm:w-56 h-44 sm:h-56 mx-auto object-contain"
              />
            </div>

            <div className="backdrop-blur-md shadow-lg hover:scale-105 transform transition duration-300 bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-lg">
              <p className="text-xl sm:text-2xl font-semibold text-white mb-4">
                CHẾ BIẾN GỖ VÀ GIẤY
              </p>
              <img
                src={images.qr_wood}
                alt="Chế biến gỗ và giấy"
                className="w-44 sm:w-56 h-44 sm:h-56 mx-auto object-contain"
              />
            </div>

            <div className="backdrop-blur-md shadow-lg hover:scale-105 transform transition duration-300 bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-lg">
              <p className="text-xl sm:text-2xl font-semibold text-white mb-4">
                DỆT MAY VÀ DA GIÀY
              </p>
              <img
                src={images.qr_silk}
                alt="Dệt may và da giày"
                className="w-44 sm:w-56 h-44 sm:h-56 mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Fade triggerOnce>
        <footer
          id="contact-section"
          style={{ backgroundImage: `url(${images.txt})` }}
          className="relative overflow-hidden bg-cover bg-center bg-no-repeat text-white"
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container mx-auto px-4 mt-5">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Twin Transition Challenge</h3>
                <p className="mb-6">Chuyển đổi số & xanh cho SMEs Việt Nam</p>
                <a href="https://www.facebook.com/bambuupnetwork" target="_blank" rel="noopener noreferrer">
                  <img
                    src={images.fb}
                    alt="Facebook"
                    className="w-10 h-10 object-contain rounded-full hover:scale-110 transition-transform"
                  />
                </a>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Dự án</h4>
                <ul className="space-y-1">
                  <li><a href="#about" className="hover:text-yellow-300">Giới thiệu</a></li>
                  <li><a href="#target-section" className="hover:text-yellow-300">Đối tượng</a></li>
                  <li><a href="#prizes-section" className="hover:text-yellow-300">Quyền lợi</a></li>
                  <li><a href="#timeline-section" className="hover:text-yellow-300">Lộ trình</a></li>
                  <li><a href="#events-section" className="hover:text-yellow-300">Sự kiện chính</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Hỗ trợ</h4>
                <ul className="space-y-1">
                  <li><a href="#register" className="hover:text-yellow-300">Đăng ký tham gia</a></li>
                  <li><a href="#q&a-section" className="hover:text-yellow-300">FAQ</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-1">Ban tổ chức</h4>
                <div className="space-y-1">
                  <p>Email: <a href="mailto:research@bambuup.com" className="hover:text-yellow-300">research@bambuup.com</a></p>
                  <p>Ms. Hà Linh: 083 911 1104</p>
                  <p>Ms. Hạnh Nguyễn: 083 9918 445</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-6 text-center text-gray-300 text-sm mb-2">
              <p>&copy; 2025 Twin Transition Challenge.</p>
            </div>
          </div>
        </footer >

      </Fade >
    </div >
  );
}

export default App;
